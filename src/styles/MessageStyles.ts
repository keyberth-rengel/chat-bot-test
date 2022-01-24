import styled from 'styled-components/native';
import {colors} from './colors';

interface IMessageBodyProps {
  bg?: string;
}

export const MessageBody = styled.View<IMessageBodyProps>`
  max-width: 70%;
  width: auto;
  min-height: 40px;
  height: auto;
  padding: 8px 16px;
  border-radius: 18px;
  background-color: ${({bg}) => (bg ? bg : colors.gray)};
`;
