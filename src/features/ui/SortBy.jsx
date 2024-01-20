import PropTypes from "prop-types";
import Select from "./Select";
import { useSearchParams } from "react-router-dom";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || '';

  function handleChange(e) {
    const newSortBy = e.target.value;
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      newSearchParams.set('sortBy', newSortBy);
      return newSearchParams;
    });
  }

  return (
    <Select options={options} type="white" value={sortBy} onChange={handleChange} />
  );
}

SortBy.propTypes = {
  options: PropTypes.array.isRequired,
};

export default SortBy;
