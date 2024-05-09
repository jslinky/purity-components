import globalFontProps from "../data/config/global-font-props";
import sizeProps from "../data/config/size-props";
import colorProps from "../data/config/color-props";

export const useSiteSettings = () => {
  return useState("design-tokens", () => ({
    ...globalFontProps,
    size: {
      ...sizeProps,
    },
    color: {
      ...colorProps
    }
  }));
};
