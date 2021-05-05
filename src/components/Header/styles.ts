import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import Typography from '../Typography';


export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 30px 30px 30px;
`;


export const Content = styled.View`

`;

export const Title = styled(Typography)`
  font-size:32px;
  color: ${colors.heading};
  font-family: ${fonts.text};
`;

export const SubTitle = styled(Typography)`
   font-size:32px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 40px;
`;

export const ImageUser = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 40px;
`;