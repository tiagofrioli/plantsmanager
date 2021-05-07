import React from 'react';
import { ContainerButton, Title } from './styles';
import { EnviromentProps } from './types';



const EnviromentButton: React.FC<EnviromentProps> = (props) => {

  const { title,onPress, active=false, ...rest } = props;
  return (
    <ContainerButton active={active} onPress={onPress}>
        <Title>{title}</Title>
    </ContainerButton>
  );
}

export default EnviromentButton;