import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../with-redux-store';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Head>
            <title>HelloAlex | Modern Open Source URL shortener.</title>
          </Head>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
