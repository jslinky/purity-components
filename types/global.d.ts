import type * as prismic from "@prismicio/client";

declare global {
  type CssProp = string | string[] | Record<string, boolean | undefined>;
}

export type LayoutGrid =
  CardRowSliceDefaultPrimary["layout_grid_type"] extends prismic.SelectField<
    infer U
  >
    ? U
    : never;

export type IconSize =
  ButtonSliceDefaultPrimary["icon_size"] extends prismic.SelectField<infer U>
    ? U
    : never;

export type RowCardSettings = {
  column?: {
    imageRatio?: prismic.Content.CardRowSliceCardRow1Primary["column_image_ratio"];
    alignBodyContent?: prismic.Content.CardRowSliceCardRow1Primary["align_column_body_content"];
    justifyBodyContent?: prismic.Content.CardRowSliceCardRow1Primary["justify_column_body_content"];
    contentTextAlign?: prismic.Content.CardRowSliceCardRow1Primary["content_column_text_align"];
  };
  row?: {
    imageRatio?: prismic.Content.CardRowSliceCardRow1Primary["row_image_ratio"];
    alignBodyContent?: prismic.Content.CardRowSliceCardRow1Primary["align_row_body_content"];
    justifyBodyContent?: prismic.Content.CardRowSliceCardRow1Primary["justify_row_body_content"];
    contentTextAlign?: prismic.Content.CardRowSliceCardRow1Primary["content_row_text_align"];
  };
};

export type CardStyles = {
  card: CssProp;
  caption: CssProp;
  tagline: CssProp;
  title: CssProp;
  subtitle: CssProp;
  picture: CssProp;
  body: CssProp;
  content: CssProp;
  footer: CssProp;
};

export type CardPictureRatio =
  CardDocumentData["column_image_ratio"] extends prismic.SelectField<infer U>
    ? U
    :
        | "square"
        | "landscape"
        | "portrait"
        | "widescreen"
        | "ultrawide"
        | "golden"
        | "auto";

export type CardPicture = {
  src?: string;
  alt?: string;
  css?: CssProp;
  linkUrl?: CardDocumentData["image_link"] | string;
  ratio?: {
    column?: CardPictureRatio;
    row?: CardPictureRatio;
  };
};

export type CardSurfaceTheme =
  CardDocumentData["surface_background"] extends prismic.SelectField<infer U>
    ? U
    :
        | "light"
        | "dark"
        | "eggshell"
        | "primary"
        | "primary-light"
        | "primary-dark"
        | "secondary"
        | "secondary-light"
        | "secondary-dark"
        | "accent"
        | "accent-light"
        | "accent-dark";

export type CardImageMask =
  CardDocumentData["image_mask"] extends prismic.SelectField<infer U>
    ? U
    :
        | "linear-to-top"
        | "linear-to-right"
        | "linear-to-bottom"
        | "linear-to-left"
        | "none";

export type CardOverlayBackdropDirection =
  CardDocumentData["content_overlay_backdrop_dir_column"] extends prismic.SelectField<
    infer U
  >
    ? U
    :
        | "uniform"
        | "linear-to-top"
        | "linear-to-right"
        | "linear-to-bottom"
        | "linear-to-left";
("filled");

export type CardAlignItemsOption =
  CardDocumentData["align_column_body_content"] extends prismic.SelectField<
    infer U
  >
    ? U
    : "start" | "center" | "end";

export type CardJustifyContentOption =
  CardDocumentData["justify_column_body_content"] extends prismic.SelectField<
    infer U
  >
    ? U
    : "start" | "center" | "end";

export type CardTextAlignOption =
  CardDocumentData["content_column_text_align"] extends prismic.SelectField<
    infer U
  >
    ? U
    : "start" | "center" | "end";

export type CardPropsStyles = Partial<CardStyles>;

// export { CssProp };
