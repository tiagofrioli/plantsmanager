import React from 'react';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/core'
import { Container, Content, Emoji, Footer, Subtitle, Title } from './styles';

const Confirmation: React.FC = () => {

 const navigation = useNavigation();

 function handleMoveOn(){
    navigation.navigate('PlantSelect');
 }

  return (
     <Container>
        <Content>
           <Emoji>😉</Emoji>
           <Title>Prontinho!</Title>
           <Subtitle>Agora vamos começar a cuidar das suas plantinhas com muito cuidado</Subtitle>
        <Footer>
           <Button title="Começar" onPress={handleMoveOn} />
        </Footer>
        </Content>
     </Container>
  );
}

export default Confirmation;