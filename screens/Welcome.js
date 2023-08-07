import React, {useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  ImageBackground,
  Easing,
} from 'react-native';

export default function Welcome({navigation}) {
  const fadeIn = useRef(new Animated.Value(0)).current;
  const logoFadeIn = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const display = (fade, toValue, duration) => {
    return Animated.timing(fade, {
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.linear,
    });
  };

  const rotate = () => {
    return Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    });
  };

  const startAnimations = () => {
    Animated.sequence([display(fadeIn, 1, 2000), onParallel()]).start(
      ({finish}) =>
        navigation.reset({
          index: 0,
          routes: [{name: 'welcome1'}],
        }),
    );
  };
  const onParallel = () => {
    return Animated.parallel([display(logoFadeIn, 1, 3000), rotate()]);
  };
  const interpolatedRotateAnimation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '1080deg'],
  });

  useEffect(() => {
    startAnimations();
  });

  return (
    <View style={[styles.container, styles.center]}>
      <View style={[{width: '100%', flex: 0.8}, styles.center]}>
        <Animated.View style={{opacity: fadeIn}}>
          <ImageBackground
            source={require('../assets/little-lemon-logo.png')}
            resizeMode="contain"
            style={[styles.img]}
          />
        </Animated.View>
      </View>
      <View style={[{width: '100%', flex: 0.2}, styles.center]}>
        <Animated.View
          style={[
            {
              opacity: logoFadeIn,
              transform: [{rotate: interpolatedRotateAnimation}],
            },
            styles.center,
          ]}>
          <ImageBackground
            source={require('../assets/loading-svgrepo-com.png')}
            resizeMode="contain"
            style={[styles.rotateImg]}
          />
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    flex: 0.8,
  },
  img: {
    width: 200,
    height: 200,
  },
  rotateImg: {
    width: 50,
    height: 50,
  },
});
