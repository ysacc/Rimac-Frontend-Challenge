import {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import { UserContextProps, UserData } from './interfaces';
import { defaultContextValue } from './defaultState';
import { fetchUser } from '../../services/UserApi';

export const UserContext = createContext<UserContextProps>(defaultContextValue);

export const UserProvider = (props: PropsWithChildren) => {
  const [userData, setUserData] = useState<UserData>();

  const getUser = async (documentNumber: string, cellphone: string) => {
    const data = await fetchUser();
    const completeData = {
      ...data,
      documentNumber,
      cellphone,
    };
    setUserData(completeData);
    return data;
  };
  const store = useMemo<UserContextProps>(
    () => ({
      userData,
      getUser,
    }),
    [getUser, userData]
  );

  return (
    <UserContext.Provider value={store}>{props.children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
