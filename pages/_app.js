/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import App from 'next/app';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/view-components/helpers/materialui-theme';

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
    if (typeof window !== 'undefined' && typeof document !== 'undefined' && window.innerWidth > 1199) {
      document.getElementById('dom').style.fontSize = '1.1vw';
    }
  }

  render() {
    const { Component, pageProps, router: { asPath } } = this.props;

    // Next.js currently does not allow trailing slash in a route.
    // This is a client side redirect in case trailing slash occurs.
    if (asPath.length > 1 && asPath.endsWith('/')) {
      const urlWithoutEndingSlash = asPath.replace(/\/*$/gim, '');

      if (typeof window !== 'undefined') {
        window.location.replace(urlWithoutEndingSlash);
      }
      return null;
    }

    return (
      <>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
