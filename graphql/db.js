export const people = [
  {
    id: "0",
    name: "Leon",
    age: 18,
    gender: "male"
  },
  {
    id: "1",
    name: "Sanga",
    age: "26",
    gender: "female"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => people.id === id);
  return filteredPeople[0];
};
