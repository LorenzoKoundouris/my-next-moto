// libs
import React from 'react';
import App, { AppContext } from 'next/app';

// components
import Page from '../components/Page';

class MyApp extends App {
  static async getInitialProps(appContext: AppContext) {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    );
  }
}

export default MyApp;
