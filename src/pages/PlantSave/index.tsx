import React, { useState } from 'react';
import { Alert, Platform, Text } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import water from '../../assets/waterdrop.png';
import Button from '../../components/Button';
import { About, AlertLabel, Container, ContainerController, ContainerInfo, TipContainer, TipImage, TipTitle, Title } from './styles';
import { useRoute } from '@react-navigation/core'
import { Params } from './types';
import DateTimePicker, {Event} from  '@react-native-community/datetimepicker'
import { format, isBefore } from 'date-fns';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import {loadPlant, plantSave} from '../../libs/storage';


const PlantSave: React.FC = () => {

  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');
  const route = useRoute();
  const { plant } = route.params as Params;

  function handleChangeTime(event: Event, dateTime: Date | undefined){

    if(Platform.OS === 'android'){
      setShowDatePicker(oldState => !oldState);
    }

    if(dateTime && isBefore(dateTime, new Date())){
      setSelectedDateTime(new Date());
      return Alert.alert("Escolha uma data no futuro!");
    }

    if(dateTime){
      setSelectedDateTime(dateTime);
    }

  }


  function handleNewTime(){
    setShowDatePicker(oldState => !oldState);
  }

  async function handleSave(){


    try {

      await plantSave({
        ...plant,
        dateTimeNotification: selectedDateTime
      })
        
    } catch (error) {
      throw new Error(error)
    }
  }


  return (

    <Container>
      <ContainerInfo>

        <SvgFromUri uri="" height={150} width={150} />

        <Title>{}</Title>
        <About>{plant.about}</About>

      </ContainerInfo>

      <ContainerController>

        <TipContainer>
          <TipImage source={water}  />
          <TipTitle>{plant.water_tips}</TipTitle>
        </TipContainer>

        <AlertLabel>Escolha o melhor horário para ser lembrado:</AlertLabel>

        { showDatePicker && <DateTimePicker value={selectedDateTime} mode="time" display="spinner" 
            onChange={handleChangeTime}
          />}

          {
            Platform.OS === 'android' && (
              <TouchableOpacity style={{
                width: '100%',
                alignItems:'center',
                paddingVertical: 40,
              }}
               onPress={handleNewTime}>
                   <Text 
                    style={{
                    fontSize: 24,
                    color: colors.heading, 
                    fontFamily: fonts.text }}>{`Mudar ${format(selectedDateTime, 'HH:mm')}`}</Text>
              </TouchableOpacity>
            )
          }
        <Button title="Cadastrar planta" onPress={handleSave}  />

      </ContainerController>

    </Container>
  );
}

export default PlantSave;