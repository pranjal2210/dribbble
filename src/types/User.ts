export interface User {
  id: number; // or string, depending on your ID type
  fullname: string;
  username: string;
  email: string;
  password: string; // Consider removing this if you don't want it in your state
  // Add other fields as needed
}
