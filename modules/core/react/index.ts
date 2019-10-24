import * as canvasColorsWeb from '@workday/canvas-colors-web';

import {borderRadius} from './lib/radius';
import {BrandingColor, CanvasColor} from './lib/colors.types';
import depth, {CanvasDepth, CanvasDepthValue} from './lib/depth';
import InputProvider from './lib/InputProvider';
import CanvasProvider from './lib/CanvasProvider';
import spacing, {
  CanvasSpacing,
  CanvasSpacingNumber,
  CanvasSpacingValue,
  spacingNumbers,
} from './lib/spacing';
import type, {CanvasType, fontFamily, monoFontFamily, CanvasTypeVariant} from './lib/type';
import {CSSProperties} from './lib/types';
import {breakpoints, CanvasBreakpoints, BreakpointKey} from './lib/theming/breakpoints';

const {default: colors, ...semanticColors} = canvasColorsWeb;
const canvas = {
  colors,
  depth,
  spacing,
  type,
  fontFamily,
  monoFontFamily,
  ...semanticColors,
};

export * from './lib/theming/types';
export * from './lib/theming/theme';
export * from './lib/TypeWrappers';
export * from '@workday/canvas-colors-web';
export {
  borderRadius,
  breakpoints,
  colors,
  depth,
  spacing,
  spacingNumbers,
  type,
  fontFamily,
  monoFontFamily,
  BrandingColor,
  BreakpointKey,
  CanvasBreakpoints,
  CanvasDepth,
  CanvasDepthValue,
  CanvasSpacing,
  CanvasSpacingNumber,
  CanvasSpacingValue,
  CanvasType,
  CanvasTypeVariant,
  CanvasColor,
  CSSProperties,
  InputProvider,
  CanvasProvider,
};
export default canvas;
