export interface UserData {
  birthDay: string | null;
  lastName: string | null;
  name: string | null;
  documentNumber: string | null;
  cellphone: string | null;
}

export interface UserContextProps {
  getUser: (documentNumber: string, cellphone: string) => Promise<any>;
  userData: UserData | undefined;
}
