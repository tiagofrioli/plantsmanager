import styled from 'styled-components/native';
import Typography from '../../components/Typography';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';



export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;

`;

export const Title = styled(Typography)`
  font-size: 22px;
  font-family: ${fonts.heading};
  text-align: center;
  color: ${colors.heading};
  line-height: 38px;
  margin-top: 15px;
`;

export const Subtitle = styled(Typography)`
  font-family: ${fonts.text};
  text-align: center;
  font-size: 20px;
  padding: 10px 0;
  color: ${colors.heading};
`;


export const Emoji = styled(Typography)`
  font-size: 78px;

`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
`;

export const Footer = styled.View`
 width: 100%;
 padding: 20px 50px;
 margin-top: 20px;

`;
