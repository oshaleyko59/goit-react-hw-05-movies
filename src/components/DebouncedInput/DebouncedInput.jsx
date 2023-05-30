import { debounce } from 'lodash';
import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Input } from './styled';

const DebouncedInput = ({ value='', debouncedFunc }) => {
  const debouncedAction = useMemo(() => {
    return debounce(debouncedFunc, 500);
  }, [debouncedFunc]);

  const [query, setQuery] = useState([value]);

  const onChange = e => {
    const query = e.target.value;
    setQuery(query);
    debouncedAction(query);
  };

  return <Input type="text" value={query} onChange={onChange} />;
};

DebouncedInput.propTypes = {
  value: PropTypes.string,
  debouncedFunc: PropTypes.func
};

export default DebouncedInput;

