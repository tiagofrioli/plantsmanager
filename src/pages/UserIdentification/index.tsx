import React from 'react';
import { SafeAreaView, View , Text, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import { ButtonFooter, Container, Content, Form, Input } from './styles';


// import { Container } from './styles';

const UserIdentification: React.FC = () => {
  return (
   <Container>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'padding':'height'} >   
       <Content>
        <Form>
         <Text style={{fontSize: 52}} >😄</Text>
         <Typography>Como podemos chamar você?</Typography> 
         <Input placeholder="Digite um nome" />
         <ButtonFooter>
             <Button />
         </ButtonFooter>
        </Form>
     </Content>
     </KeyboardAvoidingView>
   </Container>
  );
}

export default UserIdentification;