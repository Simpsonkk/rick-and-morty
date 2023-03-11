export enum AppRoute {
  Characters = '/',
  CharacterDetails = '/:characterId',
  NotFound = '*',
}

export enum HttpCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

export enum APIRoute {
  Name = 'name',
  Page = 'page',
}

export enum NameSpace {
  Character = 'characterData',
}
