import React from 'react';

 import { Text } from './styles';

const Typography: React.FC = ({children, ...rest}) => {
  return (

   <Text>
      {children}
   </Text>

  );
}

export default Typography;