import { ThemeProvider } from '@emotion/react';
import Header from 'components/Common/Header';
import Layout from 'components/Common/Layout';
import { AppProps } from 'next/app';
import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/Theme';
import { DefaultSeo } from 'next-seo';
import SEO from '../seo.config';
import Footer from 'components/Footer';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...SEO} />
      <GlobalStyle />
      <Layout>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
