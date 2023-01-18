import * as Style from './styles';
import { motion } from 'framer-motion';
import { Tags } from 'utils/getAllTags';
import { FC } from 'react';
import { useRouter } from 'next/router';

interface TagsProps {
  tags: Tags;
  currentTagPostCount: number;
}

const Tags: FC<TagsProps> = ({ tags, currentTagPostCount }) => {
  const router = useRouter();
  const { tag } = router.query;

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
          <span>{tag ?? 'AllPosts'}.</span>
          <Style.TagCount>{`(${currentTagPostCount})`}</Style.TagCount>
        </Style.TagTitle>
        <Style.TagList>
          <Style.TagItem href="/">
            <span>All Posts.</span>
          </Style.TagItem>
          {Object.keys(tags).map((tag) => (
            <Style.TagItem href={`/tags/${tag}`} key={tag}>
              <span>{tag}</span>
              <Style.TagCount>{`(${tags[tag]})`}</Style.TagCount>
            </Style.TagItem>
          ))}
        </Style.TagList>
      </motion.div>
    </Style.TagWrapper>
  );
};

export default Tags;
