import React from 'react';
import { Text} from 'react-native';
import { withTheme } from 'styled-components';
import palette from '../../styles/colors';
import fonts from '../../styles/fonts';
import { ContainerButton } from './styles';
import { ButtonProps } from './types';

// import { Container } from './styles';

export function Button({...rest}:ButtonProps ) {
  return (
 
     <ContainerButton {...rest} >
        <Text style={{fontSize: 16, color:"#fff"}}>
          Confirmar
        </Text>
     </ContainerButton>

  );
}

export default Button;