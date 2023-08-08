import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {blue, gray} from '../../styles/colors';

const data = [
  {
    name: 'Hamburger',
    path: require('../../assets/category/hamburger.png'),
  },
  {
    name: 'Pizza',
    path: require('../../assets/category/pizza.png'),
  },
  {
    name: 'Noodles',
    path: require('../../assets/category/ramen.png'),
  },
  {
    name: 'Meat',
    path: require('../../assets/category/meat.png'),
  },
  {
    name: 'salad',
    path: require('../../assets/category/salad.png'),
  },
  {
    name: 'Dissert',
    path: require('../../assets/category/cake.png'),
  },
  {
    name: 'Drink',
    path: require('../../assets/category/orange-juice.png'),
  },
  {
    name: 'More',
    path: require('../../assets/category/pancake.png'),
  },
];
export default function Category() {
  return (
    <View style={styles.container}>
      {data.map((e, ind) => {
        return (
          <TouchableOpacity key={ind} style={styles.view}>
            <Image source={e.path} resizeMode="contain" style={styles.img} />
            <Text style={styles.text}>{e.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    columnGap: 15,
    rowGap: 15,
    paddingLeft:25,
    paddingRight:25,
  },
  view: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '20%',
    height: 80,
  },
  img: {
    width: 40,
    height: 40,
  },
  text: {
    color: gray,
    fontSize: 13,
  },
});
