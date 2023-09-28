import { IProduct } from "./components/Card"

export const getMakes = (products: IProduct[]) => {
    return products.reduce(
        (acc: string[], curr: IProduct) => (acc.includes(curr.make) ? acc : [...acc, curr.make]),
        [],
    );
};

export const getDates = (products: IProduct[]) => {
    return products.reduce(
        (acc: number[], curr: IProduct) => (acc.includes(curr.date) ? acc : [...acc, curr.date]),
        [],
    );
};

export const getFuels = (products: IProduct[]) => {
    return products.reduce(
        (acc: string[], curr: IProduct) => (acc.includes(curr.info.fuel) ? acc : [...acc, curr.info.fuel]),
        [],
    );
};

export const getLocations = (products: IProduct[]) => {
    return products.reduce(
        (acc: string[], curr: IProduct) =>
            acc.includes(curr.info.location.split(",")[1]) ? acc : [...acc, curr.info.location.split(",")[1]],
        [],
    );
};
 
 
