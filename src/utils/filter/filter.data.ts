  import levenshtein from "../search/levenshtein.search"; // Import the Levenshtein function

/**
 * Filters an array of data items based on a search query and specified fields.
 *
 * @param data - The array of data items to filter.
 * @param query - The search query to match against the data items.
 * @param fields - The fields of the data items to search within.
 * @param limit - The maximum number of results to return (default is 10).
 * @returns An array of objects containing the filtered data items and their corresponding search scores.
 */
function filterData<T>(
    data: T[],
    query: string,
    fields: Array<keyof T>,
    limit: number = 10
  ): { item: T; score: number }[] {
    const queryParts = query.toLowerCase().split(" ");
  
    return data
      .map(item => {
        let totalScore = 0;
  
        if (fields.length === 0 || fields.length === 1) {
          // Handle case where fields are empty or single field: search through the entire item
          const itemString = JSON.stringify(item).toLowerCase();
          queryParts.forEach(queryPart => {
            const exactMatchScore = itemString.includes(queryPart) ? 0 : Number.MAX_VALUE;
            const levDistance = levenshtein(queryPart, itemString);
            const score = Math.min(exactMatchScore, levDistance);
            totalScore += score;
          });
        } else {
          fields.forEach(field => {
            if (item[field] !== undefined && item[field] !== null) {
              const fieldValue = item[field].toString().toLowerCase();
              queryParts.forEach(queryPart => {
                const exactMatchScore = fieldValue.includes(queryPart) ? 0 : Number.MAX_VALUE;
                const levDistance = levenshtein(queryPart, fieldValue);
                const score = Math.min(exactMatchScore, levDistance);
                totalScore += score;
              });
            }
          });
        }
  
        return { item, score: totalScore };
      })
      .sort((a, b) => a.score - b.score) // Sort by score (lower is better)
      .slice(0, limit); // Limit the results
  }

export default filterData;
