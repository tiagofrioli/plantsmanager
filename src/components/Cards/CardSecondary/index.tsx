import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import {  Animated } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import colors from '../../../styles/colors';
import { ButtonRemove, Container, ContainerDetails, Time, TimeLabel, Title } from './styles';
import { PlantProps } from './types';



const CardSecondary: React.FC<PlantProps> = (props) => {

  const { data, handleRemove ,...rest } = props

  return (
    <Swipeable overshootRight={false} renderRightActions={()=> (
      <Animated.View>
        <ButtonRemove onPress={handleRemove}>
            <Feather name="trash" size={32} color={colors.white} />
        </ButtonRemove>
      </Animated.View>
    )} >
      <Container {...rest}>
          <SvgFromUri uri={data.photo} width={50} height={50}/>
          <Title>{data.name}</Title>
          <ContainerDetails>
            <TimeLabel>Regar às</TimeLabel>
            <Time>{data.hour}</Time>
        </ContainerDetails>
      </Container>
      </Swipeable>
  );
}

export default CardSecondary;