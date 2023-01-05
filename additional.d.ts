export type Geo = {
  lat: string;
  lng: string;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: { [key: string]: Geo };
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type Users = User[];
export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: { [key: string]: Address };
  phone: string;
  website: string;
  company: { [key: string]: Company };
};
