import React, {createContext, useState} from 'react';

interface UserContextProps {
  userData: {
    name: string;
    mobile: string;
    address: string;
  };
  updateData: (data: any) => void;
}

const UserContext = createContext<UserContextProps | null>(null);
const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [userData, setUserData] = useState({
    name: 'Saurabh Soni',
    mobile: '7879299436',
    address: 'Jabalpur, Madhya Pradesh, India',
  });
  const updateData = (data: any) => {
    setUserData(data);
  };
  return (
    <UserContext.Provider value={{userData, updateData}}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};
