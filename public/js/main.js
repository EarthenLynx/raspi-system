const cButton = document.getElementById("createButton");

// Add event listener to the DOM element
cButton.addEventListener("click", () => {
  const todoValue = document.getElementById("todoInout").value;
  console.log(todoValue);
  fetch("http://localhost:3000/todo", {
    method: "POST",
    body: JSON.stringify(todoValue),
  })
    .then(() => alert("Todo successfully added"))
    .catch(() => {
      alert("An error occured while trying to add a todo");
    });
});
