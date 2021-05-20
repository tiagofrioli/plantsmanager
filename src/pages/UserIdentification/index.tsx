import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, Text } from 'react-native';
import Button from '../../components/Button';
import colors from '../../styles/colors';
import { ButtonFooter, Container, Content, Form, Input, Title } from './styles';


const UserIdentification: React.FC = () => {

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const navigation = useNavigation();


 async function handleSubmit(){

    if(!name)
      return Alert.alert("Coloque seu nome 😢");

   await AsyncStorage.setItem('@plantmanager:user', name);  

    navigation.navigate('Confirmation');
   
  }

  function handleInputBlur(){
      setIsFocused(false);
      setIsFilled(!!name);
  }

  function handleInputFocus(){
      setIsFocused(true);
  }

  function handleInputChange(value: string){
    setIsFilled(!!value);
    setName(value);
  }

  return (
   <Container>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'padding':'height'} >   
       <Content>
        <Form>
         <Text style={{fontSize: 52}} >😄</Text>
         <Title>Como podemos chamar você?</Title> 
         <Input 
                style={[(isFocused || isFilled ) && {borderColor: colors.green}]}
                 placeholder="Digite um nome" 
                 onBlur={handleInputBlur}
                 onFocus={handleInputFocus} 
                 onChangeText={handleInputChange}
         />
         <ButtonFooter>
             <Button title="Confirmar" onPress={handleSubmit} />
         </ButtonFooter>
        </Form>
     </Content>
     </KeyboardAvoidingView>
   </Container>
  );
}

export default UserIdentification;