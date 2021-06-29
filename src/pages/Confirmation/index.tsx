import React from 'react';
import Button from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/core'
import { Container, Content, Emoji, Footer, Subtitle, Title } from './styles';
import { Params } from './types';

const Confirmation: React.FC = () => {

 const navigation = useNavigation();
 const routes = useRoute();

 const { title, subtitle, buttonTitle,icon, nextScreen   } = routes.params as Params;

 const emojis = {
    hug: "🤗",
    smile: '😃',
 }

 function handleMoveOn(){
    navigation.navigate(nextScreen);
 }

  return (
     <Container>
        <Content>
           <Emoji>{emojis[icon]}</Emoji>
           <Title>{title}</Title>
           <Subtitle>{subtitle}</Subtitle>
        <Footer>
           <Button title="Começar" onPress={handleMoveOn} />
        </Footer>
        </Content>
     </Container>
  );
}

export default Confirmation;