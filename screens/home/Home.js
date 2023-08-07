import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  SectionList,
  ScrollView,
  Pressable,
} from 'react-native';

import Header from '../../components/Header';
import Search from '../../components/Search';
import {gray, green, white} from '../../styles/colors';
import SpecialOffers from '../../components/SpecialOffers';
import { useEffect, useRef, useState } from 'react';
import { BASE_URL } from '../../config/Urls';
import Category from '../../components/home/category';

export default function Home() {
  const [data ,setData] = useState([]);
  console.log(data)
  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/home`);
      const jsonData = await response.json();
      setData(jsonData.category)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <View style={styles.container}>
      <Header />
      <Search />
      <SafeAreaView style={{flex: 1, width: '100%'}}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <SpecialOffers />
          <Category data={data} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: white,
    padding: 25,
  },
  scroll: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
});
