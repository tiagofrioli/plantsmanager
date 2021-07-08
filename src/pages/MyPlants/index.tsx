import { formatDistance } from 'date-fns/esm';
import { pt } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import water from '../../assets/waterdrop.png';
import CardSecondary from '../../components/Cards/CardSecondary';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import { loadPlant, PlantsProps, removePlant } from '../../libs/storage';
import { Container, Plants, PlantsTitle, SpotLight, SpotLightImage, SpotLightText } from './styles';


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

  function handleRemove(plant: PlantsProps){
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [{
      text: 'Não',
      style: 'cancel'
    },
     {
       text: 'Sim',
       onPress: async () => {
         try {
            await removePlant(plant.id);
            setMyPlants((oldData) => ( oldData.filter((item) => item.id !== plant.id)));

         } catch (error) {
            Alert.alert("Não foi possivel remover");
         }
       }
     } 
  ])
  }

  if(loading)
    return <Loading />

  return (

      <Container>
        <Header/>
        <SpotLight>
          <SpotLightImage source={water}  />
          <SpotLightText>
              {nextWatered}
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
              <CardSecondary data={item} handleRemove={()=> {handleRemove(item)}} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flex: 1}}
          />
        </Plants>
      </Container>
  );
}

export default MyPlants;