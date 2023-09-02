import {View, Text, StyleSheet} from 'react-native';
import {Customer} from '../../../context/customer';
import {useContext} from 'react';
import {green, gray, darkGray, blue, white} from '../../../styles/colors';
export default function Notification() {
  const {customer} = useContext(Customer);
  return (
    <CanceledOrder notification={{foodName: 'humburger',time :"19 Dec,2022  |  20:50 PM"}}/>
  );
}

function CanceledOrder({notification}) {
  const {foodName,time} = notification;
  return (
    <View style={styles.container}>
      <View style={styles.viewFirstChild}>
        <View style={styles.icon}>
          <Text>logo</Text>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Order Canceled</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <Text style={styles.newText}>New</Text>
      </View>
      <View style={styles.viewSecondChild}>
        <Text style={styles.description}>
          you have canceled an order of{foodName} , we apologize for your
          inconvenience. We will try to improve our service next time :(
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  viewFirstChild: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
  },
  titleView: {
    justifyContent: 'center',
    rowGap: 20,
  },
  titleText: {
    fontSize: 18,
    color: blue,
    fontWeight: 'bold',
  },
  time: {
    color: gray,
    fontSize: 16,
  },
  newText: {
    padding: 10,
    backgroundColor: green,
    color: white,
    fontSize: 14,
  },
});
