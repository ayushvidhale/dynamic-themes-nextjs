import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../theme';

interface IState {
  dynamicPageThemes: { [key: string]: { [key: string]: string } };
}

export default class MyApp extends App<any, any, IState> {
  state = {
    dynamicPageThemes: {},
  };

  updateTheme = (dynamicTheme: { [key: string]: string }) => {
    const { router } = this.props;
    const { dynamicPageThemes } = this.state;

    const route = router.asPath;
    const updatedThemes = { ...dynamicPageThemes };
    updatedThemes[route] = dynamicTheme;

    this.setState({ dynamicPageThemes: updatedThemes });
  };

  getDynamicPageTheme = () => {
    const { router } = this.props;
    const { dynamicPageThemes } = this.state;

    const route = router.asPath;
    const dynamicPageTheme = dynamicPageThemes[route];

    return dynamicPageTheme || {};
  };

  render() {
    const { Component, pageProps } = this.props;
    const { pageTheme } = Component;
    const dynamicTheme = this.getDynamicPageTheme();

    const theme = {
      ...appTheme,
      ...pageTheme,
      ...dynamicTheme,
    };

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} updateTheme={this.updateTheme} />
      </ThemeProvider>
    );
  }
}
