import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL} from '../config/Urls';

const checkToken = async (navigation, setCustomer) => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      const response = await fetch(`${BASE_URL}/protected`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) invalidToken(navigation);
      else {
        const customerData = await response.json();
        console.log(customerData);
        if (customerData.customer) {
          setCustomer(customerData.customer);
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'app-navigation',
                state: {
                  routes: [
                    {
                      name: 'home-navigation',
                      state: {
                        routes: [{name: 'home'}],
                      },
                    },
                  ],
                },
              },
            ],
          });
        } else {
          AsyncStorage.removeItem('token');
          invalidToken(navigation);
        }
      }
    } else {
      invalidToken(navigation);
    }
  } catch (error) {
    console.log(error);
  }
};

export default checkToken;

const invalidToken = navigation => {
  navigation.reset({
    index: 0,
    routes: [{name: 'loginpone'}],
  });
};
