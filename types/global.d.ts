export { CssProp };

declare global {
  type CssProp = string | string[] | Record<string, boolean | undefined>;
}
