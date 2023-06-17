import { useNavigate } from 'react-router-dom';

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

  const handleModalClose = () => {
    navigate(-1);
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
          <Information>
            {!!movieDetail.budget && (
              <>
                <ItemName>Budget:</ItemName> {movieDetail.budget}
              </>
            )}
          </Information>
          <Information>
            {!!movieDetail.revenue && (
              <>
                <ItemName>Revenue:</ItemName> {movieDetail.revenue}
              </>
            )}
          </Information>
          <Information>
            {!!movieDetail.runtime && (
              <>
                <ItemName>Runtime:</ItemName> {movieDetail.runtime}
              </>
            )}
          </Information>
          <Information>
            {!!movieDetail.runtime && (
              <>
                <ItemName>Rating:</ItemName> {movieDetail.runtime}
              </>
            )}
          </Information>
          <Information>
            {!!movieDetail.homepage && (
              <>
                <ItemName>Homepage:</ItemName> {movieDetail.homepage}
              </>
            )}
          </Information>
        </DetailArea>
      </Modal>
    </Container>
  );
}

export default MovieDetail;
