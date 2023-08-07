import {StyleSheet} from 'react-native';
import {lightGray, blue, green, gray} from './colors';

export const signUpIn = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
  },
  imgView: {
    height: 130,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
    color: blue,
  },
  form: {
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    rowGap: 25,
  },
  inputView: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: lightGray,
    borderRadius: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    flex: 1,
    color: blue,
    paddingLeft: 20,
    fontSize: 16,
  },
  loginView: {
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
