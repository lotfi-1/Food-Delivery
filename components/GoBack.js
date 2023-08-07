import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
export default function GoBack({children}) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    backgroundColor: 'white',
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
  },
});
