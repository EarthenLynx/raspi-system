// Get the necessary DOM elements
const cButton = document.getElementById("createButton");
const rButton = document.getElementById("readButton");
const tList = document.getElementById("todoList");

// Define the http - functions:
// GET
const getData = () => {
  // Send a GET request with the stringified payload
  fetch("http://localhost:3000/todo")
    .then((response) => response.json())
    .then((payload) => {
      // Initially clear up the list
      while (tList.firstChild) {
        tList.removeChild(tList.firstChild);
      }

      // Then, for each returned element, add a todo item to the list
      payload.data.forEach((item) => {
        let el = document.createElement("li");
        el.classList.add("collection-item");
        el.innerText = item.value;
        el.addEventListener("click", (event) => deleteData(event));

        tList.appendChild(el);
      });
    });
};

// POST
const postData = () => {
  // Get the value from the input element & prepare the payload
  const value = document.getElementById("todoInput").value;
  const payload = { value };

  // Send a POST request with the stringified payload
  fetch("http://localhost:3000/todo", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    // Upon successful response, notify the user
    .then((res) => M.toast({ html: `<i class='far fa-bell' style='color: green'></i> ${res.msg}` }))

    // And then update the data model
    .then(() => getData())

    // If there's an error, also give the user a message
    .catch((err) =>
      M.toast({ html: `<i class='far fa-bell' style='color: red'></i> ${err.msg}` })
    );
};
// DELETE
const deleteData = (event) => {
  // Get the value of the element that's to be deleted & prepare the payload
  // This should be an ID instead of the name in most cases to avoid errors in the backend
  const value = event.path[0].innerHTML;
  const payload = { value };

  // Send a DELETE request with the stringified payload
  fetch("http://localhost:3000/todo", {
    method: "DELETE",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    // Upon successful response, notify the user
    .then((res) => M.toast({ html: `<i class='far fa-bell style='color: green''></i> ${res.msg}` }))

    // And then update the data model
    .then(() => getData())
    .catch(() =>
      M.toast({
        html:
          "<i class='far fa-bell' style='color: red'></i> An error occured while trying to add a todo",
      })
    );
};

// Initially load the data once when the document loads
(function () {
  getData();
  M.AutoInit();
})();

// Add event listeners to the DOM element
cButton.addEventListener("click", () => postData());
rButton.addEventListener("click", () => getData());
dButton.addEventListener("click", (event) => deleteData(event));
