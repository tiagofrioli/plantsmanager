import styled from 'styled-components/native';
import palette from '../../styles/colors';

export const Container = styled.SafeAreaView`
 flex:1;
 width: 100%;
 align-items: center;
 justify-content: space-around;
`;

export const Content = styled.SafeAreaView`
 flex: 1;
 width: 100%;
`;

export const Form = styled.View`
 flex:1;
 justify-content: center;
 padding: 54px;
 align-items: center;
 `;

export const Input = styled.TextInput`

 border-bottom-width: 1px;
 border-color: ${palette.gray};
 color: ${palette.heading};
 width: 100%;
 font-size: 18px;
 margin-top: 50px;
 padding: 10px;
 text-align: center;
`;

export const ButtonFooter = styled.View`
  width: 100%;
  margin-top: 40px;
  padding: 0 20px 0 20px;
`;
