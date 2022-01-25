import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {routesName} from '../../../core/contants';

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
  TextSmallStyled,
} from '../../../styles';

//actions
import {setUserAuthAction} from '../../../store/auth/authAction';
import {getStoreData} from '../../../core/storage';

interface IInputErrorProps {
  email: boolean;
  password: boolean;
  userName: boolean;
}

export function RegisterScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [textUserName, setTextUserName] = useState<string>('');
  const [textEmail, setTextEmail] = useState<string>('');
  const [textPassword, setTextPassword] = useState<string>('');
  const [inputError, setInputError] = useState<IInputErrorProps>({
    email: false,
    password: false,
    userName: false,
  });

  const validateForm = (): void => {
    if (!inputError.userName && !inputError.email && !inputError.password) {
      dispatch(
        setUserAuthAction({
          userName: textUserName,
          email: textEmail,
          password: textPassword,
        }),
      );
      cleanForm();
      navigationToHome();
    }
  };

  const isValidateEmail = (email: string): boolean => {
    const EMAIL_REGEX =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return EMAIL_REGEX.test(email);
  };

  const cleanForm = (): void => {
    setTextUserName('');
    setTextEmail('');
    setTextPassword('');
  };

  const validatedUserNameField = (text: string): void => {
    if (text.length > 3) {
      setInputError({
        ...inputError,
        userName: false,
      });
      setTextUserName(text);
    } else {
      setInputError({
        ...inputError,
        userName: true,
      });
    }
  };

  const validatedEmailField = (text: string): void => {
    if (isValidateEmail(text)) {
      setInputError({
        ...inputError,
        email: false,
      });
      setTextEmail(text);
    } else {
      setInputError({
        ...inputError,
        email: true,
      });
    }
  };

  const validatedPasswordField = (text: string): void => {
    if (text.length > 6) {
      setInputError({
        ...inputError,
        password: false,
      });
      setTextPassword(text);
    } else {
      setInputError({
        ...inputError,
        password: true,
      });
    }
  };

  useEffect(() => {
    validateIfSession();
  }, []);

  const validateIfSession = async (): Promise<void> => {
    const userAuth = await getStoreData();

    if (userAuth) {
      dispatch(setUserAuthAction(userAuth));
      navigationToHome();
    }
  };

  const navigationToHome = (): void => {
    navigation.navigate(routesName.HOME);
  };

  const validatedError =
    inputError.email || inputError.userName || inputError.password;

  return (
    <ContainerStyled flexbox alignCenter justifyBetween>
      <ContainerStyled p="0px" h="auto" flexbox alignCenter>
        <TextLongStyled weight="700">{ES.sign_in}</TextLongStyled>
        <DividerStyled height="48px" />
        <InputDefaultStyled
          border={inputError.userName}
          onChangeText={validatedUserNameField}
          bg={colors.gray}
          placeholder={ES.user_name}
          defaultValue={textUserName}
          selectionColor={colors.orange}
        />
        {inputError.userName && (
          <TextSmallStyled color={colors.error}>
            {ES.error_user_name}
          </TextSmallStyled>
        )}
        <DividerStyled height="12px" />
        <InputDefaultStyled
          border={inputError.email}
          onChangeText={validatedEmailField}
          bg={colors.gray}
          placeholder={ES.email}
          textContentType="emailAddress"
          keyboardType="email-address"
          defaultValue={textEmail}
          selectionColor={colors.orange}
        />
        {inputError.email && (
          <TextSmallStyled color={colors.error}>
            {ES.error_email}
          </TextSmallStyled>
        )}
        <DividerStyled height="12px" />
        <InputDefaultStyled
          border={inputError.password}
          onChangeText={validatedPasswordField}
          bg={colors.gray}
          placeholder={ES.password}
          textContentType="password"
          secureTextEntry
          defaultValue={textPassword}
        />
        {inputError.password && (
          <TextSmallStyled color={colors.error}>
            {ES.error_password}
          </TextSmallStyled>
        )}
      </ContainerStyled>

      <ButtonDefaultStyled
        disabled={validatedError}
        onPress={validateForm}
        bg={validatedError ? colors.grayDark : colors.orange}>
        <TextDefaultStyled weight="700" color={colors.white}>
          {ES.create_account}
        </TextDefaultStyled>
      </ButtonDefaultStyled>
    </ContainerStyled>
  );
}
