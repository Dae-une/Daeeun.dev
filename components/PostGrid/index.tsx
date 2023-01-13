import PostCard from 'components/PostCard';
import { motion } from 'framer-motion';
import * as Style from './styles';

const PostGrid = () => {
  return (
    <Style.PostGird>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', damping: 70 }}
      >
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </motion.div>
    </Style.PostGird>
  );
};

export default PostGrid;
