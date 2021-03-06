import Loading from 'expo-app-loading';
import React from 'react';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'
import Routes from './src/navigation'

export default function App() {

  const[fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

    if(!fontsLoaded)
        return <Loading />

  return (

    <Routes />
  );
}
