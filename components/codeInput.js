/** @format */

import {StyleSheet, TextInput, View, Pressable} from 'react-native';
import {
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useContext,
} from 'react';
import {blue, lightGray} from '../styles/colors';
import {pinContext} from '../screens/signUpIn/Otp';

const VerifyCodeInput = () => {
  const inputRefs = useRef([]);
  const [pin, setPin] = useState(Array(6).fill(''));
  const otp = useContext(pinContext);
  useEffect(() => {
    const code = pin.reduce(
      (acc, cur) => (cur !== '' ? acc * 10 + +cur : 0),
      0,
    );
    if (code !== 0 && code > 100000) {
      otp.current = code;
    }else{
      otp.current = 0;
    }
  }, [pin]);
  const handelChanges = (pinIndex, pinValue) => {
    const newPin = [...pin];
    newPin[pinIndex] = pinValue;
    setPin(newPin);

    if (pinValue !== '' && pinIndex < inputRefs.current.length - 1) {
      inputRefs.current[pinIndex + 1].focus();
    } else if (pinValue === '' && pinIndex > 0) {
      inputRefs.current[pinIndex - 1].focus();
    }
  };

  return (
    <View style={styles.inputView}>
      {pin.map((pinValue, index) => (
        <Pressable
          key={index}
          style={styles.view}
          onPress={() => inputRefs.current[index].focus()}>
          <TextInput
            ref={ref => (inputRefs.current[index] = ref)}
            style={styles.input}
            maxLength={1}
            keyboardType="number-pad"
            value={pinValue}
            onChangeText={text => handelChanges(index, text)}
            onKeyPress={({nativeEvent}) => {
              const {key} = nativeEvent;
              if (key === 'Backspace' && index > 0) {
                inputRefs.current[index - 1].focus();
              }
            }}
          />
        </Pressable>
      ))}
    </View>
  );
};
export default VerifyCodeInput;
const styles = StyleSheet.create({
  inputView: {
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // columnGap: 20,
    marginTop: 40,
    marginBottom: 30,
  },
  view: {
    width: 43,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: lightGray,
  },
  input: {
    //flex: 1,
    width: 23,
    fontSize: 23,
    fontWeight: '600',
    color: blue,
  },
});
