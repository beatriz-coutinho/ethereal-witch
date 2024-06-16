export interface Users {
    id:number;
    name: string;
    username: string;
    password: string;
    cep: string;
    cidade: string;
    estado: string;
    logradouro: string;
    bairro: string;
    numero: string;
    complemento: string;
  }

  export interface UserSingle {
    name: string;
    username: string;
  }