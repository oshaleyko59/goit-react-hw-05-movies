import PropTypes from 'prop-types';
import Err from './styled';

const ERR_UNKNOWN = 'Something unexpected happed...';

const Error = ({msg}) => {
  return <Err>{msg || ERR_UNKNOWN}</Err>;
};

Err.propTypes = {
  msg: PropTypes.string,
};

export default Error;
