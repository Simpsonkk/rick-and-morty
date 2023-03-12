import './character-list.scss';

import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCharacters } from '../../store/api-actions';
import { loadCharacters } from '../../store/slices/character-slice/character-slice';
import {
  getCharacters,
  getCharactersInfo,
  getLoadedDataStatus,
  getTermSearch,
} from '../../store/slices/character-slice/selectors';
import CharacterCard from '../character-card/character-card';
import Loader from '../loader';

function CharacterList() {
  const charactersInfo = useAppSelector(getCharactersInfo);
  const characters = useAppSelector(getCharacters);
  const termSearch = useAppSelector(getTermSearch);
  const isDataLoaded = useAppSelector(getLoadedDataStatus);
  const dispatch = useAppDispatch();
  const [pageNumber, setpageNumber] = useState<number>(1);

  const hasMore = charactersInfo?.pages === pageNumber;
  const setNextPage = () => setpageNumber((prev) => prev + 1);

  useEffect(() => {
    dispatch(fetchCharacters({ termSearch, pageNumber }));
  }, [termSearch, pageNumber]);

  useEffect(() => {
    setpageNumber(1);
    dispatch(loadCharacters(null));
  }, [termSearch]);

  if (!isDataLoaded) {
    return <Loader />;
  }

  return (
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
