import { color } from "react-native-reanimated";
import styled from "styled-components/native";
import Typography from "../../components/Typography";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";



export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  padding-top: 50px;
  background-color: ${colors.background};

`;


export const SpotLight = styled.View`
  background-color: ${colors.blue_light};
  padding: 0 20px;
  border-radius: 20px;
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export const SpotLightImage = styled.Image`

  width: 60px;
  height: 60px;

`;

export const SpotLightText = styled(Typography)`
  flex: 1;
  color: ${colors.blue};
  padding: 0 20px;
  text-align: justify;

`;

export const Plants = styled.View`
flex: 1;
width: 100%;
`;


export const PlantsTitle = styled(Typography)`

  font-size: 24px;
  font-family: ${fonts.heading} ;
  color: ${colors.heading};
  margin: 20px 0;
`;
