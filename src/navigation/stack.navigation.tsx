import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Confirmation from '../pages/Confirmation';
import PlantSave from '../pages/PlantSave';
import UserIdentification from '../pages/UserIdentification';
import Welcome from '../pages/Welcome';
import colors from '../styles/colors';
import AuthRoutes from './tab.routes';

const stackNavigation = createStackNavigator();

const navigation: React.FC = () => (

     <stackNavigation.Navigator headerMode="none" screenOptions={{cardStyle:{backgroundColor: colors.white }}} >
        <stackNavigation.Screen name="Welcome" component={Welcome}/>
        <stackNavigation.Screen name="UserIdentification" component={UserIdentification}/>
        <stackNavigation.Screen name="Confirmation" component={Confirmation}/>
        <stackNavigation.Screen name="PlantSelect" component={AuthRoutes}/>
        <stackNavigation.Screen name="PlantSave" component={PlantSave}/>
        <stackNavigation.Screen name="MyPlants" component={AuthRoutes}/>
     </stackNavigation.Navigator>
  );


export default navigation;