const cButton = document.getElementById("createButton");

// Add event listener to the DOM element
cButton.addEventListener("click", () => {
  const value = document.getElementById("todoInout").value;
  const payload = {value}
  
  fetch("http://localhost:3000/todo", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(() => alert("Todo successfully added"))
    .catch(() => {
      alert("An error occured while trying to add a todo");
    });
});
