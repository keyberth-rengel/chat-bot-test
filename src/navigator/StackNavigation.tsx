import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//contants
import {routesName} from '../app/contants';

//pages
import {RegisterScreen} from '../screens/auth/register';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routesName.LOGIN}>
      <Stack.Screen name={routesName.LOGIN} component={RegisterScreen} />
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
