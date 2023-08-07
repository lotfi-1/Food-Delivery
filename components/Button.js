import {StyleSheet} from 'react-native';
import {Text, Pressable, TouchableOpacity} from 'react-native';
import {green} from '../styles/colors';
export default function Button({style, handelClick, children}) {
  return (
    <TouchableOpacity style={[styles.pressable, style]} onPress={handelClick}>
      <Text style={styles.pressableText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pressable: {
    height: 50,
    borderRadius: 25,
    backgroundColor: green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressableText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
  },
});
