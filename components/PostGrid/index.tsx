import PostCard from 'components/PostCard';
import { fadeIn, fadeInUp } from 'constants/animation';
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
      {posts.map((post) => (
        <motion.div variants={fadeInUp}>
          <motion.div variants={fadeIn} initial="initial" whileInView="animate" exit="exit" viewport={{ amount: 0.6, once: true }}>
            <PostCard post={post} key={post._id} />
          </motion.div>
        </motion.div>
      ))}
    </Style.PostGird>
  );
};

export default PostGrid;
