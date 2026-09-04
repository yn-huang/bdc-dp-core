interface UserProfile {
  email: string;
  firstName: string;
  lastName: string;
  phone: string | null;
  addressStreet: string;
  addressCity: string;
  addressState: string;
  postalCode: string;
  country: string;
}

export interface User {
  uuid: string;
  profile: UserProfile;
}
