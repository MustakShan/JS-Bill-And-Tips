"use strict"
const myName = "Mustak Shan";
const chickenBiriyani = 230;
const jaliKabab = 50;
const borHani = 120;
const mustakBill = chickenBiriyani + jaliKabab + borHani;
console.log(mustakBill);
let ShanBill = `My Name is ${myName} and this is my lunch bill total ${chickenBiriyani + jaliKabab + borHani} taka`;
console.log(ShanBill);
let mamarTips = parseInt(mustakBill >= 50 && mustakBill <= 100 ? mustakBill * 0.05 : mustakBill * 0.07);
console.log(`${myName} er total bill hoyechilo ${mustakBill} taka ebong mamar tips hoyechilo ${mamarTips} taka`);


const Name = 'Dip Rahman';
const kacchiBiriyani = 380;
const Kabab = 60;
const lacchi = 100;
const rahmanBill = kacchiBiriyani + Kabab + lacchi;
let dipBill =  `My Name is ${Name} and this is my lunch bill total ${kacchiBiriyani + Kabab + lacchi} taka`;
console.log(dipBill);
console.log(rahmanBill);
let mamarboksish = dipBill >= 50 && dipBill <= 100 ? dipBill * 0.05 : dipBill * 0.07;
console.log(`${Name} er total bill hoyechilo ${rahmanBill} taka ebong mamar tips hoyechilo ${mamarboksish} taka`);


const firstName = " Shakurul Emon"
const beefBiriyani = 260;
const salad = 50;
const cocaCola = 120;
let emonBill = `My Name is ${firstName} and this is my lunch bill total ${beefBiriyani + salad + cocaCola} taka`;
console.log(emonBill);
const shakurulBill = beefBiriyani + salad + cocaCola;
console.log(shakurulBill);
let mamarTipss = parseInt(emonBill >= 50 && emonBill <= 100 ? mustakBill * 0.05 : shakurulBill * 0.07);
console.log(`${firstName} er total bill hoyechilo ${shakurulBill} taka ebong mamar boksish hoyechilo ${mamarTipss} taka`);
