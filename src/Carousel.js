import React, { Component } from "react";

export default class Carousel extends Component {
  state = { active: 0 };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index
    })
  }

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, idx) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              key={photo}
              src={photo}
              data-index={idx}
              className={idx === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}
