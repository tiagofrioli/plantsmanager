import React from 'react';
import { View } from 'react-native';


import { Container, Title } from './styles';
import { PlantProps } from './types';


const CardPrimary: React.FC<PlantProps> = (props) => {

  const { data, ...rest } = props

  return (
      <Container {...rest} >
       
          <Title>{data.name}</Title>
      </Container>
  );
}

export default CardPrimary;