import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, Text } from 'react-native';
import Header from '../../components/Header';
import water from '../../assets/waterdrop.png';

import { Container, Plants, PlantsTitle, SpotLight, SpotLightImage, SpotLightText } from './styles';
import { loadPlant, PlantsProps } from '../../libs/storage';
import { formatDistance } from 'date-fns/esm';
import { pt } from 'date-fns/locale';

const MyPlants: React.FC = () => {

  const [ myPlants, setMyPlants] = useState<PlantsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [ nextWatered, setNextWatered ] = useState<string>();

  useEffect(()=> {

    async function loadStorageData() {

      const plantsStoraged = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        {locale: pt }
      );

      setNextWatered(`Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas `);
      setMyPlants(plantsStoraged);
      setLoading(false);
      
    }
    loadStorageData();
  } , []);

  return (

      <Container>
        <Header/>
        <SpotLight>
          <SpotLightImage source={water}  />
          <SpotLightText>
              Texto
          </SpotLightText>
        </SpotLight>
        <Plants>
          <PlantsTitle>
            Proximas regadas
          </PlantsTitle>
          <FlatList 
            data={myPlants}
            keyExtractor={(item)=> String(item.id)}
            renderItem={({item})=> (
              <Text>Elemnto</Text>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flex: 1}}
          />
        </Plants>
      </Container>
  );
}

export default MyPlants;