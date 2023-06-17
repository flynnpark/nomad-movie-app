import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { makeBackdropUrl } from '../../api';
import useMovieDetailData from '../../hooks/useMovieDetailData';
import {
  Backdrop,
  BackdropArea,
  DetailArea,
  Information,
  ItemName,
  Modal,
  Overview,
  Title,
} from './styled';

function MovieDetail() {
  const movieDetail = useMovieDetailData() as GetMovieDetailResponse;
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleModalClose = () => {
    navigate(-1);
  };

  const backdropUrl = makeBackdropUrl(movieDetail?.backdrop_path);

  return (
    <Backdrop onClick={handleModalClose}>
      <Modal>
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
    </Backdrop>
  );
}

export default MovieDetail;
