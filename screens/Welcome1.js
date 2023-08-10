/** @format */

import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Text, ImageBackground, Pressable} from 'react-native';


export default function Welcome1({navigation}) {
 
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <ImageBackground
          style={styles.background}
          resizeMode="cover"
          source={require('../assets/back.jpg')}
          blurRadius={10}>
          <View style={styles.darkOverlay} />

          <View style={styles.view}>
            <Text style={styles.title}>Welcome to Foodu!</Text>
            {/* You can add your Hand SVG here if needed */}
            <Text style={styles.description}>
              Welcome to FOODu, where culinary artistry meets warm hospitality.
              Discover a diverse menu of global flavors crafted with passion and
              served with a smile.
            </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 15,
  },
  darkOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  view: {
    marginBottom: 100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    color: '#1bac4b',
    marginBottom: 10, // Add some spacing between the title and description
  },
  description: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    padding: 15,
    lineHeight: 22,
  },
});
