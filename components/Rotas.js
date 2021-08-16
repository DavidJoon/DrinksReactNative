import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Drinks from './Drinks';
import Vinhos from './Vinhos';
import Vodkas from './Vodkas';
import Whiskys from './Whiskys';
import Home from './Home';

const Stack = createStackNavigator();

export default function Rotas(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Drinks' component={Drinks}/>
        <Stack.Screen name='Vinhos' component={Vinhos}/>
        <Stack.Screen name='Vodkas' component={Vodkas}/>
        <Stack.Screen name='Whiskys' component={Whiskys}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}