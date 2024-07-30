export default function updateUniqueItems(mapped) {
  if (!(mapped instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of mapped) {
    if (value === 1) {
      mapped.set(key, 100);
    }
  }
  return mapped;
}
