/** @format */

import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './app/home/Home';
import Orders from './app/Orders';
import Messages from './app/Message';
import Wallet from './app/Wallet';
import Profile from './app/Profile';
import HomeNavigation from './app/HomeNavigation';
import {darkGray, gray, green} from '../styles/colors';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: green,
        tabBarInactiveTintColor: gray,
        tabBarShowLabel: false,
        tabBarButton: props => <TouchableOpacity {...props} />,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 70,
          ...styles.shadow,
        },
        tabBarItemStyle: {justifyContent: 'center', padding: 10},
        tabBarLabelStyle: {fontSize: 10},
      })}>
      <Tab.Screen
        name="home-navigation"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="orders"
        component={Orders}
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Ionicons
              name={focused ? 'reorder-four' : 'reorder-four-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="messages"
        component={Messages}
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Ionicons
              name={
                focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'
              }
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Ionicons
              name={focused ? 'wallet' : 'wallet-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Ionicons
              // name={focused ? 'person-circle' : 'person-circle-outline'}
              name={focused ? 'person' : 'person-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: gray,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

const CustomTabBarButton = ({children, onPress}) => {
  <TouchableOpacity
    style={{
      position: 'absolute',
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
      backgroundColor: 'red',
    }}
    onPress={onPress}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
      }}>
      {children}
    </View>
  </TouchableOpacity>;
};

// tabBarButton: props => (
//   <TouchableOpacity
//     {...props}
//     style={{
//       width: 70,
//       height:70,
//       // position: 'absolute',
//       top: -35,
//       borderRadius: 35,
//       backgroundColor: 'blue',
//     }}
//   />
// ),
