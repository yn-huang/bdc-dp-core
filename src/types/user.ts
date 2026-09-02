interface UserProfile {
  firstName: string;
  lastName: string;
  organization: string;
}

export interface User {
  id: string;
  profile: UserProfile;
}
