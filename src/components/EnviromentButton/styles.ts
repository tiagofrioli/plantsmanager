import styled from 'styled-components/native';
import Typography from '../Typography';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { EnviromentProps } from './types';

export const Title = styled(Typography)`
  color: ${colors.green};
  font-family: ${fonts.heading};
  `;


/*   export const TitleActive = styled(Typography)`
    color: ${colors.green};
    font-family: ${fonts.heading};
  `;
 */

export const ContainerButton = styled(RectButton)`
  background-color: ${colors.shape};
  height: 40px;
  width: 76px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;


export const ButtonActive = styled(RectButton)`

  background-color: ${colors.green_light};
`;