/**
 * Counts how many of items in the array the predicate returns true.
 *
 * @param {any[]} array
 * @param {Function} predicate
 */
import echo from './echo';

export default function countInArray(array, predicate = echo) {
  if (!Array.isArray(array)) {
    return 0;
  }
  let count = 0;
  array.forEach(item => predicate(item) && ++count);
  return count;
}
