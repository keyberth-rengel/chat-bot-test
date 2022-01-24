import styled from 'styled-components/native';
import {colors} from './colors';

interface ITextStyledProps {
  color?: string;
  weight?: string;
  family?: string;
  align?: string;
}

export const TextLongStyled = styled.Text<ITextStyledProps>`
  font-size: 24px;
  line-height: 24px;
  color: ${({color}) => (color ? color : colors.black)};
  font-weight: ${({weight}) => (weight ? weight : 'normal')};
  font-family: ${({family}) => (family ? family : 'normal')};
  text-align: ${({align}) => (align ? align : 'left')};
`;

export const TextDefaultStyled = styled.Text<ITextStyledProps>`
  font-size: 16px;
  line-height: 24px;
  color: ${({color}) => (color ? color : colors.black)};
  font-weight: ${({weight}) => (weight ? weight : 'normal')};
  font-family: ${({family}) => (family ? family : 'normal')};
  text-align: ${({align}) => (align ? align : 'left')};
`;

export const TextMediumStyled = styled.Text<ITextStyledProps>`
  font-size: 14px;
  line-height: 24px;
  color: ${({color}) => (color ? color : colors.black)};
  font-weight: ${({weight}) => (weight ? weight : 'normal')};
  font-family: ${({family}) => (family ? family : 'normal')};
  text-align: ${({align}) => (align ? align : 'left')};
`;

export const TextSmallStyled = styled.Text<ITextStyledProps>`
  font-size: 12px;
  line-height: 24px;
  color: ${({color}) => (color ? color : colors.black)};
  font-weight: ${({weight}) => (weight ? weight : 'normal')};
  font-family: ${({family}) => (family ? family : 'normal')};
  text-align: ${({align}) => (align ? align : 'left')};
`;
