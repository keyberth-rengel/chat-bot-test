import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {colors} from './colors';

//dimensions
const {width, height} = Dimensions.get('window');

interface IContainerStyledProps {
  flexbox?: boolean;
  justifyCenter?: boolean;
  alignCenter?: boolean;
  pL?: string;
  pR?: string;
  pT?: string;
  pB?: string;
  p?: string;
  justifyBetween?: boolean;
  w?: string;
  h?: string;
}

interface IDividerStyledProps {
  width?: string;
  height?: string;
}

export const ContainerStyled = styled.View<IContainerStyledProps>`
  width: ${({w = '100%'}) => (w ? w : width)};
  height: ${({h = '100%'}) => (h ? h : height)};
  padding-top: ${({pT = '32'}) => pT}px;
  padding-right: ${({pR = '24'}) => pR}px;
  padding-bottom: ${({pB = '32'}) => pB}px;
  padding-left: ${({pL = '24'}) => pL}px;
  ${({p}) => p && `padding: ${p}`};
  background-color: ${colors.white};
  ${({flexbox = false}) => flexbox && 'display: flex'};
  ${({justifyCenter = false}) => justifyCenter && 'justify-content: center'};
  ${({justifyBetween = false}) =>
    justifyBetween && 'justify-content: space-between'};
  ${({alignCenter = false}) => alignCenter && 'align-items: center'};
`;

export const DividerStyled = styled.View<IDividerStyledProps>`
  width: ${props => (props.width ? props.width : width)};
  height: ${props => (props.height ? props.height : '0px')};
`;
