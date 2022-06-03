const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, `Name: ${props.name}`),
    React.createElement("h2", {}, `Animal: ${props.animal}`),
    React.createElement("h2", {}, `Breed: ${props.breed}`),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Evee",
      animal: "Dog",
      breed: "Cocker Spaniel",
    }),
    React.createElement(Pet, {
      name: "Malysh",
      animal: "Cat",
      breed: "Common Cat",
    }),
    React.createElement(Pet, {
      name: "Flyer",
      animal: "Bird",
      breed: "Parrot",
    })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
