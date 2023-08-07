import {View, Pressable, Text, Image, StyleSheet} from 'react-native';
import {blue, green} from '../styles/colors';

const SpecialOffers = () => {
  return (
    <View style={styles.continue}>
      <View style={styles.View}>
        <Text style={styles.text}>Special Offers</Text>
        <Pressable>
          <Text style={styles.link}>See All</Text>
        </Pressable>
      </View>
      <Pressable>
        <Image
          style={styles.img}
          source={require('../assets/ads.png')}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
};

export default SpecialOffers;
const styles = StyleSheet.create({
  continue: {
    width: '100%',
    rowGap: 20,
  },
  View: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: blue,
    fontSize: 18,
    fontWeight: '500',
  },
  link: {
    color: green,
    fontSize: 14,
  },
  img: {
    width: '100%',
    height: 160,
    borderRadius: 35,
  },
});
