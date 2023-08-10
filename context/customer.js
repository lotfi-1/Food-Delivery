import {createContext,useState} from 'react';

export const Customer = createContext();

export default function CustomerProvider({children}) {
  const [customer, setCustomer] = useState({});

  return (
    <Customer.Provider value={{customer, setCustomer}}>
      {children}
    </Customer.Provider>
  );
}
