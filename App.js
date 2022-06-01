import { data } from "./data.js";

export const app = () => {
  return new Promise((resolve, reject) => {
    if (data != null) {
      setTimeout(() => resolve("Hello World"), 3000);
    } else {
      const messageError = "Test Error";
      reject(new Error(messageError));
    }

    //Se ordena los elementos de menor a mallor
    function ordenarAZ(data) {
      data.sort(function (a, b) {
        if (a.nombre > b.nombre) {
          return 1;
        }
        if (a.nombre < b.nombre) {
          return -1;
        }
        return 0;
      });
    }

    //Se ordena los elementos de mallor a menor
    function ordenarZA(data) {
      data.sort(function (a, b) {
        if (a.nombre < b.nombre) {
          return 1;
        }
        if (a.nombre > b.nombre) {
          return -1;
        }
        return 0;
      });
    }

    var status = 0;
    var dataOriginal;
    function clickTitulos() {
      if (status === 0) {
        ordenarAZ(data);
      } else if (status === 1) {
        ordenarZA(data);
      } else {
        status = 0;
        llenartabla(dataOriginal);
        return true;
      }
      status++;
      llenartabla(data);
      return false;
    }

    const dupicarData = () => {
      dataOriginal = data.map((dato) => {
        return dato;
      });
    };

    function llenartabla(data) {
      const container = document.querySelector("#container");

      container.innerHTML = "";

      const table = document.createElement("table");
      const tr = document.createElement("tr");
      const thName = document.createElement("th");
      const thLastName = document.createElement("th");
      const thAge = document.createElement("th");
      const thEmail = document.createElement("th");
      const thPhone = document.createElement("th");

      thName.textContent = "Nombre";
      thLastName.textContent = "Apellido";
      thAge.textContent = "Edad";
      thEmail.textContent = "Email";
      thPhone.textContent = "Telefono";

      table.append(tr);

      tr.appendChild(thName);
      tr.appendChild(thLastName);
      tr.appendChild(thAge);
      tr.appendChild(thEmail);
      tr.appendChild(thPhone);

      //Evento del click en los titulos
      tr.addEventListener("click", clickTitulos, false);

      container.append(table);

      data.forEach((dato) => {
        const tr = document.createElement("tr");
        const tdName = document.createElement("td");
        const tdLastName = document.createElement("td");
        const tdAge = document.createElement("td");
        const tdEmail = document.createElement("td");
        const tdPhone = document.createElement("td");

        tdName.textContent = dato.nombre;
        tdLastName.textContent = dato.apellidos;
        tdAge.textContent = dato.edad;
        tdEmail.textContent = dato.email;
        tdPhone.textContent = dato.telefono;

        tr.appendChild(tdName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdAge);
        tr.appendChild(tdEmail);
        tr.appendChild(tdPhone);

        table.appendChild(tr);
      });
    }

    dupicarData();
    llenartabla(data);
  });
};
