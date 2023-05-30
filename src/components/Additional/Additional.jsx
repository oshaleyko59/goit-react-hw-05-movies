import { StyledLink, FlexColumn } from 'common/styled';

const Additional = () => {
  return (
    <FlexColumn>
      <h4>Additional information</h4>
      <ul>
        <li>
          <StyledLink to="cast">Cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">Reviews</StyledLink>
        </li>
      </ul>
    </FlexColumn>
  );
};

export default Additional;
