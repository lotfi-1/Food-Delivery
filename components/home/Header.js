import {Image, View, Text, StyleSheet, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {blue, green, gray, darkGray} from '../../styles/colors';
export default function Header() {
  const name = 'lotfi Hallas';

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Pressable>
          <Image source={require('../../assets/OIP.jpeg')} style={styles.img} />
        </Pressable>
        <View style={styles.viewLast}>
          <Text style={styles.text}>Deliver to </Text>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
      <View style={styles.view}>
        <Pressable>
          <Ionicons name="notifications-outline" size={30} color={blue} />
        </Pressable>
        <Pressable>
          <Ionicons name="bag-outline" size={30} color={blue} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:25,
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  view: {
    flexDirection: 'row',
    columnGap: 25,
  },
  viewLast: {
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 16,
    color: gray,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: blue,
  },
});
