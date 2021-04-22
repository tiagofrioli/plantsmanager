import React from 'react';
import {  Text } from 'react-native';
import watering from '../../../assets/watering.png';
import { Button, Container, Subtitle, Title, Image } from './styles';


const Welcome: React.FC = () => {
  return (
   <Container>
    <Title>{`Gerencie \n suas plantas \n de forma fácil`}</Title>
    <Image source={watering} />
    <Subtitle> {`Não esqueça mais de regar suas \n plantas. Nós cuidamos de lemrar sempre que precisar.`}</Subtitle>
    <Button> 
      <Text> > </Text>
    </Button>
   </Container>
  );
}

export default Welcome;