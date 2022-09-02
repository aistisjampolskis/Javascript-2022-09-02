/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
async function fetchData() {
  try {
    let response = await fetch("https://api.github.com/users");
    if (response.ok) {
      users = await response.json();
      populateTable(users);
    }
  } catch (error) {
    console.error(error);
  }
}
fetchData();

const createTableSkeleton = () => {
  const login = document.createElement("th");
  login.innerText = "Login";

  const Avatar = document.createElement("th");
  Avatar.innerText = "Avatar";

  const image = document.createElement("th");
  image.innerText = "Image";

  const tr = document.createElement("tr");
  tr.append(login, image, Avatar);

  const thead = document.createElement("thead");
  thead.append(tr);

  const table = document.createElement("table");
  table.append(thead, document.createElement("tbody"));
  document.getElementById("output").appendChild(table);
};

function populateTable(users) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  users.forEach((users) => {
    const login = document.createElement("td");
    login.innerText = users.login;
    login.style.cssText = "color: red";

    const img = document.createElement("img");
    img.style.width = "156px";
    img.style.height = "auto";
    img.src = users.avatar_url;
    img.setAttribute("alt", "UserPicture");
    const image = document.createElement("td");
    image.append(img);

    const tr = document.createElement("div");
    tr.append(login, image);
    tbody.append(tr);
    document.getElementById("output").appendChild(tr);
    console.log(tr);
  });
}
createTableSkeleton();
