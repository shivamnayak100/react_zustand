import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddDataScreen from './screens/AddDataScreen';

export type RootStackParamList = {
  Home: undefined; // It means we are not pass any params in this screen.  
  AddData: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="AddData" component={AddDataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
