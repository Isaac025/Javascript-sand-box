const cars = [
  { name: "Lamborghini Huracan", rentPrice: 100, category: "sport" },
  { name: "Range Rover Velar", rentPrice: 70, category: "suv" },
  { name: "Audi R8", rentPrice: 120, category: "sport" },
  { name: "Mustang", rentPrice: 80, category: "vintage" },
  { name: "Porche 911", rentPrice: 120, category: "sport" },
  { name: "Chevrolet Camaro 1970", rentPrice: 80, category: "vintage" },
  { name: "Rolls Royce", rentPrice: 70, category: "sport" },
  { name: "Tesla Model X", rentPrice: 120, category: "suv" },
  { name: "BMW X5", rentPrice: 40, category: "suv" },
  { name: "Volkswagen Beetle 1972", rentPrice: 30, category: "vintage" },
];

cars[1];
cars[0].name;

const vintageCars = cars.filter((car) => car.category === "vintage");
console.log(vintageCars);

let totalrentPrice = cars.reduce((acc, car) => acc + car.rentPrice, 0);

const carsMorethan100 = cars.every((c) => c.rentPrice > 100);

let myName = "Kelvin";
// == ===

let data = {
  success: true,
  message: "Product in Stock",
  products: ["Glasses", "Lipssticks", "Shoes"],
};

console.log(data.products[2]);

const meals = [
  {
    meal: {
      name: "Sushi",
      price: 45,
      category: "Side",
    },
  },
];

console.log();

const airline = {
  types: [
    {
      name: {
        brand: "Air Peace",
        brand2: "Green Africa",
        brand3: "Max Air",
        brand4: "Emirates",
      },
    },
  ],
};
console.log(airline.types[0].name.brand3);
