import {TextInputProps} from 'react-native';
import styled from 'styled-components/native';
import {colors} from './colors';

interface IInputStyledProps extends TextInputProps {
  bg?: string;
  color?: string;
  border?: boolean;
}

export const InputDefaultStyled = styled.TextInput<IInputStyledProps>`
  width: 100%;
  max-width: 327px;
  height: 64px;
  border-radius: 32px;
  padding: 20px 24px;
  background-color: ${({bg}) => (bg ? bg : 'transparent')};
  color: ${({color}) => (color ? color : colors.black)};
  ${({border}) => border && `border: 1px solid ${colors.error}`};
  size: 16px;
`;

export const InputMediumStyled = styled.TextInput<IInputStyledProps>`
  width: 80%;
  height: 64px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 28px;
  padding: 20px 24px;
  background-color: ${({bg}) => (bg ? bg : 'transparent')};
  color: ${({color}) => (color ? color : colors.black)};
`;
