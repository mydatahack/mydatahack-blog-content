const getAnimal = (sound) => {
  switch(sound) {
    case 'meow':
      return 'Cat';
    case 'woof':
      return 'Dog';
    case 'pawoo':
      return 'Elephant';
    default:
      return 'Human';
  }
};

const animalDataProvider = [
  {
    input: 'meow',
    expectedOutput: 'Cat'
  },
  {
    input: 'woof',
    expectedOutput: 'Dog'
  },
  {
    input: 'pawoo',
    expectedOutput: 'Elephant'
  },
  {
    input: 'whatever',
    expectedOutput: 'Human'
  },
];

describe.each(animalDataProvider)('getAnimal', (data) => {
  it(`should return correct animal with input '${data.input}'`, () => {
    console.log(data.input);
    const animal = getAnimal(data.input);
    expect(animal).toEqual(data.expectedOutput);
  } )
});
