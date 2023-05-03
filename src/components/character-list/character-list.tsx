import './character-list.scss';

import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { useGetCharactersQuery } from '../../store/characters-api';
import { loadCharacters } from '../../store/slices/character-slice/character-slice';
import {
  getCharacters, getLoadedDataStatus, getTermSearch
} from '../../store/slices/character-slice/selectors';
import CharacterCard from '../character-card/character-card';
import Loader from '../loader';

function CharacterList() {
  const termSearch = useAppSelector(getTermSearch);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const { data, error } = useGetCharactersQuery({ termSearch, pageNumber });
  const characters = useAppSelector(getCharacters);
  const isDataLoaded = useAppSelector(getLoadedDataStatus);
  const dispatch = useAppDispatch();

  const hasMore = data?.info.pages === pageNumber;
  const setNextPage = () => setPageNumber((prev) => prev + 1);

  useEffect(() => {
    setPageNumber(1);
    dispatch(loadCharacters(null));
  }, [termSearch]);

  useEffect(() => {
    if (data) {
      dispatch(loadCharacters(data.results));
    }
  }, [data]);

  if (!isDataLoaded) {
    return <Loader />;
  }

  return error ? (
    <p className="characters__error">
      Error {'status' in error && error.status}, try another query
    </p>
  ) : (
    <InfiniteScroll
      next={setNextPage}
      hasMore={!hasMore}
      loader={<h4>Loading...</h4>}
      dataLength={characters.length}
      endMessage={<p>Yay! You have seen it all</p>}
    >
      <ul className="characters__group">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}

export default CharacterList;
