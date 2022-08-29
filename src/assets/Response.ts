export interface Response<T>{
  usuario: import('../assets/Usuario').Usuario;
  message?: string;
  data: T; 
}