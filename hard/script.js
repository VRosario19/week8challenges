const tomHeight = 9;

const tomMass = 8;

const jerryHeight = 10;

const jerryMass = 45;

let tomBmi = tomMass / tomHeight ** 2;
let jerryBmi = jerryMass / jerryHeight ** 2;

if (tomBmi < jerryBmi) {
  console.log("Is Tom's BMI higher than Jerry's? False.");
}
