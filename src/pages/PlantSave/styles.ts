import { color } from 'react-native-reanimated';
import styled from 'styled-components/native';
import Typography from '../../components/Typography';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


export const Container = styled.View`

  flex: 1;
  justify-content: space-around;
  background-color: ${colors.shape};
`;


export const ContainerInfo = styled.View`

  flex: 1;
  padding: 20px 30px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.shape};
`;


export const ContainerController = styled.View`

    background-color: ${colors.white};
    padding: 20px;

`;


export const Title = styled(Typography)`

  text-align: center;
  font-family: ${fonts.heading};
  font-size: 24px;
  color: ${colors.heading};
  margin-top: 15px;

`;


export const About = styled(Typography)`

  text-align: center;
  font-family: ${fonts.text};
  color: ${colors.heading};
  font-size: 17px;
  margin-top: 10px;
`;


export const TipContainer = styled.View`

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.blue_light};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`;

export const TipImage = styled.Image`

  width: 56px;
  height: 56px;

`;

export const TipTitle = styled(Typography)`

  flex: 1;
  margin-left: 20px;
  font-family: ${fonts.text};
  color: ${colors.blue};
  font-size: 17px;
  text-align: justify;
  `;


export const AlertLabel = styled(Typography)`

  text-align: center;
  font-family: ${fonts.complement};
  color: ${colors.heading};
  font-size: 12px;
  margin-bottom: 5px;
`;



