export type LoginRequestBody = {
    email: string;
    password: string;
};

export type LoginResponse = {
  user: {
    id: number;
    name: string;
    email: string;
    is_active: boolean;
    avatar: null;
    type: string;
    created: string;
    modified: string;
    role: string;
  };
  tokens: {
    refresh: string;
    access: string;
  };
};

export type BadRequest = {
  email: Array<string>;
  password: Array<string>;
};
