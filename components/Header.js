import {Image, View, Text, StyleSheet, Pressable} from 'react-native';
import Bag from '../assets/icons/bag.svg';
import Notification from '../assets/icons/notification.svg';
import {blue, green, gray, darkGray} from '../styles/colors';
export default function Header() {
  const name = 'lotfi Hallas';

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Pressable>
          <Image source={require('../assets/OIP.jpeg')} style={styles.img} />
        </Pressable>
        <View style={styles.viewLast}>
          <Text style={styles.text}>Deliver to </Text>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
      <View style={styles.view}>
        <Pressable>
          <Notification width={30} height={30} stroke={blue} />
        </Pressable>
        <Pressable>
          <Bag width={30} height={30} stroke={blue} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  view: {
    flexDirection: 'row',
    columnGap: 20,
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
