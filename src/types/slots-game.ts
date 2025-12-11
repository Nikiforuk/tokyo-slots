export interface CoinBtn {
  icon: string;
  iconWidth: number;
  iconHeight: number;
  position: 'absolute' | 'relative' | 'fixed' | 'sticky';
  top: string;
  left?: string;
  right?: string;
  reverse?: boolean;
}
