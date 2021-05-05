import React from 'react';
import { View } from 'react-native';
import { Container, Content, ImageUser, SubTitle, Title } from './styles';
import userImg from '../../assets/waterdrop.png';
// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
        <Content>
          <Title>Olá,</Title>
          <SubTitle>Tiago</SubTitle>
        </Content>
        <ImageUser source={userImg} resizeMode="contain" />
    </Container>
  );
}

export default Header;