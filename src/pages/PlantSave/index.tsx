import React from 'react';
import { View } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import water from '../../assets/waterdrop.png';
import Button from '../../components/Button';
import { About, AlertLabel, Container, ContainerController, ContainerInfo, TipContainer, TipImage, TipTitle, Title } from './styles';


const PlantSave: React.FC = () => {
  return (

    <Container>
      <ContainerInfo>

        <SvgFromUri uri="" height={150} width={150} />

        <Title>Nome da Planta</Title>
        <About>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             
        </About>

      </ContainerInfo>

      <ContainerController>

        <TipContainer>
          <TipImage source={water}  />
          <TipTitle>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam obcaecati
           
          </TipTitle>
        </TipContainer>

        <AlertLabel>Escolha o melhor horário para ser lembrado:</AlertLabel>
        <Button title="Cadastrar planta" onPress={()=>{}}  />

      </ContainerController>

    </Container>
  );
}

export default PlantSave;