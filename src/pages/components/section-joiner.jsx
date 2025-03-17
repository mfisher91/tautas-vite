import PropTypes from "prop-types";

const SectionJoiner = ({ color }) => {
  return (
    <div className={`w-full text-center text-${color}`}>
      <div
        className={`border-1 border-solid border-${color} h-15 w-0 mx-auto my-4`}
      />
    </div>
  );
};

SectionJoiner.propTypes = {
  color: PropTypes.string.isRequired,
};

export default SectionJoiner;
