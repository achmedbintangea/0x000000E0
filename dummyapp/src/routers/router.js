import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppInfo from '../components/AppInfo'
import Detail from '../components/Detail'

const Stack = createNativeStackNavigator();

function Router() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="AppInfo" component={AppInfo} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
  );
}

export default Router;