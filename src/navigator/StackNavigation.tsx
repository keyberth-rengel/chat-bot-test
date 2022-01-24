import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//contants
import {routesName} from '../app/contants';

//pages
import {RegisterScreen} from '../screens/auth/register';
import {TabViewContainer} from '../screens/app/TabViewScreen';

//stacks
const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routesName.HOME}>
      <Stack.Screen name={routesName.REGISTER} component={RegisterScreen} />
      <Stack.Screen name={routesName.HOME} component={TabViewContainer} />
    </Stack.Navigator>
  );
};

export const StackContainer = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};
