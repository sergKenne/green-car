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
        (acc: string[], curr: IProduct) => (acc.includes(curr.fuel) ? acc : [...acc, curr.fuel]),
        [],
    );
};

export const getLocations = (products: IProduct[]) => {
    return products.reduce(
        (acc: string[], curr: IProduct) =>
            acc.includes(curr.location.split(",")[1]) ? acc : [...acc, curr.location.split(",")[1]],
        [],
    );
};


const ar = [
    { make: 'Tesla' },
    { make: 'Lexus' },
    { make: 'Toyota' },
    { price: [14069, 54791] },
    { fuel: 'Hybrid' },
    { fuel: 'Gasoline' },
    { location: ' CA' },
    { location: ' MT' },
    { mileage: [246616, 476576] },
];

export const getObjFiltering = (arrFiltered:any, products:any) => {
    const obj: any = {};

    arrFiltered.forEach((elt:any) => {
        if (!obj[Object.keys(elt)[0]]) {
            obj[Object.keys(elt)[0]] = [elt[Object.keys(elt)[0]]];
        } else {
            obj[Object.keys(elt)[0]] = [...obj[Object.keys(elt)[0]], elt[Object.keys(elt)[0]]];
        }
    });

    

    console.log('getObjFiltering:', obj);

    const conditionFilter = (key:any, item:any) => {
        if (key === 'location') {
            if (obj[key][0].trim() === item[key].split(' ')[1]) {
                productsFiltered.push(item);
            }
        } else if (key === 'mileage') {
            const min = obj[key][0][0];
            const max = obj[key][0][1];
            const mileage = item.mileage;
            if (mileage >= min && mileage <= max) {
                productsFiltered.push(item);
            }
        } else if (key === 'price') {
            const min = obj[key][0][0];
            const max = obj[key][0][1];
            const price = item.price;
            if (price >= min && price <= max) {
                productsFiltered.push(item);
            }
        } else if (key === 'fuel') {
            if (obj[key].includes(item[key])) {
                productsFiltered.push(item);
            }
        } else {
            if (obj[key].includes(item[key])) {
                productsFiltered.push(item);
            }
        }
    }


    let productsFiltered: any = [];
    let tempFiltered: any = [];
    const objKeys = Object.keys(obj)
    

    if (objKeys.length === 1) {
        objKeys.forEach((key) => {
            data.forEach((item: any) => {
                conditionFilter(key, item)
            });
        });  
    }

    if (objKeys.length === 2) {
        let counter = 1;
        objKeys.forEach((key) => {
            if (counter === 1) {
                data.forEach(item => {
                    conditionFilter(key, item)
                })
                counter++
                tempFiltered = [...productsFiltered];
                productsFiltered = [];

                console.log("tempFiltered:", tempFiltered);
            } else if(counter ===2){
                tempFiltered.forEach((item:any) => {
                    conditionFilter(key, item);
                });
            }
        })
    }

    if (objKeys.length === 3) {
        let counter = 1;
        objKeys.forEach((key) => {
            if (counter === 1) {
                data.forEach((item) => {
                    conditionFilter(key, item);
                });
                counter++;
                tempFiltered = [...productsFiltered];
                productsFiltered = [];
                console.log('tempFiltered:', tempFiltered);
            } else if(counter === 2) {
                tempFiltered.forEach((item: any) => {
                    conditionFilter(key, item);
                });
                counter++;
                tempFiltered = [...productsFiltered];
                productsFiltered = [];
            } else {
                tempFiltered.forEach((item: any) => {
                    conditionFilter(key, item);
                });
            }
        });
    }

    if (objKeys.length === 4) {
        let counter = 1;
        objKeys.forEach((key) => {
            if (counter === 1) {
                data.forEach((item) => {
                    conditionFilter(key, item);
                });
                counter++;
                tempFiltered = [...productsFiltered];
                productsFiltered = [];
                console.log('tempFiltered:', tempFiltered);
            } else if (counter === 2) {
                tempFiltered.forEach((item: any) => {
                    conditionFilter(key, item);
                });
                counter++;
                tempFiltered = [...productsFiltered];
                productsFiltered = [];
            } else if (counter === 3) { 
                tempFiltered.forEach((item: any) => {
                    conditionFilter(key, item);
                });
                counter++;
                tempFiltered = [...productsFiltered];
                productsFiltered = [];
            } else {
                tempFiltered.forEach((item: any) => {
                    conditionFilter(key, item);
                });
            }
        });
    }

    if (objKeys.length === 5) {
        let counter = 1;
        objKeys.forEach((key) => {
            if (counter === 1) {
                data.forEach((item) => {
                    conditionFilter(key, item);
                });
                counter++;
                tempFiltered = [...productsFiltered];
                productsFiltered = [];
                console.log('tempFiltered:', tempFiltered);
            } else if (counter === 2) {
                tempFiltered.forEach((item: any) => {
                    conditionFilter(key, item);
                });
                counter++;
                tempFiltered = [...productsFiltered];
                productsFiltered = [];
            } else if (counter === 3) {
                tempFiltered.forEach((item: any) => {
                    conditionFilter(key, item);
                });
                counter++;
                tempFiltered = [...productsFiltered];
                productsFiltered = [];
            } else if (counter === 4) {
                tempFiltered.forEach((item: any) => {
                    conditionFilter(key, item);
                });
                counter++;
                tempFiltered = [...productsFiltered];
                productsFiltered = [];
            } else {
                tempFiltered.forEach((item: any) => {
                    conditionFilter(key, item);
                });
            }
        });
    }

    console.log('productsFiltered:', productsFiltered);
    return productsFiltered
}


getObjFiltering(ar, data)
 
 
