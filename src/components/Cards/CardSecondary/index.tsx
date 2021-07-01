import React from 'react';
import { View } from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import { Container, ContainerDetails, Time, TimeLabel, Title } from './styles';
import { PlantProps } from './types';


const CardSecondary: React.FC<PlantProps> = (props) => {

  const { data, ...rest } = props

  return (
      <Container {...rest}>
          <SvgFromUri uri={data.photo} width={50} height={50}/>
          <Title>{data.name}</Title>
          <ContainerDetails>
            <TimeLabel>Regar às</TimeLabel>
            <Time>{data.hour}</Time>
        </ContainerDetails>
      </Container>
  );
}

export default CardSecondary;