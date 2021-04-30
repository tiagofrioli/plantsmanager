import React from 'react';
import { Feather } from '@expo/vector-icons'
import { Next } from './styles';
import { ButtonProps } from './types';
import {  Text } from 'react-native';

export function NextButton({title, ...rest}:ButtonProps)  {

  return (
    <Next {...rest}>
       <Feather name="chevron-right" style={{color:'#fff', fontSize:28}} />
    </Next>
  );
}

export default NextButton;