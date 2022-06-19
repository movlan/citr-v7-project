import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Animal } from "./APIResponsesTypes";

interface Props {
  name: string;
  animal: Animal;
  breed: string;
  images: string[];
  location: string;
  id: number;
}

const Pet: FunctionComponent<Props> = ({
  name,
  animal,
  breed,
  images,
  location,
  id,
}) => {
  let hero = "http://pet-images.dev-apis.com/pets/none.jpg";

  if (images.length) {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} – ${breed} – ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;