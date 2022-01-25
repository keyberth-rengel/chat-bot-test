import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
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
import {routesName} from '../../core/contants';

//methods
import {removeStoreData} from '../../core/storage';

//store
import {RootState} from '../../store';

//actions
import {clearChatAction} from '../../store/chat/chatAction';

//interfaces
import {UserAuthState} from '../../store/auth/auth.interface';

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {email, userName} = useSelector<RootState, UserAuthState>(
    (state: RootState) => state.authState.auth,
  );

  const signOff = async () => {
    dispatch(clearChatAction());
    await removeStoreData();
    navigationToRegister();
  };

  const navigationToRegister = () => {
    navigation.navigate(routesName.REGISTER);
  };

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
            {userName || ES.user_name_fake}
          </TextDefaultStyled>
        </ContainerStyled>

        <DividerStyled height="32" />
        <ContainerStyled p="0" flexbox alignCenter h="auto">
          <TextSmallStyled color={colors.grayDark} weight="700">
            {ES.email}
          </TextSmallStyled>
          <TextDefaultStyled color={colors.black} weight="700">
            {email || ES.email_fake}
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
