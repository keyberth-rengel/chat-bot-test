import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

//locates
import ES from '../../i18n/ES';

//styles
import {
  ButtonDefaultStyled,
  ContainerStyled,
  DividerStyled,
  AvatarCircleDefaultStyled,
  TextDefaultStyled,
  TextSmallStyled,
  colors,
} from '../../styles';

//contanst
import {routesName} from '../../app/contants';

//store
import {RootState} from '../../store';

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const authState = useSelector<RootState>(
    (state: RootState) => state.authState,
  );

  const signOff = () => {
    navigationToRegister();
  };

  const navigationToRegister = () => {
    navigation.navigate(routesName.REGISTER);
  };

  console.log('authState', authState);

  return (
    <ContainerStyled flexbox justifyBetween alignCenter>
      <ContainerStyled p="0" flexbox alignCenter h="auto">
        <DividerStyled height="48" />
        <AvatarCircleDefaultStyled
          bg={colors.grayDark}
          source={require('../../assets/avatar-profile-picture.jpeg')}
        />
        <DividerStyled height="48" />
        <ContainerStyled p="0" flexbox alignCenter h="auto">
          <TextSmallStyled color={colors.grayDark} weight="700">
            {ES.user_name}
          </TextSmallStyled>
          <TextDefaultStyled color={colors.black} weight="700">
            testing1
          </TextDefaultStyled>
        </ContainerStyled>

        <DividerStyled height="32" />
        <ContainerStyled p="0" flexbox alignCenter h="auto">
          <TextSmallStyled color={colors.grayDark} weight="700">
            {ES.email}
          </TextSmallStyled>
          <TextDefaultStyled color={colors.black} weight="700">
            testing1@test.com
          </TextDefaultStyled>
        </ContainerStyled>
      </ContainerStyled>

      <ButtonDefaultStyled onPress={signOff} bg={colors.pink}>
        <TextDefaultStyled weight="700" color={colors.white}>
          {ES.sign_off}
        </TextDefaultStyled>
      </ButtonDefaultStyled>
    </ContainerStyled>
  );
};
