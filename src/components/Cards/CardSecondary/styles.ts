import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import Typography from '../../Typography';

export const Container = styled(RectButton)`
  width: 100%;
  padding: 25px 10px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.shape};
  margin: 5px 0;
  
`;

export const Title = styled(Typography)`
  color: ${colors.green_dark};
  font-family: ${fonts.heading};
  margin-left: 10px;
  font-size: 17px;
  flex: 1;

`;


export const ContainerDetails = styled.View`
  align-items: flex-end;

`;

export const TimeLabel = styled(Typography)`
  font-size: 16px;
  font-family: ${fonts.text};
  color: ${colors.body_light};

`;

export const Time = styled(Typography)`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${fonts.heading};
  color: ${colors.body_dark};
`;


export const ButtonRemove = styled(RectButton)`
  width: 100px;
  height: 85px;
  background-color: ${colors.red};
  margin-top: 15px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  position: relative;
  right: 20px;
`;

