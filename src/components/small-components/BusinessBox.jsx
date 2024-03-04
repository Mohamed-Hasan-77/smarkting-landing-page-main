import PropTypes from "prop-types";

function BusinessBox({src, title, subtitle}) {
  return (
    <div className="boxes_container_box">
      <div className="box_image_container">
        <img
          src={src}
          alt="Not Found"
          loading="lazy"
        />
      </div>
      <h4>{title}</h4>
      <p>
        {subtitle}
      </p>
    </div>
  );
}

export default BusinessBox;

BusinessBox.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};