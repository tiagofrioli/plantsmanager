import styled from 'styled-components/native';
import Typography from '../Typography';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { EnviromentProps } from './types';

export const Title = styled(Typography)<EnviromentProps>`
  color: ${props => props.active ? colors.heading : colors.green_dark};
  font-family: ${props => props.active ? fonts.heading : fonts.text};
  `;


export const ContainerButton = styled.TouchableOpacity<EnviromentProps>`
  background-color: ${props => props.active ? colors.green_light : colors.shape};
  height: 40px;
  width: 76px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-right: 8px;
`;
