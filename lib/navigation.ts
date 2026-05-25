export function sectionHref(hash: string, onHome = false): string {
  if (hash.startsWith("#")) {
    return onHome ? hash : `/${hash}`;
  }
  return hash;
}
