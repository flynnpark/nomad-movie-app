import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { makeImagePath } from '../../api';

interface Props {
  movie: Movie;
}

function MovieCard({ movie }: Props) {
  const posterUrl = makeImagePath(movie.poster_path);
  return (
    <Card>
      <Link to={`/movies/${movie.id}`}>
        <Poster alt={movie.title} src={posterUrl} />
        <Title>{movie.title}</Title>
      </Link>
    </Card>
  );
}

export default MovieCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Poster = styled.img`
  border-radius: 12px;
  max-width: 100%;
`;

const Title = styled.h1`
  margin-top: 12px;
  text-align: center;
`;
