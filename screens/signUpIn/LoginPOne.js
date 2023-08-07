import React from 'react';
import { Pressable, StyleSheet, View, Image, Text } from 'react-native';
import GoBack from '../../components/GoBack';
import Right from '../../assets/icons/right.svg';
import {lightGray, blue } from '../../styles/colors';

import Apple from '../../assets/icons/apple.svg';
import Google from '../../assets/icons/google.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Button from '../../components/Button';
import Or from '../../components/Or';
import Footer from '../../components/footer';

export default function LoginPOne({ navigation }) {
  return (
    <View style={styles.container}>
      <GoBack>
        <Pressable style={{ width: 25 }} onPress={() => navigation.goBack()}>
          <Right />
        </Pressable>
      </GoBack>

      <View style={styles.view}>
        <Image
          style={styles.img}
          source={require('../../assets/images/login.png')}
          resizeMode="contain"
        />
        <Text style={styles.title}>Let's you in</Text>
        <Pressable style={styles.linkP}>
          <Facebook width={30} height={30} />
          <Text style={styles.linkText}>Continue with Facebook</Text>
        </Pressable>
        <Pressable style={styles.linkP}>
          <Google width={30} height={30} />
          <Text style={styles.linkText}>Continue with Google</Text>
        </Pressable>
        <Pressable style={styles.linkP}>
          <Apple width={28} height={28} />
          <Text style={styles.linkText}>Continue with Apple</Text>
        </Pressable>
        <Or style={{ marginBottom: 20 }}>Or</Or>
        <Button style={{ width: '100%' }} handelClick={() => navigation.navigate('login')}>Sign in width Phone Number</Button>

        <Footer
          navigation={navigation}
          text="Sign up"
          name="register"
          style={{ marginTop: 30 }}>
          Don't have an account?
        </Footer>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
  },
  img: {
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 36,
    fontWeight: '500',
    color: blue,
    letterSpacing: 2,
    marginBottom: 30,
  },
  linkP: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 10,
    borderWidth: 1,
    borderColor: lightGray,
    marginBottom: 15,
    borderRadius: 15,
  },
  logo: {
    width: 30,
    height: 30,
  },
  linkText: {
    color: blue,
    fontWeight: '500',
  },
});
