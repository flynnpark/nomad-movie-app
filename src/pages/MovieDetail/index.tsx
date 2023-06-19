import { useLocation, useNavigate } from 'react-router-dom';

import { makeBackdropUrl } from '../../api';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import useMovieDetailData from '../../hooks/useMovieDetailData';
import {
  Backdrop,
  BackdropArea,
  Container,
  DetailArea,
  Information,
  ItemName,
  Modal,
  Overview,
  Title,
} from './styled';

function MovieDetail() {
  useLockBodyScroll();

  const movieDetail = useMovieDetailData() as GetMovieDetailResponse;
  const navigate = useNavigate();
  const location = useLocation();

  const handleModalClose = () => {
    if (location.key === 'default') {
      navigate('/', { replace: true });
    } else {
      navigate(-1);
    }
  };

  const backdropUrl = makeBackdropUrl(movieDetail.backdrop_path);

  return (
    <Container>
      <Backdrop
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        onClick={handleModalClose}
      />
      <Modal layoutId={String(movieDetail.id)}>
        <BackdropArea backdropUrl={backdropUrl} />
        <DetailArea>
          <Title>{movieDetail.title}</Title>
          <Overview>{movieDetail.overview}</Overview>
          {[
            { key: 'Budget', value: movieDetail.budget },
            { key: 'Revenue', value: movieDetail.revenue },
            { key: 'Runtime', value: movieDetail.runtime },
            { key: 'Rating', value: movieDetail.vote_average },
            { key: 'Homepage', value: movieDetail.homepage },
          ].map(({ key, value }) => {
            return (
              value && (
                <Information key={key}>
                  <ItemName>{key}:</ItemName> {value}
                </Information>
              )
            );
          })}
        </DetailArea>
      </Modal>
    </Container>
  );
}

export default MovieDetail;
