export enum AppRoute {
  Characters = '/',
  CharacterDetails = '/:id',
  NotFound = '*',
}

export enum HttpCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

export enum APIRoute {
  Name = '/name',
  Page = '/page',
}

export enum NameSpace {
  Character = 'characterData',
  // User = 'userProcess'
}

export const characterDescription = ['Gender', 'Status', 'Specie', 'Origin', 'Type'];


// export enum AuthorizationStatus {
//   Auth = 'AUTH',
//   NoAuth = 'NO_AUTH',
//   Unknown = 'UNKNOWN'
// }

// export const INITIAL_MOVIE_AMOUNT = 8;

