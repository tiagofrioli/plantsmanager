import React from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import EnviromentButton from '../../components/EnviromentButton';
import Header from '../../components/Header';
import { Container, TextQuestion } from './styles';

// import { Container } from './styles';

const PlantSelect: React.FC = () => {
  return(
      <>
      <Header />
      <Container>
           <TextQuestion>{`Em qual ambiente\nvocê quer colocar sua planta ?`}</TextQuestion>
      <View>
        <FlatList 
            data={[1,2,3,4,5,6]}
            renderItem={({item})=>(
              <EnviromentButton title="Cozinha" active/>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
      </View>
      </Container>
      </>
  );
}

export default PlantSelect;