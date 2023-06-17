import { Link } from 'react-router-dom';

import { makeImageUrl } from '../../api';
import useTypeFromQuery from '../../hooks/useTypeFromQuery';
import { Card, Poster, Title } from './styled';

interface Props {
  movie: Movie;
}

function MovieCard({ movie }: Props) {
  const type = useTypeFromQuery();

  const posterUrl = makeImageUrl(movie.poster_path);
  return (
    <Card>
      <Link to={`/movies/${movie.id}?type=${type}`}>
        <Poster alt={movie.title} src={posterUrl} />
        <Title>{movie.title}</Title>
      </Link>
    </Card>
  );
}

export default MovieCard;
