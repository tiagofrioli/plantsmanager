import React from 'react';
import { Text} from 'react-native';
import { withTheme } from 'styled-components';
import palette from '../../styles/colors';
import fonts from '../../styles/fonts';
import { ContainerButton } from './styles';
import { ButtonProps } from './types';



export function Button({title, ...rest}:ButtonProps ) {
  return (
 
     <ContainerButton {...rest} >
        <Text style={{fontSize: 16, color:"#fff"}}>
          {title}
        </Text>
     </ContainerButton>

  );
}

export default Button;