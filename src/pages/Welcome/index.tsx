import { useNavigation } from '@react-navigation/core';
import React from 'react';

import watering from '../../../assets/watering.png';
import { NextButton } from '../../components/NextButton';
import Typography from '../../components/Typography';
import {  Container, Subtitle, Image } from './styles';


const Welcome: React.FC = () => {
  const navigation = useNavigation();

  function handleStart(){
      navigation.navigate('UserIdentification');
  }

  return (
   <Container>
    <Typography>{`Gerencie\nsuas plantas\nde forma fácil`}</Typography>
    <Image source={watering} resizeMode="contain" />
    <Subtitle> {`Não esqueça mais de regar suas\nplantas. Nós cuidamos de lemrar sempre que precisar.`}</Subtitle>
    <NextButton onPress={handleStart}  />
   </Container>
  );
}

export default Welcome;