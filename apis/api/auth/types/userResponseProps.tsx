import {Scope} from '@/apis/api/auth/types';

type UserProps = {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
}

type DataProps = {
  user: UserProps;
  scopes: Scope[];
  token_type: string;
  expires_at: string;
  expires_in: number;
  token_expirado: boolean;
}

type UserResponseProps = {
  success: boolean;
  data: DataProps;
  message?: string;
}

export default UserResponseProps;