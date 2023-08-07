import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {lightGray, gray} from '../styles/colors';
export default function Or({style, children}) {
  // const {width} = Dimensions.get('window');
  // const viewWidth = (width - 176) / 2;
  return (
    <View style={[styles.or, style]}>
      <View style={[{flex: 1}, styles.orView]}></View>
      <Text style={styles.orText}>{children}</Text>
      <View style={[{flex: 1}, styles.orView]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  or: {
    marginTop: 10,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 10,
  },
  orView: {
    height: 1,
    backgroundColor: lightGray,
  },
  orText: {
    // width: 120,
    color: gray,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
