/** @format */

import {View, Text, StyleSheet, Pressable, TextInput} from 'react-native';
import Right from '../../assets/icons/right.svg';
import GoBack from '../../components/GoBack';
import {blue, gray, green, lightGray} from '../../styles/colors';
import {createContext, useEffect, useRef, useState} from 'react';
import Button from '../../components/Button';
import VerifyCodeInput from '../../components/codeInput';
import {useRoute} from '@react-navigation/native';
import {signUp} from '../../utils/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const pinContext = createContext();

export default function Otp({navigation}) {
  const route = useRoute();
  const {phone, password, name, remember} = route.params;
  const [time, setTime] = useState(60);
  const otp = useRef({});
  const [resend, setResend] = useState(false);
  const [err, setError] = useState(false);
  const sendOtp = async () => {};
  useEffect(() => {
    let id;
    if (otp) {
      sendOtp();
    } else if (time !== 0) {
      id = setTimeout(() => setTime(time - 1), 1000);
    } else {
      setResend(true);
    }
    () => clearTimeout(id);
  }, [time]);
  return (
    <View style={styles.container}>
      <GoBack>
        <Pressable style={{width: 25}} onPress={() => navigation.goBack()}>
          <Right />
        </Pressable>
        <Text style={{fontSize: 20, color: blue, fontWeight: 500}}>
          OTP Code Verification
        </Text>
      </GoBack>

      <View style={styles.view}>
        <Text style={styles.text}>Code has been sent to 'format phone'</Text>
        {resend ? (
          <Pressable
            onPress={() => {
              setTime(60);
              setResend(false);
            }}>
            <Text style={styles.resend}>Resend Code</Text>
          </Pressable>
        ) : (
          <>
            <pinContext.Provider value={otp}>
              <VerifyCodeInput />
            </pinContext.Provider>

            <Text style={styles.text}>
              Resend code in <Text style={styles.sec}>{time}</Text> s
            </Text>
          </>
        )}

        <Button
          style={{width: '100%', marginTop: 100}}
          handelClick={async () => {
            try {
              if (otp.current !== 0) {
                const result = await signUp({
                  phone,
                  password,
                  name,
                  code: otp.current,
                });
                if (remember) await AsyncStorage.setItem('token', result.token);
                navigation.navigate('home');
              }
            } catch (error) {
              // setError(true);
            }
          }}>
          Verify
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    color: blue,
    fontWeight: 50,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
    paddingLeft: 30,
    paddingRight: 30,
  },
  text: {
    fontSize: 16,
    color: gray,
  },
  sec: {
    color: green,
    fontSize: 18,
  },
  resend: {
    color: green,
    fontSize: 20,
    fontWeight: '500',
    padding: 20,
  },
});
