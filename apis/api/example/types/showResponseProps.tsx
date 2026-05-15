type DetalleSolicitudProps = {
  id: number;
  uuid: string;
  folio: string;
  solicitud_vehicular_id: string;
  clave_clase: string;
  fecha_creacion: string;
  fecha_cancelacion: string | null;
  fecha_rechazado: string | null;
  fecha_retroalimentacion: string | null;
  fecha_aprobacion: string | null;
  fecha_revision: string | null;
  estatu_solicitud_id: string;
  observaciones: string | null;
  active: string;
  tried: string;
  user_id: string | null;
  user_name: string | null;
  fecha_evento: string | null;
  entidad_id: string | null;
};

type ShowResponseProps = {
  success: boolean;
  data: DetalleSolicitudProps;
  message: string;
};

export default ShowResponseProps;