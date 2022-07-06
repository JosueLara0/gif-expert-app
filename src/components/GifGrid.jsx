//* libraries
import PropTypes from "prop-types";
//* components
import { GifItem } from "./GifItem";
//* hooks
import { useFetchGifs } from "../hooks/useFetchGifs";

//------------------------------------------------------------------------------
export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

//? Props validations
GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
