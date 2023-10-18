const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

const createUserListItem = (user) => {
  const userItem = document.createElement("li");
  userItem.textContent = `${user.name}, ${user.age}, ${user.occupation}`;
  return userItem;
};

function main() {
  const rootElement = document.getElementById("root");
  rootElement.appendChild(
    Object.assign(document.createElement("h1"), { textContent: "FREELANCERS" })
  );
  const freelancerList = rootElement.appendChild(document.createElement("ul"));
  const userItems = users.map(createUserListItem);
  userItems.forEach((userItem) => {
    freelancerList.appendChild(userItem);
  });
}

main();
