import Header from 'components/Common/Header';
import Footer from 'components/Footer';
import PostGrid from 'components/PostGrid';
import Tags from 'components/Tags';

const Home = () => {
  return (
    <>
      <Header />
      <Tags />
      <PostGrid />
      <Footer />
    </>
  );
};

export default Home;
