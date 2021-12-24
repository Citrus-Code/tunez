import { Explictness, Kind, url, WrapperType } from "@core/types";

interface ServerResponse<T> {
  resultCount: number;
  results: Array<T>;
}

/**
 * https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
 */
interface BasePayload {
  wrapperType: WrapperType;
  trackExplicitness?: Explictness;
  collectionExplicitness?: Explictness;
  artistExplicitness?: Explictness;
  kind: Kind;
  artistId: number;
  collectionId: number;
  trackId: number;
  trackName: string;
  artistName: string;
  collectionName: string;
  trackCensoredName: string;
  collectionCensoredName: string;
  artworkUrl100?: string;
  artworkUrl60: string;
  artistViewUrl: url;
  collectionViewUrl: url;
  trackViewUrl: url;
  previewUrl?: url;
  trackTimeMillis?: number;
  collectionPrice: number;
  trackPrice: number;
  releaseDate: Date;
  discCount?: number;
  discNumber?: number;
  trackCount?: number;
  trackNumber?: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  isStreamable?: boolean;
  shortDescription: string;
  longDescription: string;
}

export type { ServerResponse, BasePayload };
