export interface Team {
  id: number;
  slug: string;
  nombre: string;
  victorias: number;
  derrotas: number;
  winrate: number;
  imagen: string | null;
}
