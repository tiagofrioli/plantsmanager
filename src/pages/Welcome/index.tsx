import React from 'react';

import watering from '../../../assets/watering.png';
import { NextButton } from '../../components/NextButton';
import Typography from '../../components/Typography';
import {  Container, Subtitle, Image } from './styles';


const Welcome: React.FC = () => {
  return (
   <Container>
    <Typography>{`Gerencie\nsuas plantas\nde forma fácil`}</Typography>
    <Image source={watering} resizeMode="contain" />
    <Subtitle> {`Não esqueça mais de regar suas\nplantas. Nós cuidamos de lemrar sempre que precisar.`}</Subtitle>
    <NextButton />
   </Container>
  );
}

export default Welcome;