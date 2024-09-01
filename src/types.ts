

/**
 * Defines the available credential options for making API requests.
 * @property {string} "omit" -
 * @property {string} "same-origin" -
 * @property {string} "include" -
 */

export enum Credentials {
  Omit = "omit",
  SameOrigin = "same-origin",
  Include = "include",
}

/**
 * Defines the options for configuring a fuzzy search operation.
 * @property {number} [threshold]  - Default 0.6, The minimum score threshold for a result to be included.
 * @property {number} [maxResults] - Default 10, The maximum number of results to return.
 * @property {boolean} [ignoreCase] -  Default false, Whether to ignore case sensitivity when matching.
 * @property {boolean} [ignoreDiacritics] - Default false, Whether to ignore diacritical marks when matching.
 * @property {boolean} [ignorePunctuation] - Default false, Whether to ignore punctuation when matching.
 * @property {boolean} [ignoreWhitespace] - Default false, Whether to ignore whitespace when matching.
 * @property {boolean} [ignoreNumbers] -Default false, Whether to ignore numbers when matching.
 * @property {boolean} [ignoreSymbols] - Default false, Whether to ignore symbols when matching.
 * @property {boolean} [ignoreAccents] - Default false, Whether to ignore accents when matching.
 * @property {boolean} [ignoreCaseSensitive] - Default false, Whether to ignore case sensitivity when matching.
 * @property {boolean} [ignoreDiacriticSensitive] - Default false, Whether to ignore diacritical marks when matching.
 * @property {boolean} [ignorePunctuationSensitive] - Default false, Whether to ignore punctuation when matching.
 * @property {boolean} [ignoreWhitespaceSensitive] - Default false, Whether to ignore whitespace when matching.
 * @property {boolean} [ignoreNumbersSensitive] - Default false, Whether to ignore numbers when matching.
 * @property {boolean} [ignoreSymbolsSensitive] - Default false, Whether to ignore symbols when matching.
 * @property {boolean} [ignoreAccentsSensitive] - Default false, Whether to ignore accents when matching.
 * @property {boolean} [ignoreCaseSensitiveSensitive] - Default false, Whether to ignore case sensitivity when matching.
 * @property {boolean} [ignoreDiacriticSensitiveSensitive] - Default false, Whether to ignore diacritical marks when matching.
 * @property {boolean} [ignorePunctuationSensitiveSensitive] - Default false, Whether to ignore punctuation when matching.
 * @property {boolean} [ignoreWhitespaceSensitiveSensitive] - Default false, Whether to ignore whitespace when matching.
 * @property {boolean} [ignoreNumbersSensitiveSensitive] - Default false, Whether to ignore numbers when matching.
 * @property {boolean} [ignoreSymbolsSensitiveSensitive] - Default false, Whether to ignore symbols when matching.
 * @property {boolean} [ignoreAccentsSensitiveSensitive] - Default false, Whether to ignore accents when matching.
 * @property {boolean} [ignoreCaseSensitiveSensitiveSensitive] - Default false, Whether to ignore case sensitivity when matching.
 * @property {boolean} [ignoreDiacriticSensitiveSensitiveSensitive] - Default false, Whether to ignore diacritical marks when matching.
 
**/

export interface FuzzySearchOptions {
  threshold?: number;
  maxResults?: number;
  ignoreCase?: boolean;
  ignoreDiacritics?: boolean;
  ignorePunctuation?: boolean;
  ignoreWhitespace?: boolean;
  ignoreNumbers?: boolean;
  ignoreSymbols?: boolean;
  ignoreAccents?: boolean;
  ignoreCaseSensitive?: boolean;
  ignoreDiacriticSensitive?: boolean;
  ignorePunctuationSensitive?: boolean;
  ignoreWhitespaceSensitive?: boolean;
  ignoreNumbersSensitive?: boolean;
  ignoreSymbolsSensitive?: boolean;
  ignoreAccentsSensitive?: boolean;
  ignoreCaseSensitiveSensitive?: boolean;
  ignoreDiacriticSensitiveSensitive?: boolean;
  ignorePunctuationSensitiveSensitive?: boolean;
  ignoreWhitespaceSensitiveSensitive?: boolean;
  ignoreNumbersSensitiveSensitive?: boolean;
  ignoreSymbolsSensitiveSensitive?: boolean;
  ignoreAccentsSensitiveSensitive?: boolean;
  ignoreCaseSensitiveSensitiveSensitive?: boolean;
  ignoreDiacriticSensitiveSensitiveSensitive?: boolean;
}

/**
 * Represents an array of items of type `T`.
 */
export type Data<T> = T[];

/**
 * Represents an array of keys of type `T`.
 */
export type Fields<T> = (keyof T)[];

/**
 * Represents the configuration options for an API request.
 *
 * @property {boolean} [useApi] - Whether to use the API or not.
 * @property {string} url - The URL for the HTTP request.
 * @property {string} token - The authentication token.
 * @property {Credentials} [credentials] - The credentials for the request.
 * @property {Record<string, string>} [headers] - The optional headers for the request.
 * @property {boolean} [keepalive] - Whether to keep the connection alive.
 * @property {any} [body] - The optional request body.
 * @property {Record<string, string>} [params] - The optional query parameters.
 *
 */
export interface ApiConfig {
  useApi?: boolean;
  url: string; // The URL for the HTTP request
  token?: any;
  credentials?: Credentials;
  headers?: Record<string, any>; // Optional headers as key-value pairs
  keepalive?: boolean;
  body?: any; // Optional request body (can be any type; consider using specific types if known)
  params?: Record<string, any>; // Optional query parameters as key-value pairs
}

/**
 * Represents a search query.
 *
 * @property {string} query - The search query string.
 */
export interface Query {
  query: string;
}

/**
 * Represents the result of a fuzzy search, including the matched items and their corresponding scores.
 *
 * @template T - The type of the items in the search result.
 * @property {T[]} item - The array of items that matched the search query.
 * @property {number} score - The score indicating the relevance of the search result.
 */
export interface FuzzySearchResult<T> {
  item: T[];
  score: number;
}
