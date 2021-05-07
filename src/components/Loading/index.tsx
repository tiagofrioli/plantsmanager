import LottieView from 'lottie-react-native';
import React from 'react';
import loadAnimation from '../../assets/load.json';
import { Container } from './styles';

const Loading: React.FC = () => {
  return (
      <Container>
        <LottieView source={loadAnimation}
           autoPlay 
           loop 
           style={{backgroundColor: 'transparent' , width:200, height:200 }}/>
      </Container>

  );
}

export default Loading;