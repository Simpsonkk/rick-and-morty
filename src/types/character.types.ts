export type Characters = {
  info: CharactersInfo;
  results: CharacterDescription[];
};

export type CharactersInfo = {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
};

export type CharacterDescription = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};
