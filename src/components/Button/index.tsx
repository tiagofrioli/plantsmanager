import React from 'react';
import { Text} from 'react-native';
import { withTheme } from 'styled-components';
import palette from '../../styles/colors';
import fonts from '../../styles/fonts';
import { ContainerButton } from './styles';

// import { Container } from './styles';

const Button: React.FC = () => {
  return (
 
     <ContainerButton>
        <Text style={{fontSize: 16, color:"#fff"}}>
          Confirmar
        </Text>
     </ContainerButton>

  );
}

export default Button;