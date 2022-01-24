import styled from 'styled-components/native';
import {colors} from './colors';

interface IAvatarCircleDefaultProps {
  bg?: string;
  borderColor?: string;
}

export const AvatarCircleDefaultStyled = styled.Image<IAvatarCircleDefaultProps>`
  width: 96px;
  height: 96px;
  border-color: ${({borderColor}) => (borderColor ? borderColor : colors.black)}
  border-width: 1px;
  border-radius: 50px;
  text-align: center;
  background-color: ${({bg}) => (bg ? bg : 'transparent')};
`;
