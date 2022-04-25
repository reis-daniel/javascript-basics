let headline = document.querySelector("h1");

headline.style.color = "blue";

function introJS() {
  // Output
  console.log("Works!");
  console.log(3 + 3);
  console.log(3 - 3);
  console.log(3 * 3);
  console.log(3 / 3);
  console.log(7 % 3);

  // Variables
  // let & const

  // Datatypes
  // string, number and boolean

  // Declaration and assigment of a variable
  let vorName = "Freddy";
  let nachName = "der Schöne";
  const number = 33;

  // Output of variable
  console.log(vorName);
  console.log(vorName + " " + nachName);
  console.log(`${vorName} ${nachName}`);

  // Batman is the Dark Knight of Gotham City

  let hero = "Batman";
  let city = "Gotham";
  let color = "Dark";

  console.log(`${hero} is the ${color} Knight of ${city}.`);
}
// Aufgabe 1_1
function aufgabe1_1() {
  a = 12;
  b = a * 3;
  console.log(b);
  document.write(b);
  console.log(document.URL);
  console.log("Hello World!");
  console.log("Anton");
  let nameFirst = "Anton";
  console.log(nameFirst);
  let age = 28;
  console.log(age);
  let job = "Trainer";
  console.log(job);
  let married = true;
  console.log(married);

  console.log(
    `${nameFirst} ist ${age} Jahre alt, von Beruf ${job} und ist verheiratet: ${married}.`
  );
}

// Aufgabe 1_5

function aufgabe1_5() {
  let carName = "BMW";
  console.log(carName);
  let x = 150;
  console.log(x);
  let y = 50;
  console.log(y);
  let z = x + y;
  console.log(z);

  let firstName = "John",
    lastName = "Doe",
    alter = 35;

  console.log(`${firstName} ${lastName} ${alter}`);
}

// Aufgabe 1_6

function aufgabe1_6() {
  var z = 34;
  z = 67;
  console.log(z);
  let x = 34;
  x = 67;
  console.log(z);
  //   const y = 34;
  //   y = 67;
  //   console.log(z);
  console.log(
    `Bei einer const-variable kann der Wert nicht durch eine einfache Wertzuweisung geändert werden!`
  );
}

introJS();
aufgabe1_1();
aufgabe1_5();
aufgabe1_6();
