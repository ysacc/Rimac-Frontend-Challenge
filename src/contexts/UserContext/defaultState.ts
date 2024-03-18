import { UserContextProps } from "./interfaces";

export const defaultContextValue: UserContextProps = {
  getUser: async () => undefined,
  userData: {
    birthDay: null,
    lastName: null,
    name: null,
    cellphone: null,
    documentNumber: null,
  },
};
