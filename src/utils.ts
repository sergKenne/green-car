import { IProduct } from "./components/Card"
import data from './data.json'

export const getMakes = (products: IProduct[]) => {
    return products.reduce(
        (acc: string[], curr: IProduct) => (acc.includes(curr.make) ? acc : [...acc, curr.make]),
        [],
    ) //.map(elt => ({make: elt, checked: false }));
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


const ar = [
    { make: 'Tesla' },
    //{ make: 'Lexus' },
    //{ make: 'Toyota' },
    { price: [14069, 54791] },
    //{ fuel: 'Hybrid' },
    //{ fuel: 'Gasoline' },
    //{ location: ' CA' },
    { location: ' MT' },
    { mileage: [246616, 476576] },
];

export const getObjFiltering = (arrFiltered:any, products:any) => {
    const obj:any = {};

    arrFiltered.forEach((elt:any) => {
        if (!obj[Object.keys(elt)[0]]) {
            obj[Object.keys(elt)[0]] = [elt[Object.keys(elt)[0]]];
        } else {
            obj[Object.keys(elt)[0]] = [...obj[Object.keys(elt)[0]], elt[Object.keys(elt)[0]]];
        }
    });

    console.log('getObjFiltering:', obj);
    console.log("data:", data);

    const productsFiltered:any = [];
    Object.keys(obj).forEach(key => {
        data.forEach((item: any) => {
            if (key === "location") {
                if (obj[key][0].trim() === item.info[key].split(" ")[1]) {
                    productsFiltered.push(item);
                }
            }

            if (key === "mileage") {
                
            }

            if (key === 'price') {
            }

            if (obj[key].includes(item[key])) {
                productsFiltered.push(item)
            }
        })
    })

    console.log('productsFiltered:', productsFiltered);
    return productsFiltered
}


getObjFiltering(ar, data)
 
 
