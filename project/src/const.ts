export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unkown = 'UNKOWM',
}

export const RATING_LEVELS = ['terribly', 'badly', 'not bad', 'good', 'perfect'];
