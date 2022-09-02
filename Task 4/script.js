/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const getCars = () => callAPI('./cars.json');

const callAPI = (url) => {
  return fetch(url).then((res) => res.json());
};

getCars().then(data => renderCars(data));

const renderCars = (data) => {
  const table = document.createElement("table");
  const thead = createSection(["brand", "model"]);
  const tbody = createTbody(data);
  table.append(thead, tbody);
  document.body.prepend(table);
};

const createSection = (columns) => {
  const thead = document.createElement("thead");
  const theadtr = document.createElement("tr");
  columns.forEach((columnName) => {
    const column = document.createElement("th");
    column.textContent = columnName;
    theadtr.append(column);
  });
  const table = document.createElement("table");
  table.append(thead, document.createElement("tbody"));
  document.getElementById("output").prepend(table);

  thead.append(theadtr);
  return thead;
  
};


const createTbody = data => {
  const tbody = document.createElement('tbody');
  data.forEach(element => {
    const tr = document.createElement('tr');
    const brandCell = document.createElement('td');
    const modelCell = document.createElement('td');
    brandCell.textContent = element.brand;
    modelCell.textContent = element.models;
    brandCell.style.cssText = "color: red";
    modelCell.style.cssText = "font-weight: bold";
    modelCell.style.cssText = "border-style: ridge";
   tr.append(brandCell, modelCell);
    tbody.append(tr);
    const trouble = document.createElement("div");
    trouble.append(brandCell, modelCell);
    tbody.append(trouble);
    document.getElementById("output").appendChild(trouble);
    console.log(trouble);

    trouble.className = "container";

  });
  return tbody;
};


