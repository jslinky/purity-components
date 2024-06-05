import CssCustomProperties from "css-custom-properties";

/**
 * A composable function that resolves class names based on the provided layout and icon size.
 * @template LayoutGridType - The type of layout grid.
 * @template IconSize - The type of icon size.
 * @returns An object containing two functions: `getGridLayoutType` and `getIconSize`.
 */
export default function usePrismicClassResolve<LayoutGridType, IconSize>(): {
  getGridLayoutType: (layout: LayoutGridType) => {
    gridLayout: string;
    columnCount: string | null;
  };
  getIconSize: (icon_size: IconSize) => Ref<string>;
} {
  /**
   * Resolves the grid layout class and column count based on the provided layout.
   * @param layout - The layout grid type.
   * @returns An object containing the resolved grid layout class and column count.
   */
  const getGridLayoutType = (layout: LayoutGridType) => {
    const GRIDCOLCOUNT = "layout-grid layout-grid--column-count [--layout-grid-auto-repeat:auto-fill]";

    let gridLayout = "flex-layout-grid";
    let columnCount = null;

    switch (layout) {
      case "grid":
        gridLayout = "layout-grid";
        break;
      case "grid-1-cols":
        gridLayout = GRIDCOLCOUNT;
        columnCount = "[--column-count:1]";
        break;
      case "grid-2-cols":
        gridLayout = GRIDCOLCOUNT;
        columnCount = "[--column-count:2]";
        break;
      case "grid-3-cols":
        gridLayout = GRIDCOLCOUNT;
        columnCount = "[--column-count:3]";
        break;
      case "grid-4-cols":
        gridLayout = GRIDCOLCOUNT;
        columnCount = "[--column-count:4]";
        break;
      case "grid-5-cols":
        gridLayout = GRIDCOLCOUNT;
        columnCount = "[--column-count:4]";
        break;
      case "grid-6-cols":
        gridLayout = GRIDCOLCOUNT;
        columnCount = "[--column-count:4]";
        break;
      default:
        break;
    }

    return {
      gridLayout,
      columnCount,
    };
  };

  /**
   * Resolves the icon size based on the provided icon size type.
   * @param icon_size - The icon size type.
   * @returns The resolved icon size.
   */
  const getIconSize = (icon_size: IconSize) => {
    const size = ref("1em");

    switch (icon_size) {
      case "xxs":
        size.value = "0.625em";
        break;
      case "xs":
        size.value = "0.75em";
        break;
      case "sm":
        size.value = "0.875em";
        break;
      case "md (default)":
        size.value = "1em";
        break;
      case "lg":
        size.value = "1.25em";
        break;
      case "xl":
        size.value = "1.5em";
        break;
      case "2xl":
        size.value = "1.75em";
        break;
      case "3xl":
        size.value = "2em";
        break;
      default:
        size.value = '1em';
        break;
    }    

    return size;
  };



  return {
    getGridLayoutType,
    getIconSize,
  };
}
