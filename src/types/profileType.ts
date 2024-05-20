export type UserProfile = {
  id: string;
  avatar: {
    id: number;
    image_high_url: string;
    image_medium_url: string;
    image_low_url: string;
  };
  name: string;
  last_name: string;
  email: string;
  role: {
    value: number;
    label: string;
  };
  last_login: string;
  staff_role: {
    value: number;
    label: string;
  };
};

export type TUser = {
  id: number;
  name: string;
  email: string;
  is_active: boolean;
  avatar: null;
  type: string;
  created: string;
  modified: string;
  role: string;
}

export type ErrorResponse = {
    detail: string;
    code: string;
    messages: {
        token_class: string;
        token_type: string;
        message: string;
    }[];
}
