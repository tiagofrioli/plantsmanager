import styled from 'styled-components/native';
import fonts from '../../styles/fonts';
import palette from '../../styles/colors';

export const Text = styled.Text`
  font-family: ${fonts.heading};
  text-align: center;
  color: ${palette.heading};
  font-weight: bold;
  margin-top: 42px;
  font-size: 32px;
  line-height: 38px;
`;