import React from 'react';
import{Text} from 'react-native';

const Typography: React.FC = ({children, ...rest}) => {
  return (

   <Text {...rest}>
      {children}
   </Text>

  );
}

export default Typography;