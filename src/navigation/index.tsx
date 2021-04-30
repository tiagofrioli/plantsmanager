import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './stack.navigation';

const routes: React.FC = () => (
  <NavigationContainer>
    <Navigation />
  </NavigationContainer>

)

export default routes;