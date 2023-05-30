import { debounce } from 'lodash';
import { useState,  useMemo } from 'react';

const DebouncedInput = ({ value, debouncedFunc }) => {
  const debouncedAction = useMemo(() => {
    return debounce(debouncedFunc, 1000);
  }, [debouncedFunc]);

  const [query, setQuery] = useState([value]);

  const onChange = e => {
    const query = e.target.value;
    setQuery(query);
    debouncedAction(query);
  };

  console.log('dbInput');
  return <input type="text" value={query} onChange={onChange} />;
};

export default DebouncedInput;

