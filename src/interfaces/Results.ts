export interface IAddress {
  address: string;
  location: {
    x: number;
    y: number;
  };
  score: number;
  attributes: Record<string, any>; // Use `Record<string, any>` for an empty object or unknown structure
  extent: {
    xmin: number;
    ymin: number;
    xmax: number;
    ymax: number;
  };
}
