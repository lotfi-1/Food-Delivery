import {View, Text, Image, StyleSheet} from 'react-native';
import {blue, gray} from '../../styles/colors';

export default function Category({data}) {
  return (
    <View style={styles.container}>
      {data.map((e, ind) => {
        const path = require(e.path);
        console.log(path);
        return (
          <View key={e.id} style={styles.view}>
            <Image
              source={{uri: `file://../../../assets/category/bread.png`}}
              resizeMode="contain"
              style={styles.img}
            />
            <Text style={styles.text}>{e.name}</Text>
          </View>
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
    paddingTop: 10,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
  },
  img: {
    width: 50,
    height: 50,
  },
  text: {
    color: gray,
    fontSize: 13,
  },
});
