import * as React from 'react';
import Welcome from './screens/Welcome';
import Welcome1 from './screens/Welcome1';
import LoginPOne from './screens/signUpIn/LoginPOne';
import Register from './screens/signUpIn/register';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Login from './screens/signUpIn/signIn';
import Otp from './screens/signUpIn/Otp';
import AppNavigation from './screens/AppNavigation';
import {white} from './styles/colors';
import CustomerProvider from './context/customer';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <CustomerProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="welcome"
            screenOptions={{
              headerShown: false,
              statusBarColor: white,
            }}>
            <Stack.Screen name="welcome" component={Welcome} />
            {/* <Stack.Screen name="welcome1" component={Welcome1} /> */}
            <Stack.Screen name="loginpone" component={LoginPOne} />
            <Stack.Screen name="register" component={Register} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="otp" component={Otp} />
            <Stack.Screen name="app-navigation" component={AppNavigation} />
          </Stack.Navigator>
        </NavigationContainer>
      </CustomerProvider>
    </SafeAreaProvider>
  );
}
