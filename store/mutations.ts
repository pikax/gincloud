export enum MANGA {
  REQUEST_RECENT = 'REQUEST_RECENT',
  RECEIVED_RECENT = 'RECEIVED_RECENT',


  REQUEST_MY = 'REQUEST_MY',
  RECEIVED_MY = 'RECEIVED_MY',


  RECEIVED_INFO = "RECEIVED_INFO",
  RECEIVED_INFO_ERROR = "RECEIVED_INFO_ERROR",

  REQUEST_CHAPTERS = 'REQUEST_CHAPTERS',
  RECEIVED_CHAPTERS = 'RECEIVED_CHAPTERS',
  REQUEST_CHAPTERS_ERROR = 'REQUEST_CHAPTERS_ERROR',



  REQUEST_MANGA_SEARCH = 'REQUEST_MANGA_SEARCH',
  RECEIVED_MANGA_SEARCH = 'RECEIVED_MANGA_SEARCH',
  FAILED_MANGA_SEARCH = 'FAILED_MANGA_SEARCH',


  REQUEST_CHAPTER_IMAGES = 'REQUEST_CHAPTER_IMAGES',
  RECEIVED_CHAPTER_IMAGES = 'RECEIVED_CHAPTER_IMAGES',
  REQUEST_CHAPTER_IMAGES_ERROR = 'REQUEST_CHAPTER_IMAGES_ERROR',

}


export enum USER {
  REQUEST_USER_INFO = 'REQUEST_USER_INFO',
  RECEIVED_USER_INFO = 'RECEIVED_USER_INFO',


  SET_FAVORITE = 'SET_FAVORITE',
  UNSET_FAVORITE = 'UNSET_FAVORITE',


  POPULATE_FAVORITE = 'POPULATE_FAVORITE',


  SET_USER = 'SET_USER',
  SET_TOKEN = 'SET_TOKEN',
}


export enum APP_INTERNAL {
  UPDATE_CONNECTIVITY = 'UPDATE_CONNECTIVITY',
  USE_DARK_THEME = 'USE_DARK_THEME',


  INITIALIZING = 'INITIALIZING',
  INITIALIZED = 'INITIALIZED',

}
