import PostCard from 'components/PostCard';
import { motion } from 'framer-motion';
import { PostType } from 'pages';
import { FC } from 'react';
import * as Style from './styles';

const PostGrid: FC<PostType> = ({ posts }) => {
  return (
    <Style.PostGird>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', damping: 70 }}
      >
        {posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </motion.div>
    </Style.PostGird>
  );
};

export default PostGrid;
