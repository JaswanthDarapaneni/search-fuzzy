import { FuzzySearchOptions } from "../types";

const defaultOptions: FuzzySearchOptions = {
  threshold: 0.5,
  maxResults: 10,
  ignoreCase: false,
  ignoreDiacritics: false,
  ignorePunctuation: false,
  ignoreWhitespace: false,
  ignoreNumbers: false,
  ignoreSymbols: false,
  ignoreAccents: false,
  ignoreCaseSensitive: false,
  ignoreDiacriticSensitive: false,
  ignorePunctuationSensitive: false,
  ignoreWhitespaceSensitive: false,
  ignoreNumbersSensitive: false,
  ignoreSymbolsSensitive: false,
  ignoreAccentsSensitive: false,
  ignoreCaseSensitiveSensitive: false,
  ignoreDiacriticSensitiveSensitive: false,
  ignorePunctuationSensitiveSensitive: false,
  ignoreWhitespaceSensitiveSensitive: false,
  ignoreNumbersSensitiveSensitive: false,
  ignoreSymbolsSensitiveSensitive: false,
  ignoreAccentsSensitiveSensitive: false,
  ignoreCaseSensitiveSensitiveSensitive: false,
  ignoreDiacriticSensitiveSensitiveSensitive: false,
};

/**
 * Merges the provided user options with the default options, returning a new options object.
 *
 * @param userOptions - Optional user-provided options to merge with the defaults.
 * @returns The merged options object.
 */
function mergeOptions(
  userOptions?: FuzzySearchOptions
): FuzzySearchOptions {
  return { ...defaultOptions, ...userOptions };
}

// Normalize and preprocess text based on provided options
/**
 * Preprocesses the given text based on the provided options.
 *
 * @param text - The text to preprocess.
 * @param inputOptions - Optional options to customize the preprocessing behavior.
 * @returns The preprocessed text.
 */
function preprocessText<T>(
  text: string,
  inputOptions?: FuzzySearchOptions
): string {
  if (!text) return "";
  const options = mergeOptions(inputOptions);
  let processedText = text;

  if (options.ignoreCase || options.ignoreCaseSensitive) {
    processedText = processedText.toLowerCase();
  }

  if (options.ignoreDiacritics || options.ignoreDiacriticSensitive) {
    // Remove diacritics
    processedText = processedText
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  if (options.ignorePunctuation || options.ignorePunctuationSensitive) {
    // Remove punctuation
    processedText = processedText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
  }

  if (options.ignoreWhitespace || options.ignoreWhitespaceSensitive) {
    // Remove whitespace
    processedText = processedText.replace(/\s+/g, " ").trim();
  }

  if (options.ignoreNumbers || options.ignoreNumbersSensitive) {
    // Remove numbers
    processedText = processedText.replace(/\d+/g, "");
  }

  if (options.ignoreSymbols || options.ignoreSymbolsSensitive) {
    // Remove symbols
    processedText = processedText.replace(/[\W_]+/g, "");
  }

  if (options.ignoreAccents || options.ignoreAccentsSensitive) {
    // Remove accents
    processedText = processedText
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  return processedText;
}

export default preprocessText;

