import React from 'react';
import styled from 'styled-components/native';
import palette from '../../styles/colors';
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width * 0.7;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Subtitle = styled.Text`
 text-align: center;
 font-size: 18px;
 color: ${palette.heading};
 padding: 0 20px 0 20px;
`;


export const Image = styled.Image`

  height: ${windowWidth};
`;