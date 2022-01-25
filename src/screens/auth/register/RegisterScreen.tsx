import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {routesName} from '../../../app/contants';

//locates
import ES from '../../../i18n/ES';

//styles
import {
  ButtonDefaultStyled,
  ContainerStyled,
  DividerStyled,
  InputDefaultStyled,
  colors,
  TextLongStyled,
  TextDefaultStyled,
} from '../../../styles';

//actions
import {setUserAuthAction} from '../../../store/auth/authAction';

export function RegisterScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [textUserName, setTextUserName] = useState<string>('');
  const [textEmail, setTextEmail] = useState<string>('');
  const [textPassword, setTextPassword] = useState<string>('');

  const validateForm = () => {
    const data = {textUserName, textEmail, textPassword};
    console.log('data', data);
    dispatch(
      setUserAuthAction({
        userName: textUserName,
        email: textEmail,
        password: textPassword,
      }),
    );
    cleanForm();
    navigationToHome();
  };

  const cleanForm = () => {
    setTextUserName('');
    setTextEmail('');
    setTextPassword('');
  };

  const navigationToHome = () => {
    navigation.navigate(routesName.HOME);
  };

  return (
    <ContainerStyled flexbox alignCenter justifyBetween>
      <ContainerStyled p="0px" h="auto" flexbox alignCenter>
        <TextLongStyled weight="700">{ES.sign_in}</TextLongStyled>
        <DividerStyled height="48px" />
        <InputDefaultStyled
          onChangeText={setTextUserName}
          bg={colors.gray}
          placeholder={ES.user_name}
          defaultValue={textUserName}
        />
        <DividerStyled height="12px" />
        <InputDefaultStyled
          onChangeText={setTextEmail}
          bg={colors.gray}
          placeholder={ES.email}
          textContentType="emailAddress"
          defaultValue={textEmail}
        />
        <DividerStyled height="12px" />
        <InputDefaultStyled
          onChangeText={setTextPassword}
          bg={colors.gray}
          placeholder={ES.password}
          textContentType="password"
          secureTextEntry
          defaultValue={textPassword}
        />
      </ContainerStyled>

      <ButtonDefaultStyled onPress={validateForm} bg={colors.orange}>
        <TextDefaultStyled weight="700" color={colors.white}>
          {ES.create_account}
        </TextDefaultStyled>
      </ButtonDefaultStyled>
    </ContainerStyled>
  );
}
