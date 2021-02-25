"use strict";

const definirCompra =(n)=>{
    let din = prompt(`Dinero de ${n}`);
    if ( din >= 300 && din < 320) return (`${}: helado de agua`);
    if ( din >= 320 && din < 350) return (`${}: helado de crema`);
    if ( din >= 350 && din < 500) return (`${}: helado de agua mora crema`);
    if ( din >= 500 && din < 600) return (`${}: helado de agua crema con chispas de choc`);
    if ( din >= 600 && din < 800) return (`${}: helado pote pequeño`);
    if ( din >= 800 && din < 900) return (`${}: helado pote mediano`);
    else return (`${n}: No te lcanza para comprar helado`);
}

console.log(definirCompra("Pedro"));
console.log(definirCompra("Juan"));
console.log(definirCompra("Roberto"));