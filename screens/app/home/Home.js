import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  SectionList,
  ScrollView,
  Pressable,
} from 'react-native';

import Header from '../../../components/home/Header';
import Search from '../../../components/home/Search';
import {gray, green, white} from '../../../styles/colors';
import SpecialOffers from '../../../components/home/SpecialOffers';
import {useContext, useEffect, useRef, useState} from 'react';
import {BASE_URL} from '../../../config/Urls';
import Category from '../../../components/home/category';
import FoodList from '../../../components/home/FoodList';
import {Customer} from '../../../context/customer';

const myComponents = [
  {
    id: 1,
    comp: <Search />,
  },
  {
    id: 2,
    comp: <SpecialOffers />,
  },
  {
    id: 3,
    comp: <Category />,
  },
  {
    id: 4,
    comp: <FoodList horizontal={true}>Discount Guaranteed 👌</FoodList>,
  },
  {
    id: 5,
    comp: <FoodList horizontal={false}>Best Rating 😍</FoodList>,
  },
];

export default function Home() {
  const {customer} = useContext(Customer);
  console.log(customer);
  // const [data ,setData] = useState([]);
  // console.log(data)
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(`${BASE_URL}/home`);
  //     const jsonData = await response.json();
  //     setData(jsonData.category)
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  // useEffect(()=>{
  //   fetchData();
  // },[])
  return (
    <View style={styles.container}>
      <Header />
      <SafeAreaView style={{flex: 1, width: '100%'}}>
        <FlatList
          data={myComponents}
          renderItem={({item}) => item.comp}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: white,
    // padding: 25,
    paddingBottom: 60,
  },
  scroll: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
});

// contentContainerStyle={styles.scroll}>
//           <SpecialOffers />
//           <SpecialOffers />
//           <Category />
//           <Category />
//         </FlatList>
