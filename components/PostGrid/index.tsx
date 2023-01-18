import PostCard from 'components/PostCard';
import { Post } from 'contentlayer/generated';
import { motion } from 'framer-motion';
import { FC } from 'react';
import * as Style from './styles';

interface PostGridProps {
  posts: Post[];
}

const PostGrid: FC<PostGridProps> = ({ posts }) => {
  return (
    <Style.PostGird>
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ type: 'spring', damping: 50 }}>
        {posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </motion.div>
    </Style.PostGird>
  );
};

export default PostGrid;
