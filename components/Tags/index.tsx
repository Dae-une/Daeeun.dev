import * as Style from './styles';
import { motion } from 'framer-motion';

const Tags = () => {
  return (
    <Style.TagWrapper>
      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          margin: 'auto',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 20 }}
      >
        <Style.TagTitle>
          <span>All Posts.</span>
          <Style.TagCount>(2)</Style.TagCount>
        </Style.TagTitle>
        <Style.TagList>
          <Style.TagItem href="/">
            <span>All Posts.</span>
            <Style.TagCount>(2)</Style.TagCount>
          </Style.TagItem>
          <Style.TagItem href="/">
            <span>All Posts.</span>
            <Style.TagCount>(2)</Style.TagCount>
          </Style.TagItem>
          <Style.TagItem href="/">
            <span>All Posts.</span>
            <Style.TagCount>(2)</Style.TagCount>
          </Style.TagItem>
          <Style.TagItem href="/">
            <span>All Posts.</span>
            <Style.TagCount>(2)</Style.TagCount>
          </Style.TagItem>
          <Style.TagItem href="/">
            <span>All Posts.</span>
            <Style.TagCount>(2)</Style.TagCount>
          </Style.TagItem>
          <Style.TagItem href="/">
            <span>All Posts.</span>
            <Style.TagCount>(2)</Style.TagCount>
          </Style.TagItem>
          <Style.TagItem href="/">
            <span>All Posts.</span>
            <Style.TagCount>(2)</Style.TagCount>
          </Style.TagItem>
        </Style.TagList>
      </motion.div>
    </Style.TagWrapper>
  );
};

export default Tags;
