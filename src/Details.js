import { useParams } from "react-router-dom";
import { Component } from "react";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { loading: true };
  // }

  state = { loading: true };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const data = await res.json();

    this.setState({ loading: false, ...data.pets[0] });
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading ...</h2>;
    }

    const { name, animal, breed, city, state, description, images } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} – ${breed} – ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();

  return (
    <ErrorBoundary>
      <Details params={params} />;
    </ErrorBoundary>
  );
};

export default WrappedDetails;
