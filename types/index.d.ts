export type SvgProp = {
  el: string | typeof import("vue");
};

export type PartnerLogos = {
  item?: {
    css: string;
  };
  svg?: Pick<SvgProp, "el">;
  link?: {
    url: string;
    title?: string;
  };
};

export type GlobalFontConfigPropNames =
  | "font-family-base"
  | "heading-font-family";

export type FontSettings<T extends string> = {
  fonts: {
    [K in T]: {
      name: string;
    };
  };
};

export type GlobalFontProps = FontSettings<GlobalFontConfigPropNames>;

export type FontListSystem =
  | "sans-system-ui"
  | "sans-humanist"
  | "sans-geometric-humanist"
  | "sans-classical-humanist"
  | "sans-neo-grotesque"
  | "sans-industrial"
  | "sans-rounded-sans"
  | "serif-transitional"
  | "serif-old-style"
  | "serif-slab-serif"
  | "serif-antique"
  | "serif-didone"
  | "monospace-slab-serif"
  | "monospace-code"
  | "cursive-handwritten";

export type GoogleFontList = "sans-montserrat";

export type PropName<T> = Record<"name", T>;

export type SystemFontNames = PropName<FontListSystem>;
export type GoogleFontNames = PropName<GoogleFontList>;

export type SizeConfigKeys =
  | "text-size-increment"
  | "font-size-base-px"
  | "text-frame-ratio"
  | "text-frame-y"
  | "space-increment"
  | "unit-max"
  | "unit-fluid"
  | "radius"
  | "line-height-fixed"
  | "line-height-relative";

export type ValueUnitObj = {
  value: string;
  unit: string;
};

export type ValueUnitSettings<T extends string> = {
  [key in T]: ValueUnitObj;
};

export type SizeProps = ValueUnitSettings<SizeConfigKeys>;

export type ColorConfigKeys =
  | "primary-h"
  | "primary-c"
  | "primary-l"
  | "secondary-h"
  | "secondary-c"
  | "secondary-l"
  | "accent-h"
  | "accent-c"
  | "accent-l";

export type ColorProps = ValueUnitSettings<ColorConfigKeys>;

export type ColorNames = PropName<ColorConfigKeys>;

export type SitePropSettings = GlobalFontProps & {
  size: SizeProps;
  color: ColorProps;
};

export type ComponentVariationsObj<ComponentVariationNames> = {
  name: ComponentVariationNames;
  component: ReturnType<typeof defineAsyncComponent>;
};

export type SurfaceThemeTypes =
  | "light"
  | "eggshell"
  | "dark"
  | "primary"
  | "primary-light"
  | "primary-dark"
  | "secondary"
  | "secondary-light"
  | "secondary-dark"
  | "accent"
  | "accent-light"
  | "accent-dark";

export type SurfaceThemeSetting = {
  surfaceTheme?: SurfaceThemeTypes | undefined;
};

export type SectionComponentSettings = SurfaceThemeSetting & {
  id?: string;
  container?: boolean;
  spanFull?: boolean;
};

///// Updated for prismic

