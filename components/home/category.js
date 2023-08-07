import {View, Text, Image, StyleSheet} from 'react-native';

export default function Category({data}) {
  return (
    <View style={styles.container}>
      {data.map((e, ind) => {
        const path = e.path;
        console.log(e.path);
        return (
          <View key={e.id} style={styles.view}>
            <Image
              source={{uri: path}}
              resizeMode="contain"
              style={styles.img}
            />
            <Text>{e.name}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 340,
    height: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 80,
    height: 80,
  },
});
