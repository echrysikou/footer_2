import type { TypographyVariantsOptions } from "@mui/material/styles";
import type { FontFamily } from "../types/config";

const secondaryFont = `'Open-Sans', sans-serif`;

const Typography = (fontFamily: FontFamily): TypographyVariantsOptions => ({
  fontFamily,
  h6: {
    fontSize: "20px",
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: "120%",
    fontFamily,
  },
  h5: {
    fontSize: "24px",
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: "110%",
    fontFamily,
  },
  h4: {
    fontSize: "30px",
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: "110%",
    fontFamily,
  },
  h3: {
    fontSize: "36px",
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: "110%",
    fontFamily,
  },
  h2: {
    fontSize: "48px",
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: "120%",
    fontFamily,
  },
  h1: {
    fontSize: "56px",
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: "130%",
    fontFamily,
  },
  subtitle1: {
    fontSize: "18px",
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: "130%",
    fontFamily: secondaryFont
  },
  subtitle2: {
    fontSize: "16px",
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: "130%",
    fontFamily,
  },
  caption: {
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.5px",
    lineHeight: "130%",
    fontFamily: secondaryFont,
  },
  overline: {
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "2px",
    lineHeight: "130%",
    fontFamily: secondaryFont,
  },
  body1: {
    fontSize: "16px",
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: "130%",
    fontFamily: secondaryFont,
  },
  body2: {
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: "140%",
    fontFamily: secondaryFont,
  },
  button: {
    textTransform: "none",
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: "130%",
    fontFamily,
  },
});

export default Typography;
