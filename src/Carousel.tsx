import React, { Component, MouseEvent } from "react";

interface Props {
  images: string[];
}

export default class Carousel extends Component<Props> {
  state = { active: 0 };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (e: MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) return;

    if (e.target.dataset.index) {
      this.setState({
        active: +e.target.dataset.index,
      });
    }
  };

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
