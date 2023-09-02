import {Image, View, Text, StyleSheet, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {blue, gray} from '../../styles/colors';
import {useNavigation} from '@react-navigation/native';
export default function Header({customer}) {
  const name = 'lotfi Hallas';
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={[styles.view, {columnGap: 20}]}>
        <Pressable>
          <Image source={require('../../assets/OIP.jpeg')} style={styles.img} />
        </Pressable>
        <View style={styles.viewLast}>
          <Text style={styles.text}>Deliver to </Text>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
      <View style={[styles.view, {columnGap: 30}]}>
        <Pressable onPress={() => navigation.navigate('notification')}>
          <Ionicons name="notifications-outline" size={28} color={blue} />
        </Pressable>
        <Pressable>
          <Ionicons name="bag-outline" size={28} color={blue} />
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
    padding: 20,
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  view: {
    flexDirection: 'row',
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
