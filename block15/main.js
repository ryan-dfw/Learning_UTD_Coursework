const dinner = {
  me: 12,
  jonah: 20,
  amy: 8,
  mateo: 14,
  cheyenne: 16,
};

console.log(Object.keys(dinner));
console.log(Object.values(dinner));
console.log(
  Object.values(dinner).reduce((accumulator, value) => accumulator + value, 0)
);
