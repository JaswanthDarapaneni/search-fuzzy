import { ApiConfig, Data, Fields, FuzzySearchOptions, Query } from "./types";
import filterData from "./utils/filter/filter.data";
import preprocessText from "./utils/textUtils";

// Fuzzy Search Function

/**
 * Performs a fuzzy search on a dataset, potentially fetching data from an API if configured.
 * The search is based on a given query and can be customized with various options.
 * 
 * @template T - The type of objects in the dataset.
 * 
 * @param data - The local dataset to search through. If `apiConfig` is provided, this will be used as a fallback.
 * @param fields - The fields of each item in the dataset to be included in the search. If empty, all fields will be searched.
 * @param query - The search query to match against the dataset. This contains the search string and any additional configuration.
 * @param apiConfig - Optional configuration for fetching data from an API. Includes details such as URL, method, headers, and parameters.
 * @param options - Optional settings for the fuzzy search, such as maximum results or any other custom options.
 * 
 * @returns A Promise that resolves to an array of objects from the dataset that match the query, sorted by relevance.
 * 
 * @throws Error if there is an issue with fetching data from the API or if data is empty and no API is provided.
 */
export async function fuzzySearch<T extends object>(
  data: Data<T>,
  fields: Fields<T>,
  query: Query,
  apiConfig?: ApiConfig,
  options?: FuzzySearchOptions
): Promise<T[]> {
  let dataToSearch = data;
  let searchFields = fields;
  
  const text = preprocessText(query.query, options);

  if (apiConfig?.useApi) {
    try {
      const url = new URL(apiConfig.url);
      if (apiConfig.params) {
        Object.keys(apiConfig.params || {}).forEach((key) =>
          url.searchParams.append(key, apiConfig.params?.[key] || "")
        );
      }
      const response = await fetch(url.toString(), {
        method: "GET",
        body: apiConfig.body ? JSON.stringify(apiConfig.body) : undefined,
        credentials: apiConfig.credentials || undefined,
        headers: apiConfig.headers,
        keepalive: apiConfig.keepalive || false,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const apiData = await response.json();
      dataToSearch = apiData;

      // Extract fields from API data if not provided
      if (!searchFields && Array.isArray(apiData) && apiData.length > 0) {
        searchFields = Object.keys(apiData[0]) as Array<keyof T>;
      }
    } catch (error) {
      console.error("Error fetching data from API:", error);
      return [];
    }

    // Default field extraction from local data if fields are still undefined
    if (
      !searchFields &&
      Array.isArray(dataToSearch) &&
      dataToSearch.length > 0
    ) {
      searchFields = Object.keys(dataToSearch[0]) as Array<keyof T>;
    }

    const filteredData = filterData(
      dataToSearch,
      text,
      searchFields,
      options?.maxResults
    );
    return filteredData.map(item => item.item);
  } else {
    if (data.length === 0) {
      throw new Error("Data is empty");
    }
    const filteredData = filterData<T>(data, text, fields, options?.maxResults);
    return  filteredData.map(item => item.item);
  }
}
