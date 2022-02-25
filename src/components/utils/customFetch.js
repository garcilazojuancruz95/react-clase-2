let is_ok = true;

const productos = require('./utils/productos.js')

console.log(productos)

export const customFetch = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (is_ok) {
                    resolve();
                } else {
                    reject();
                }
            });
        });
    }