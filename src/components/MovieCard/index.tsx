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
    >
      <Link to={`/movies/${movie.id}`}>
        <Poster
          alt={movie.title}
          layoutId={String(movie.id)}
          src={posterUrl}
          whileHover={{ scale: 1.1 }}
        />
        <Title>{movie.title}</Title>
      </Link>
    </Card>
  );
}

export default MovieCard;
