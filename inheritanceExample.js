const animal = {
  sit: () => {
    console.log("It can sit.");
  },
  run: () => {
    console.log("It can run.");
  },
};

const dog = Object.create(animal);

dog.bark = () => {
  console.log("It can bark");
};

dog.bark();
dog.run();

const husky = Object.create(dog);

husky.blueEyes = () => {
  console.log("It has blue eyes.");
};

husky.blueEyes();
