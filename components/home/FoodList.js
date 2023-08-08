import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  gold,
  green,
  gray,
  error,
  blue,
  lightGray,
  lightGreen,
  white,
} from '../../styles/colors';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
const data = [
  {
    id: 1,
    imgPath: require('../../assets/restaurent/img1.png'),
    name: 'Vegetarian Noodles',
    distence: '800m',
    rating: '4.9',
    numRating: '23k',
    price: '$6.00',
    shipping: '$2.00',
  },
  {
    id: 2,
    imgPath: require('../../assets/restaurent/img1.png'),
    name: 'Vegetarian Noodles',
    distence: '800m',
    rating: '4.9',
    numRating: '23k',
    price: '$6.00',
    shipping: '$2.00',
  },
  {
    id: 3,
    imgPath: require('../../assets/restaurent/img1.png'),
    name: 'Vegetarian Noodles',
    distence: '800m',
    rating: '4.9',
    numRating: '23k',
    price: '$6.00',
    shipping: '$2.00',
  },
  {
    id: 4,
    imgPath: require('../../assets/restaurent/img1.png'),
    name: 'Vegetarian Noodles',
    distence: '800m',
    rating: '4.9',
    numRating: '23k',
    price: '$6.00',
    shipping: '$2.00',
  },
  {
    id: 5,
    imgPath: require('../../assets/restaurent/img1.png'),
    name: 'Vegetarian Noodles',
    distence: '800m',
    rating: '4.9',
    numRating: '23k',
    price: '$6.00',
    shipping: '$2.00',
  },
];

export default function FoodList({horizontal, children}) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.headTitle}>{children}</Text>
        <Pressable>
          <Text style={styles.headText}>See All</Text>
        </Pressable>
      </View>
      <FlatList
        data={data}
        horizontal={horizontal}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Item item={item} horizontal={horizontal} />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

function Item({item, horizontal}) {
  const [addToCard, setAddToCard] = useState(false);

  const navigation = useNavigation();
  return (
    <Pressable style={[horizontal ? row.box : column.box, styles.box]}>
      <Image
        source={item.imgPath}
        style={horizontal ? row.boxImg : column.boxImg}
      />
      <View style={styles.boxView}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
          {item.name}
        </Text>
        <View style={styles.view}>
          <Text style={styles.text}>{item.distence} |</Text>
          <Fontisto name="star" size={14} color={gold} />
          <Text style={styles.text}>
            {item.rating} ({item.numRating})
          </Text>
        </View>
        <View style={styles.boxFooter}>
          <View style={styles.view}>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.text}>|</Text>
            <Fontisto name="motorcycle" size={14} color={green} />
            <Text style={styles.text}>{item.shipping}</Text>
          </View>
          <Pressable onPress={() => setAddToCard(!addToCard)}>
            <Ionicons
              name={addToCard ? 'heart' : 'heart-outline'}
              size={horizontal ? 20 : 25}
              color={error}
            />
          </Pressable>
        </View>
      </View>
      {horizontal && (
        <View style={styles.promo}>
          <Text style={styles.promoText}>PROMO</Text>
        </View>
      )}
    </Pressable>
  );
}

const row = StyleSheet.create({
  box: {
    width: 170,
    padding: 10,
    margin: 10,
    rowGap: 8,
    position: 'relative',
  },
  boxImg: {
    width: 150,
    height: 150,
    borderRadius: 30,
  },
});
const column = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    columnGap: 20,
    margin: 15,
    marginTop: 0,
    padding: 10,
    backgroundColor: white,
  },
  boxImg: {
    width: 100,
    height: 100,
    borderRadius: 30,
  },
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    rowGap: 15,
    marginTop: 20,
    paddingBottom: 35,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    // marginBottom: 10,
  },
  headTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: blue,
  },
  headText: {
    fontSize: 16,
    fontWeight: '500',
    color: green,
  },
  box: {
    borderRadius: 20,
    backgroundColor: white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,

    elevation: 5,
  },
  boxView: {
    rowGap: 5,
    flex: 1,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  boxFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  promo: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 8,
    height: 25,
    backgroundColor: green,
    position: 'absolute',
    top: 20,
    left: 20,
  },
  promoText: {
    fontSize: 12,
    color: white,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: blue,
  },
  text: {
    fontSize: 14,
    color: gray,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: green,
  },
});
