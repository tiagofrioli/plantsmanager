import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CardPrimary from '../../components/Cards/CardPrimary';
import EnviromentButton from '../../components/EnviromentButton';
import { EnviromentProps } from '../../components/EnviromentButton/types';
import Header from '../../components/Header';
import api from '../../service/api';
import { Container, ContainerPlants, TextQuestion } from './styles';
import { PlantsProps } from './types';
import Loading from '../../components/Loading';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/core';


const PlantSelect: React.FC = () => {

  const [environments, setEnvironments] = useState<EnviromentProps[]>([]);
  const [plants, setPlants] = useState<PlantsProps[]>([]);
  const [enviromentSelected, setEnviromentSelected] = useState('all');
  const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([])
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(false);

  
  const navigation = useNavigation();


  function handleNextPage(distance:number){
      if(distance > 1)
         return;
      setNextPage(true);
      setPage(oldValue => oldValue + 1);

      fetchPlants();
  } 

  async function fetchPlants(){
    const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=6`);
    if(!data)
        return setLoading(true);
    if(page > 1){
      setPlants(oldValue => [...oldValue, ...data]);
      setFilteredPlants(oldValue => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }
        
    setLoading(false);
    setNextPage(false);
  }
 

  useEffect(()=> {
      
    async function fetchEnviroment(){
      const { data } = await api.get('plants_environments?_sort=title&_order=asc');
      setEnvironments([{
        key: 'all',
        title: "Todos"
      },
        ...data
    ]);
    }

    fetchEnviroment();
    fetchPlants();

    }, []);



  function handleEnviromentSelected(enviroment: string){
    setEnviromentSelected(enviroment);

    if(enviroment === 'all')
      return setFilteredPlants(plants);
    
    const filtered = plants.filter(plant => plant.environments.includes(enviroment));

    setFilteredPlants(filtered);
  }

  function handlePlantSelect(plant: PlantsProps){

    navigation.navigate('PlantSave');
    
  }



  if(loading)
      return <Loading />

  return(
      <>
      <Header />
      <Container>
           <TextQuestion>{`Em qual ambiente\nvocê quer colocar sua planta ?`}</TextQuestion>
      <View style={{marginLeft: 36}}>
        <FlatList 
            data={environments}
            keyExtractor={(item)=> item.key}
            renderItem={({item, index})=>(
              <EnviromentButton
                 onPress={()=> handleEnviromentSelected(item.key)} 
                 title={item.title}
                 active={item.key === enviromentSelected} />

            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{  height: 40, justifyContent: "center", paddingBottom: 5, marginVertical:32}}
        />
      </View>
      <ContainerPlants>
          <FlatList 
              data={filteredPlants}
              renderItem={({item, index})=> (
                <CardPrimary key={index} 
                            data={item} 
                            onPress={()=> handlePlantSelect(item)}
                  />
              )}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              onEndReachedThreshold={0.1}
              onEndReached={({distanceFromEnd}) => handleNextPage(distanceFromEnd)}
              ListFooterComponent={
                nextPage ?  
                  <ActivityIndicator color={colors.green} />
                  : <></>
                }
          />
      </ContainerPlants>
      </Container>
      </>
  );
}

export default PlantSelect;