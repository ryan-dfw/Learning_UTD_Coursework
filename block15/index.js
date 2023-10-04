const customerResponse = {
  firstName: "jake",
  lastName: "smith",
  email: "jaekSmih!aol.com",
  phone: undefined,
  zipCode: "631",
  favoriteFlavors: "32",
  cupSize: "medium",
  favoriteStore: "Target",
  firstVisit: false,
};

customerResponse.email = "jak3Smith1992@email.com";
customerResponse.phone = 3195551234;
customerResponse.zipCode = 63132;
customerResponse.favoriteFlavors = "coffee, strawberry, and matcha";

delete customerResponse.zipCode;
delete customerResponse.favoriteStore;

customerResponse.toppings =
  "chocolate sprinkles, wafer straws, and gummy bears";
customerResponse.futureFlavors = "mango";
customerResponse.todaysPurchaseCost = 5.32;

console.log(Object.keys(customerResponse));
