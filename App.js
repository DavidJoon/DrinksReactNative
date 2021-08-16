import * as React from 'react';
import {View} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Charm_400Regular, Charm_700Bold } from '@expo-google-fonts/charm';

import Rotas from './components/Rotas';

export default function App() {
   let [fontsloaded] = useFonts({
       Charm_700Bold,
  });

if (!fontsloaded){
    return <AppLoading />;
  } else {
  return (
    <>
      <Rotas/>
    </>
  );
}
}