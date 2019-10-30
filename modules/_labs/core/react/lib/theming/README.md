# Canvas Kit Theming

Canvas Kit Core contains wrappers and types to enabling theming of Canvas components.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-core
```

## Usage

Wrap all of your Canvas components with the `CanvasProvider` higher order component. Usually this
would go in the highest level component of your application. This includes an
[`InputProvider`](../../README.md#input-provider) and includes all global configuration needed for
our Canvas Components.

```tsx
import * as React from 'react';
import {CanvasProvider} from '@workday/canvas-kit-react';

<CanvasProvider>{/* All your components containing any Canvas components */}</CanvasProvider>;
```

## Component Props

### Required

> None

### Optional

#### `theme: CanvasTheme`

> The theme to be used throughout the children of the `CanvasProvider` component.

Default: `defaultCanvasTheme`

#### `setThemeGlobal: boolean`

> Indicates whether to set a global theme on the window object. This should be used if your
> application is not using a single react tree (React contexts only work within a single tree).

Default: `false`

## Theme Object

The Canvas theme is based on the following object:

```ts
export const defaultCanvasTheme: CanvasTheme = {
  palette: {
    primary: {
      light: colors.blueberry200,
      main: colors.blueberry400,
      dark: colors.blueberry500,
      darkest: colors.blueberry600,
      contrast: colors.frenchVanilla100,
    },
    alert: {
      light: colors.cantaloupe300,
      main: colors.cantaloupe400,
      dark: colors.cantaloupe500,
      darkest: colors.cantaloupe600,
      contrast: colors.frenchVanilla100,
    },
    error: {
      light: colors.cinnamon300,
      main: colors.cinnamon500,
      dark: colors.cinnamon600,
      darkest: '#80160E',
      contrast: colors.frenchVanilla100,
    },
    common: {
      focusOutline: colors.blueberry400,
    },
  },
  breakpoints: {
    values: {
      zero: 0,
      s: 600,
      m: 960,
      l: 1280,
      xl: 1920,
    },
    up: (key: BreakpointFnParam) => string,
    down: (key: BreakpointFnParam) => string,
    between: (key: BreakpointFnParam) => string,
    only: (start: BreakpointFnParam, end: BreakpointFnParam) => string,
  },
  // Typography
  // Depth?
};
```

## Custom Theme

The `CanvasProvider` accepts a full or partial theme object to give a branded look to the component
library. Pass your theme into `createCanvasTheme` and use the return value for the `theme` prop.

Example:

```tsx
import {
  CanvasProvider,
  PartialCanvasTheme,
  createCanvasTheme,
} from '@workday/canvas-kit-react-core';

const theme: PartialCanvasTheme = {
  palette: {
    primary: {
      main: colors.cantaloupe400,
    },
  },
};

<CanvasProvider theme={createCanvasTheme(theme)}>
  {/* Your app with Canvas components */}
</CanvasProvider>;
```

### Nesting Theme Providers

It is possible to set a theme for a specific component or set of components within your React tree.
This is generally discouraged for consistency reasons, but may be required in some contexts (a green
`Switch` component for example). To do this, you must use Emotion's `ThemeProvider` component. The
inner theme will override the outer theme.

```tsx
import * as React from 'react';
import {ThemeProvider} from 'emotion-theming';
import {CanvasProvider, CanvasTheme} from '@workday/canvas-kit-react';
import {Switch} from '@workday/canvas-kit-react-switch';

const theme: PartialCanvasTheme = {
  palette: {
    primary: {
      main: colors.greenApple400,
    },
  },
};

<CanvasProvider>
  {/* All your components containing any Canvas components */}
  <ThemeProvider theme={theme}>
    <Switch checked={true} />
  </ThemeProvider>
</CanvasProvider>;
```