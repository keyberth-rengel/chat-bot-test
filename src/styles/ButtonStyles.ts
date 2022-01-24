import styled from 'styled-components/native';
import {colors} from './colors';

interface IButtonStyledProps {
  color?: string;
  bg?: string;
}

export const ButtonDefaultStyled = styled.TouchableOpacity<IButtonStyledProps>`
  width: 327px;
  height: 64px;
  border-radius: 32px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${({bg}) => (bg ? bg : 'transparent')};
  color: ${({color}) => (color ? color : colors.black)};
`;

export const ButtonCircleSmallStyled = styled.View<IButtonStyledProps>`
  width: 56px;
  height: 56px;
  border-radius: 30px;
  text-align: center;
  background-color: ${({bg}) => (bg ? bg : 'transparent')};
`;
