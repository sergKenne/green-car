
import { IProduct } from "./components/Card"
//import data from './data.json'
import { ESort } from "./types";


export const setDataToStorage = (name: string, value: any) => {
    localStorage.setItem(name, JSON.stringify(value));
}

export const getDataFromStorage = (name: string): any => {
    const storageVal = localStorage.getItem(name);
    return storageVal 
}

export const getMakes = (products: IProduct[]) => {
    return products.reduce(
        (acc: string[], curr: IProduct) => (acc.includes(curr.make) ? acc : [...acc, curr.make]),
        [],
    ).map(elt => ({make: elt, checked: false }));
};

export const getYears = (products: IProduct[]) => {
    return products
        .reduce(
            (acc: number[], curr: IProduct) =>
                acc.includes(curr.year) ? acc : [...acc, curr.year],
            [],
        )   
};

export const getFuels = (products: IProduct[]) => {
    return products
        .reduce(
            (acc: string[], curr: IProduct) =>
                acc.includes(curr.fuel) ? acc : [...acc, curr.fuel],
            [],
        )
        .map((elt) => ({ fuel: elt, checked: false }));
};

export const getLocations = (products: IProduct[]) => {
    return products
        .reduce(
            (acc: string[], curr: IProduct) =>
                acc.includes(curr.location.split(',')[1])
                    ? acc
                    : [...acc, curr.location.split(',')[1]],
            [],
        )
        .map((elt) => ({ location: elt, checked: false }));
};

//FILTER BY SORT
export const filterBySort = (sort: string, products: IProduct[]) => {
    switch (sort) {
        case ESort.NAME_ASC:
            return products.sort((a, b) => {
                const aName = a.name.toLowerCase();
                const bName = b.name.toLowerCase();
                if (aName < bName) return -1;
                if (aName > bName) return 1;
                return 0;
            });
        case ESort.NAME_DESC:
            return products.sort((a, b) => {
                const aName = a.name.toLowerCase();
                const bName = b.name.toLowerCase();
                if (aName > bName) return -1;
                if (aName < bName) return 1;
                return 0;
            });
        case ESort.YEAR_ASC:
            return products.sort((a, b) => a.year - b.year);
        case ESort.YEAR_DESC:
            return products.sort((a, b) => b.year - a.year);
        case ESort.LOWEST_PRICE:
            return products.sort((a, b) => a.price - b.price);
        case ESort.HIGHEST_PRICE:
            return products.sort((a, b) => b.price - a.price);
        case ESort.LOWEST_MILEAGE:
            return products.sort((a, b) => a.mileage - b.mileage);
        case ESort.HIGHEST_MILEAGE:
            return products.sort((a, b) => b.mileage - a.mileage);
        default:
            return products;
    }
}

export const getProductsFiltered = (arrFiltered:string[], products:IProduct[]) => {
    
    const obj:any ={}
    arrFiltered.forEach((elt:any) => {
        if (!obj[Object.keys(elt)[0]]) {
            obj[Object.keys(elt)[0]] = [elt[Object.keys(elt)[0]]];
        } else {
            obj[Object.keys(elt)[0]] = [...obj[Object.keys(elt)[0]], elt[Object.keys(elt)[0]]];
        }
    });

    const conditionFilter = (key:string, item:any) => {
        if (key === 'location') {
            if (obj[key][0].trim() === item[key].split(' ')[1]) {
                productsFiltered.push(item);
            }
        } if (key === 'search') {
            if (
                item.name.toLowerCase().includes(obj[key][0].trim().toLowerCase()) ||
                item.fuel.toLowerCase().includes(obj[key][0].trim().toLowerCase()) ||
                item.make.toLowerCase().includes(obj[key][0].trim().toLowerCase()) 
            ) {
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

    let productsFiltered:IProduct[] = [];
    let tempFiltered: IProduct[] = [];
    const objKeys = Object.keys(obj)

    if (objKeys.length === 1) {
        objKeys.forEach((key) => {
            products.forEach((item: any) => {
                conditionFilter(key, item)
            });
        });  
    }

    if (objKeys.length === 2) {
        let counter = 1;
        objKeys.forEach((key) => {
            if (counter === 1) {
                products.forEach(item => {
                    conditionFilter(key, item)
                })
                counter++
                tempFiltered = [...productsFiltered];
                productsFiltered = [];
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
                products.forEach((item) => {
                    conditionFilter(key, item);
                });
                counter++;
                tempFiltered = [...productsFiltered];
                productsFiltered = [];
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
                products.forEach((item) => {
                    conditionFilter(key, item);
                });
                counter++;
                tempFiltered = [...productsFiltered];
                productsFiltered = [];
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
                products.forEach((item) => {
                    conditionFilter(key, item);
                });
                counter++;
                tempFiltered = [...productsFiltered];
                productsFiltered = [];
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

    if (objKeys.length === 6) {
        let counter = 1;
        objKeys.forEach((key) => {
            if (counter === 1) {
                products.forEach((item) => {
                    conditionFilter(key, item);
                });
                counter++;
                tempFiltered = [...productsFiltered];
                productsFiltered = [];
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
            } else if (counter === 5) {
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

    if (objKeys.length === 7) {
        let counter = 1;
        objKeys.forEach((key) => {
            if (counter === 1) {
                products.forEach((item) => {
                    conditionFilter(key, item);
                });
                counter++;
                tempFiltered = [...productsFiltered];
                productsFiltered = [];
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
            } else if (counter === 5) {
                tempFiltered.forEach((item: any) => {
                    conditionFilter(key, item);
                });
                counter++;
                tempFiltered = [...productsFiltered];
                productsFiltered = [];
            } else if (counter === 6) {
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

    return productsFiltered
}

