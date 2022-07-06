//* libraries
import PropTypes from "prop-types";

//------------------------------------------------------------------------------
export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} loading="lazy" />
      <p>{title}</p>
    </div>
  );
};

//? Props validations
GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
