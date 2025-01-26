export interface IAddress {
  address: string;
  location: {
    x: number;
    y: number;
  };
  score: number;
  attributes: Record<string, any>;
  extent: {
    xmin: number;
    ymin: number;
    xmax: number;
    ymax: number;
  };
}
