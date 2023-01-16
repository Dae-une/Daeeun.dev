import Header from 'components/Common/Header';
import Footer from 'components/Footer';
import PostGrid from 'components/PostGrid';
import Tags from 'components/Tags';
import Title from 'components/Title';

const Home = () => {
  return (
    <>
      <Header />
      <Title />
      <Tags />
      <PostGrid />
      <Footer />
    </>
  );
};

export default Home;
