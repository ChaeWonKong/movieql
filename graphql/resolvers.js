const Leon = {
  name: "Leon",
  age: 18,
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => Leon
  }
};

export default resolvers;
