import React from 'react';
import styled from 'styled-components/native';
import palette from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${palette.heading};
  margin-top: 58px;
`;

export const Subtitle = styled.Text`
 text-align: center;
 font-size: 18px;
 color: ${palette.heading};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${palette.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`;


export const Image = styled.Image`
  width: 292px;
  height: 294px;
`;