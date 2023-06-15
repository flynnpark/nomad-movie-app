import useMovieDetailData from '../../hooks/useMovieDetailData';

function MovieDetail() {
  const movieDetail = useMovieDetailData();
  return <>{movieDetail?.title}</>;
}

export default MovieDetail;
