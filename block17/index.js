const coffeeMenu = require("./coffee_data");

let costTally = 0;

console.log("--------------------[COMPLETE MENU]--------------------");
coffeeMenu.forEach((item) => {
  let menuPrintLine = `${item.name}: $${item.price}`;
  item.seasonal ? (menuPrintLine += " (seasonal)") : null;
  console.log(menuPrintLine);
});
console.log("--------------------[DRINKS OFFERED]--------------------");
coffeeMenu.forEach((item) => {
  console.log(item.name);
});
console.log("--------------------[DRINKS UNDER $5]--------------------");
coffeeMenu.forEach((item) => {
  item.price < 6 ? console.log(item.name) : null;
});
console.log("--------------------[DRINKS OF AN EVEN COST]--------------------");
coffeeMenu.forEach((item) => {
  item.price % 2 ? null : console.log(item.name);
});
console.log("-----------------[ONE OF EACH DRINK WOULD COST]-----------------");
coffeeMenu.forEach((item) => {
  costTally += item.price;
});
console.log(`$${costTally}`);
console.log("--------------------[SEASONAL DRINKS]--------------------");
coffeeMenu.forEach((item) => {
  item.seasonal ? console.log(item.name) : null;
});
console.log("--------------------[A SPECIAL MESSAGE]--------------------");
coffeeMenu.forEach((item) => {
  item.seasonal ? console.log(`${item.name}: with imported beans`) : null;
});
