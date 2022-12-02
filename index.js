let glassesData = [
  {
    id: "G1",
    src: "./imgs/g1.jpg",
    virtualImg: "./imgs/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./imgs/g2.jpg",
    virtualImg: "./imgs/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./imgs/g3.jpg",
    virtualImg: "./imgs/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./imgs/g4.jpg",
    virtualImg: "./imgs/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "./imgs/g5.jpg",
    virtualImg: "./imgs/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./imgs/g6.jpg",
    virtualImg: "./imgs/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./imgs/g7.jpg",
    virtualImg: "./imgs/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./imgs/g8.jpg",
    virtualImg: "./imgs/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./imgs/g9.jpg",
    virtualImg: "./imgs/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];

let tryGlasses = (id) => {
  glassesData.forEach((glasses) => {
    if (id === glasses.id) {
      document.getElementById("model-glasses").setAttribute("src", `${glasses.virtualImg}`);
      document.querySelector(".glasses-info").innerHTML = `
        <h4 class="mb-3 text-white">${glasses.name} - ${glasses.brand} (${glasses.color})</h4>
        <span class="px-2 py-1 bg-danger rounded-2 text-white">$${glasses.price}</span>
        <span class="ms-2 text-warning">Stocking</span>
        <p class="mt-2 text-white">${glasses.description}</p>
      `;
    }
  });
};

let tryOn = (boo) => {
  switch (boo) {
    case true:
      document.getElementById("model-glasses").style.visibility = "visible";
      document.querySelector(".glasses-info").style.visibility = "visible";
      break;
    case false:
      document.getElementById("model-glasses").style.visibility = "hidden";
      document.querySelector(".glasses-info").style.visibility = "hidden";
      break;
  }
};
