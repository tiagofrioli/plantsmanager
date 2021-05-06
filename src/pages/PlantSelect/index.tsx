import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CardPrimary from '../../components/Cards/CardPrimary';
import EnviromentButton from '../../components/EnviromentButton';
import { EnviromentProps } from '../../components/EnviromentButton/types';
import Header from '../../components/Header';
import api from '../../service/api';
import { Container, ContainerPlants, TextQuestion } from './styles';
import { PlantsProps } from './types';


const PlantSelect: React.FC = () => {

  const [environments, setEnvironments] = useState<EnviromentProps[]>([]);
  const [plants, setPlants] = useState<PlantsProps[]>([]);

  useEffect(()=> {
      
    async function fetchEnviroment(){
      const { data } = await api.get('plants_environments');
      setEnvironments(data);
    }


    async function fetchPlants(){
      const { data } = await api.get('plants');
      setPlants(data);
    }

    fetchEnviroment();
    fetchPlants();
  }, []);

  return(
      <>
      <Header />
      <Container>
           <TextQuestion>{`Em qual ambiente\nvocê quer colocar sua planta ?`}</TextQuestion>
      <View>
       {/*  <FlatList 
            data={environments}
            renderItem={({item, index})=>(
              <EnviromentButton key={index} title={item} active/>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{  height: 40, justifyContent: "center", paddingBottom: 5, marginVertical:32}}
        /> */}
      </View>
      <ContainerPlants>
          <FlatList 
              data={plants}
              renderItem={({item, index})=> (
                <CardPrimary key={index} data={item} />
              )}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              
          />
      </ContainerPlants>
      </Container>
      </>
  );
}

export default PlantSelect;