
export type IMake = {
  make: string,
  checked: boolean
}

export type IFuel = {
    fuel: string;
    checked: boolean;
};

export type ILocation = {
    location: string;
    checked: boolean;
};

export type IPrice = {
    price: number;
    checked: boolean;
};

export type IYear = {
    year: number;
    checked: boolean;
};

export enum ESort {
  NAME_ASC = "Name (A/Z)",
  NAME_DESC = "Name (Z/A)",
  LOWEST_PRICE = "Lowest price",
  HIGHEST_PRICE = "Highest price",
  LOWEST_MILEAGE = "Lowest mileage",
  HIGHEST_MILEAGE = "Highest mileage",
  YEAR_ASC = "Year (Asc)",
  YEAR_DESC = "Year (Desc)"
}

export type IRange = {
    device?: string;
    minmaxVal: number[];
    range: number[];
    setRange: any;
};

// export type IFiltering =
//     { make: string, } |
//     { price: number[] } |
//     { mileage: number[] } |
//     { year: number } |
//     { fuel: string } |
//     { location: string } |
//     { search: string };
   


