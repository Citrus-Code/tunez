type WrapperType = "track" | "collection" | "artist";

type Explictness = "explicit" | "cleaned" | "notExplicit";

type Kind =
  | "book"
  | "album"
  | "coached-audio"
  | "feature-movie"
  | "interactive-booklet"
  | "music-video"
  | "pdf"
  | "podcast"
  | "podcast-episode"
  | "software-package"
  | "song"
  | "tv-episode"
  | "artist";

type url = string;

export { WrapperType, Explictness, Kind, url };
