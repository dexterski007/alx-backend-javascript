export default function hasValuesFromArray(set, array) {
  const subset = new Set(array);
  return subset.isSubsetOf(set);
}