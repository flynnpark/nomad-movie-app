import { Link } from 'react-router-dom';

import { makeImageUrl } from '../../api';
import { Card, Poster, Title } from './styled';

interface Props {
  movie: Movie;
}

function MovieCard({ movie }: Props) {
  const posterUrl = makeImageUrl(movie.poster_path);

  return (
    <Card
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      layoutId={String(movie.id)}
    >
      <Link to={`/movies/${movie.id}`}>
        <Poster alt={movie.title} src={posterUrl} />
        <Title>{movie.title}</Title>
      </Link>
    </Card>
  );
}

export default MovieCard;
