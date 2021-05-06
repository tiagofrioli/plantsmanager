import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import Typography from '../../Typography';

export const Container = styled(RectButton)`
  flex:1;
  max-width: 45%;
  background-color: ${colors.shape};
  border-radius: 20px;
  padding: 20px 0 ;
  align-items: center;
  margin: 10px;
`;

export const Title = styled(Typography)`
  color: ${colors.green_dark};
  font-family: ${fonts.heading};
  margin: 0 16px;
  text-align: center;
`;