/** @format */

import {
  Image,
  Pressable,
  View,
  Text,
  TextInput,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useRef} from 'react';
import GoBack from '../../components/GoBack';
import Right from '../../assets/icons/right.svg';
import {gray, darkGray, blue, green} from '../../styles/colors';
import PhoneInput from 'react-native-phone-number-input';
import Button from '../../components/Button';
import Or from '../../components/Or';
import Apple from '../../assets/icons/apple.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Google from '../../assets/icons/google.svg';
import Footer from '../../components/footer';
import Password from '../../assets/icons/lock-keyhole.svg';
import Profile from '../../assets/icons/profile.svg';
import Error from '../../components/error';
import CheckBoxComp from '../../components/CheckBox';
import {signUpIn} from '../../styles/globaleStyle';
import {sendSms} from '../../utils/login';
import Eye from '../../components/eye';
import {useNavigation} from '@react-navigation/native';

export default function Register() {
  const phoneRef = React.useRef(null);
  const [phoneNum, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);
  const check = useRef();
  const navigation = useNavigation();
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
        <Text style={signUpIn.title}>Create New account</Text>
        <KeyboardAvoidingView
          style={signUpIn.form}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <PhoneInput
            ref={phoneRef}
            defaultValue={phoneNum}
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
          <View style={signUpIn.inputView}>
            <Profile width={25} height={25} fill={name ? blue : gray} />
            <TextInput
              style={signUpIn.input}
              value={name}
              onChangeText={text => setName(text)}
              keyboardType="default"
              placeholder="Full Name"
              placeholderTextColor={gray}
            />
          </View>
          <View style={[signUpIn.inputView, {position: 'relative'}]}>
            <Password width={25} height={25} fill={password ? blue : gray} />

            <TextInput
              style={[signUpIn.input, {paddingRight: 40}]}
              value={password}
              secureTextEntry={!open ? true : false}
              onChangeText={text => setPassword(text)}
              keyboardType="default"
              placeholder="Password"
              placeholderTextColor={gray}
              keyboardDismissMode="on-drag"
            />
            <Eye open={open} handelClick={() => setOpen(!open)} color={green} />
          </View>
        </KeyboardAvoidingView>
        <CheckBoxComp style={{marginBottom: 20}} ref={check}>
          Remember me
        </CheckBoxComp>
        <Button
          style={{width: '100%'}}
          handelClick={async () => {
            try {
              const phone = phoneNum.replace(/^[+0]+/, '');
              const result = await sendSms(phone, password, name);
              const remember = check.current.getValue();
              if (result)
                navigation.navigate('otp', {
                  phone, password, name, remember,
                });
              // await AsyncStorage.setItem("token", result.token);
            } catch (error) {
              console.log(error);
            }
          }}>
          Sign Up
        </Button>
        <Or style={{marginTop: 20}}>or continue with</Or>
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
          text="Sign in"
          name="login"
          style={{marginTop: 10}}>
          Already have an account ?
        </Footer>
      </ScrollView>
    </View>
  );
}
