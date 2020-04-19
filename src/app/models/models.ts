export interface Usuario {
  id?: number;
  username?: string;
  password?: string;
  identificacion?: string;
  primerNombre?: string;
  segundoNombre?: string;
  primerApellido?: string;
  segundoApellido?: string;
  fechaNacimiento?: Date;
  genero?: "MASCULINO" | "FEMENINO" | "OTRO" | string;
}

export interface Etapa {
  id?: number;
  nombre?: string;
}

export interface Cliente {
  id?: number;
  peso?: number;
  altura?: number;
  usuario?: Usuario;
  etapa?: Etapa[];
}

export interface Area {
  id?: number;
  nombre?: string;
}

export interface Horario {
  dia?: string;
  horaInicio?: Date;
  horaFin?: Date;
  area?: Area[];
}

export interface Entrenador {
  id?: number;
  usuario?: Usuario;
  area?: Area[];
  horario?: Horario[];
}

export interface Musculo {
  id?: number;
  nombre?: string;
}

export interface Ejercicios {
  id?: number;
  etapas?: number[];
  musculos?: number[];
  etapasArray?: Etapa[];
  musculosArray?: Musculo[];
  nombre?: string;
  tipo?: string;
}

export interface Membresia {
  id?: number;
  nombre?: string;
  descripcion?: string;
  extra?: string;
  duracion?: number;
  tipoDuracion?: string;
  precio?: number;
}

export interface MembresiasCliente {
  cliente?: Cliente;
  membresia?: Membresia;
  fecha_registro?: Date;
  estado?: string;
  Isanulada?: boolean;
  fecha_anulacion?: Date;
}

export interface Loading {
  primario?: string;
  secundario?: string;
  show?: true | false;
}
