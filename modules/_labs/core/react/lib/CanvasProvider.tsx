import * as React from 'react';
import {ThemeProvider} from 'emotion-theming';
import {InputProvider} from '@workday/canvas-kit-react-core';
import {CanvasTheme} from './theming/types';
import {defaultCanvasTheme} from './theming/theme';

export interface CanvasProviderProps {
  theme: CanvasTheme;
  setThemeGlobal: boolean;
}

// TODO: Opt in for fonts

declare global {
  interface Window {
    wdCanvas: {
      theme?: CanvasTheme;
    };
  }
}

export default class CanvasProvider extends React.Component<CanvasProviderProps> {
  static defaultProps = {
    theme: defaultCanvasTheme,
    setThemeGlobal: false,
  };

  componentDidMount() {
    if (this.props.setThemeGlobal) {
      if (!window.wdCanvas) {
        window.wdCanvas = {};
      }
      window.wdCanvas.theme = this.props.theme;
    }
  }

  render() {
    const {children, theme} = this.props;

    return (
      <ThemeProvider theme={theme}>
        <InputProvider>{children}</InputProvider>
      </ThemeProvider>
    );
  }
}