import {StyleSheet, Text, View} from 'react-native';
import {error} from '../styles/colors';
export default function Error({children}) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    top: '100%',
    right: 10,
    paddingTop: 3,
  },
  text: {
    fontSize: 14,
    color: error,
  },
});
