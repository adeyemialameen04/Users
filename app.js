const userForm = document.querySelector("#userForm");
const usersContainer = document.querySelector("#users");

const users = [];

const addUser = () => {
  const nameInput = document.querySelector("#name").value;
  const ageInput = Number(document.querySelector("#age").value);

  const user = {
    name: nameInput,
    age: ageInput,
  };

  const existingUser = users.find(
    (singleUser) => singleUser.name === user.name
  );
  if (existingUser) {
    alert("This user already exists in our database");
    return;
  }

  users.push(user);
  console.log(user);
  console.log(users);

  renderUsers();
};

const renderUsers = () => {
  usersContainer.innerHTML = users
    .map(
      (user) =>
        `<article>
          <h1>Name:${user.name}</h1>
          <p>Age:${user.age}</p>
        </article>`
    )
    .join("");
};

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addUser();
});

renderUsers();

for (const singleUser of users) {
  console.log(singleUser);
}
