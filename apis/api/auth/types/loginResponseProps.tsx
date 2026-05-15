type DataProps = {
  token: string;
  token_type: string;
  expires_at: string;
  expires_in: number;
  token_expirado: boolean;
}

type LoginResponseProps = {
  success: boolean;
  data: DataProps;
  message?: string;
};

export default LoginResponseProps;