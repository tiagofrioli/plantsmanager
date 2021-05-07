import React from 'react';
import { View } from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import { Container, Title } from './styles';
import { PlantProps } from './types';


const CardPrimary: React.FC<PlantProps> = (props) => {

  const { data, ...rest } = props

  return (
      <Container {...rest}>
          <SvgFromUri uri={data.photo} width={70} height={70}/>
          <Title>{data.name}</Title>
      </Container>
  );
}

export default CardPrimary;