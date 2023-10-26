const todosContainer = document.getElementById("todos");

async function getTodos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await res.json();
  } catch (err) {
    console.log(err);
  }
}

const todos = getTodos();
console.log(todos);
