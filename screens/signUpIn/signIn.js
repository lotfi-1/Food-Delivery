/** @format */

import {
  Image,
  Pressable,
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import GoBack from '../../components/GoBack';
import Right from '../../assets/icons/right.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  darkGray,
  blue,
  gray,
  green,
  lightGray,
  error,
} from '../../styles/colors';
import PhoneInput from 'react-native-phone-number-input';
import Button from '../../components/Button';
import Or from '../../components/Or';
import Apple from '../../assets/icons/apple.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Google from '../../assets/icons/google.svg';
import Footer from '../../components/footer';
import Error from '../../components/error';
import CheckBoxComp from '../../components/CheckBox';
import {signUpIn} from '../../styles/globaleStyle';
import Eye from '../../components/eye';
import {signIn} from '../../utils/login';

export default function Login({navigation}) {
  const phoneRef = useRef(null);
  const [newphone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [err, setError] = useState(false);
  const check = useRef();

  return (
    <View style={signUpIn.container}>
      <GoBack>
        <Pressable style={{width: 25}} onPress={() => navigation.goBack()}>
          <Right />
        </Pressable>
      </GoBack>
      <ScrollView
        contentContainerStyle={signUpIn.view}
        keyboardDismissMode="on-drag">
        <View style={signUpIn.imgView}>
          <Image
            style={signUpIn.img}
            source={require('../../assets/images/register.png')}
            resizeMode="contain"
          />
        </View>
        <Text style={signUpIn.title}>Login to Your Account</Text>
        <KeyboardAvoidingView
          style={[signUpIn.form, {marginTop: 20, marginBottom: 20}]}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <PhoneInput
            ref={phoneRef}
            defaultValue={newphone}
            layout="first"
            // onChangeText={(v) => setValue(v)}
            onChangeFormattedText={v => setPhone(v)}
            defaultCode="US"
            // withDarkTheme
            withShadow
            keyboardType="phone-pad"
            containerStyle={{
              borderRadius: 15,
              backgroundColor: '#ffffff',
              width: '100%',
              height: 60,
            }}
            textInputStyle={{color: '#ffffff'}}
            codeTextStyle={{color: darkGray}}
            flagButtonStyle={{color: 'red'}}
            textContainerStyle={{
              backgroundColor: '#ffffff',
              borderRadius: 20,
              color: '#ffffff',
              padding: 0,
            }}
            placeholder="phone number"
            phoneInputContainer={true}
            textInputProps={{
              placeholderTextColor: gray,
              padding: 0,
              color: darkGray,
            }}
          />
            <View
              style={[
                signUpIn.inputView,
                err ? {borderColor: error} : {borderColor: lightGray},
                {position: 'relative', paddingLeft: 0},
              ]}>
              <TextInput
                style={[signUpIn.input, {paddingRight: 40}]}
                value={password}
                secureTextEntry={!open ? true : false}
                onChangeText={text => setPassword(text)}
                keyboardType="default"
                placeholder="Password"
                placeholderTextColor={gray}
                onFocus={() => {
                  if (err) setError(false);
                }}
              />
              <Eye
                open={open}
                handelClick={() => setOpen(!open)}
                color={green}
              />
              {err && <Error>invalid Phone Number Or Password</Error>}
            </View>
        </KeyboardAvoidingView>

        <CheckBoxComp style={{marginBottom: 20}} ref={check}>
          Remember me
        </CheckBoxComp>
        <Button
          style={{width: '100%'}}
          handelClick={async () => {
            try {
              console.log(check.current.getValue());
              const phone = newphone.replace(/^[+0]+/, '');
              const result = await signIn({phone, password});
              if (check.current.getValue())
                await AsyncStorage.setItem('token', result.token);
              navigation.navigate('home-navigation');
            } catch (error) {
              setError(true);
            }
          }}>
          Sign in
        </Button>
        <Or style={{marginTop: 20, marginBottom: 10}}>or continue with</Or>
        <View style={signUpIn.loginView}>
          <Pressable>
            <Facebook width={30} height={30} />
          </Pressable>
          <Pressable>
            <Google width={30} height={30} />
          </Pressable>
          <Pressable>
            <Apple width={30} height={30} />
          </Pressable>
        </View>
        <Footer
          navigation={navigation}
          text="Sign up"
          name="register"
          style={{marginTop: 20}}>
          Don't have an ccount ?
        </Footer>
      </ScrollView>
    </View>
  );
}
