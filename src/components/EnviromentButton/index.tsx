import React from 'react';
import { View } from 'react-native';

import { ContainerButton, Title } from './styles';
import { EnviromentProps } from './types';


const EnviromentButton: React.FC<EnviromentProps> = (props) => {

  const { title, active=false, ...rest } = props;
  return (
    <ContainerButton {...rest}>
        <Title>{title}</Title>
    </ContainerButton>
  );
}

export default EnviromentButton;