const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

function christen(customer, namae, ploopdeloop) {
  customer.name = namae;
  customer.bloopy = ploopdeloop;
}

function evaluateCost(customer) {
  let cost = customer.pricePerRefill * customer.refills;
  customer.subscription ? (cost *= 0.75) : cost;
  customer.coupon ? (cost -= 10) : cost;
  console.log(`"${customer.name}, your grand total is $${cost}."`);
}

christen(timmy, "Timmy");
christen(sarah, "Sarah");
christen(rocky, "Rocky", 3.8);

evaluateCost(timmy);
evaluateCost(sarah);
evaluateCost(rocky);

console.log(rocky);
