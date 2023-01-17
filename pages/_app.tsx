import { ThemeProvider } from '@emotion/react';
import Header from 'components/Common/Header';
import Layout from 'components/Common/Layout';
import { AppProps } from 'next/app';
import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/Theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
