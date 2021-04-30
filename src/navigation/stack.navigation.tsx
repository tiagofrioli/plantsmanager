import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Confirmation from '../pages/Confirmation';
import UserIdentification from '../pages/UserIdentification';
import Welcome from '../pages/Welcome';
import colors from '../styles/colors';

const stackNavigation = createStackNavigator();

const navigation: React.FC = () => (

     <stackNavigation.Navigator headerMode="none" screenOptions={{cardStyle:{backgroundColor: colors.white }}} >
        <stackNavigation.Screen name="Welcome" component={Welcome}/>
        <stackNavigation.Screen name="UserIdentification" component={UserIdentification}/>
        <stackNavigation.Screen name="Confirmation" component={Confirmation}/>
     </stackNavigation.Navigator>
  );


export default navigation;