import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import userImg from '../../assets/waterdrop.png';
import { Container, Content, ImageUser, SubTitle, Title } from './styles';


const Header: React.FC = () => {
  const [user, setUser] = useState<string | null>();

  useEffect(()=> {

    async function getUser(){
     const newUser = await AsyncStorage.getItem('@plantmanager:user');
      setUser(newUser);
    }

    getUser();

  }, []);

  return (
    <Container>
        <Content>
          <Title>Olá,</Title>
          <SubTitle>{user}</SubTitle>
        </Content>
        <ImageUser source={userImg} resizeMode="contain" />
    </Container>
  );
}

export default Header;