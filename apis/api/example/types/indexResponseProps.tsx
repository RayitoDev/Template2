type DataIndexProps = {
  id: number;
  rec: string;
  placa: string | null;
  serie: string;
  tramite_id: string;
  firmado: string;              
  fecha_firmado: string | null;
  fecha_pagado: string | null;
  fecha_session: string | null;
  has_session: string;
  pagado: string;
  terminado: string;
};

type IndexResponseProps = {
  success: boolean;
  data: DataIndexProps[];
  message: string;
};

export default IndexResponseProps;