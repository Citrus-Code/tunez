import { MediaTypes } from "@core/enum";
import {
  All,
  AudioBook,
  Ebook,
  Explicit,
  Lang,
  MediaType,
  Movie,
  Music,
  Podcast,
  ShortFilm,
  Software,
  TvShow,
} from "@core/types";

class PageSearch {
  paging: Paging = new Paging();
  params: Params = new Params();
}

class Paging {
  limit: number;
  term: string;

  constructor() {
    this.limit = 20;
    this.term = "";
  }
}

class Params {
  country: string | undefined; //Todo alpha 2 country code
  media: MediaType;
  entity:
    | Movie
    | Podcast
    | Music
    | AudioBook
    | ShortFilm
    | TvShow
    | Software
    | Ebook
    | All
    | undefined;
  lang: Lang | undefined;
  explicit: Explicit | undefined;

  constructor() {
    this.media = MediaTypes.ALL;
  }
}

export { PageSearch, Paging, Params };
