// Levenshtein Distance Function
/**
 * Computes the Levenshtein distance between two strings.
 * @param a The first string.
 * @param b The second string.
 * @returns The Levenshtein distance between `a` and `b`.
 */
function levenshtein(a: string, b: string): number {
  const alen = a.length;
  const blen = b.length;

  if (alen === 0) return blen;
  if (blen === 0) return alen;

  const dist: number[] = Array(blen + 1).fill(0).map((_, i) => i);

  for (let i = 0; i < alen; i++) {
    let prevDist = i;
    for (let j = 0; j < blen; j++) {
      const cost = a[i] === b[j] ? 0 : 1;
      const currentDist = Math.min(
        dist[j] + 1, // Deletion
        Math.min(prevDist + 1, // Insertion
          dist[j + 1] + cost) // Substitution
      );
      dist[j] = prevDist;
      prevDist = currentDist;
    }
    dist[blen] = prevDist;
  }
  
  return dist[blen];
}


function computeLevenshtein(a: string, b: string): number {
  return levenshtein(a, b);
}

export default computeLevenshtein;
