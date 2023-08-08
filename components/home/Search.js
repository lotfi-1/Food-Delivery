import {StyleSheet, Pressable, TextInput, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {darkGray, gray, lightGray, lightGreen} from '../../styles/colors';
import {useState} from 'react';

export default function Search() {
  const [query, setQuery] = useState('');
  return (
    <View style={styles.container}>
      <Pressable style={styles.view}>
        <Ionicons name="search-circle-sharp" color={gray} size={30} />
      </Pressable>
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={q => setQuery(q)}
        placeholder="what are you craving ?"
        placeholderTextColor={gray}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 15,
    backgroundColor: lightGreen,
    marginLeft: 25,
    marginRight: 25,
  },
  view: {
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    height: 50,
    paddingLeft: 20,
    fontSize: 16,
    color: darkGray,
  },
});
