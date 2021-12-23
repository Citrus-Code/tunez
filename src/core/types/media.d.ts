import {
  AllEntities,
  AudioBookEntity,
  EbookEntity,
  MediaTypes,
  MovieEntity,
  MusicEntity,
  PodcastEntity,
  ShortFilmEntity,
  SoftwareEntity,
  TvShowEntity,
} from "@core/enum";

type Movie = MovieEntity.MOVIE | MovieEntity.MOVIE_ARTIST;
type Podcast = PodcastEntity.PODCAST | PodcastEntity.PODCAST_AUTH;

type Music =
  | MusicEntity.ALBUM
  | MusicEntity.MIX
  | MusicEntity.MUSIC_ARTIST
  | MusicEntity.MUSIC_TRACK
  | MusicEntity.MUSIC_VIDEO
  | MusicEntity.SONG;

type AudioBook = AudioBookEntity.AUDIO_BOOK | AudioBookEntity.AUDIO_BOOK_AUTHOR;
type ShortFilm = ShortFilmEntity.SHORT_FILM | ShortFilmEntity.SHORT_FILM_ARTIST;
type TvShow = TvShowEntity.TV_EPISODE | TvShowEntity.TV_SEASON;
type Ebook = EbookEntity.EBOOK;
type Software =
  | SoftwareEntity.IPAD_SOFTWARE
  | SoftwareEntity.MAC_SOFTWARE
  | SoftwareEntity.SOFTWARE;

type All =
  | AllEntities.ALBUM
  | AllEntities.ALL_ARTIST
  | AllEntities.ALL_TRACK
  | AllEntities.AUDIO_BOOK
  | AllEntities.MIX
  | AllEntities.MOVIE
  | AllEntities.MUSIC_VIDEO
  | AllEntities.PODCAST
  | AllEntities.TV_SEASON;

type MediaType = MediaTypes;

export {
  All,
  Movie,
  Music,
  Podcast,
  AudioBook,
  ShortFilm,
  TvShow,
  Ebook,
  Software,
  MediaType,
};
