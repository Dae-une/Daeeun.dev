import * as Style from './styles';
import { motion } from 'framer-motion';
import { Tags as TagsType } from 'utils/getAllTags';
import { FC } from 'react';
import { useRouter } from 'next/router';

interface TagItmeProps {
  tagName: string;
  isSelected: boolean;
}

const TagItem: FC<TagItmeProps> = ({ tagName, isSelected }) => {
  return (
    <Style.TagLink href={`/tags/${tagName}`} isSelected={isSelected}>
      <span>{tagName}</span>
    </Style.TagLink>
  );
};

interface TagsProps {
  tags: TagsType;
}

const Tags: FC<TagsProps> = ({ tags }) => {
  const router = useRouter();
  const tag = router.query.tag || 'All';

  const isSelected = (tagName: string) => {
    return tag === tagName;
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', damping: 20 }}>
      <Style.TagList>
        <Style.TagLink href="/" isSelected={isSelected('All')}>
          <span>All</span>
        </Style.TagLink>
        {Object.keys(tags).map((tag) => (
          <TagItem tagName={tag} key={tag} isSelected={isSelected(tag)} />
        ))}
      </Style.TagList>
    </motion.div>
  );
};

export default Tags;
