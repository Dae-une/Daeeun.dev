import { convertSlugToTitle } from './convertSlugToTitle';
import { Post } from 'contentlayer/generated';

export interface Tags {
  [x: string]: number;
}

const getAllTags = (allPosts: Post[]) => {
  const tags: Tags = {};

  allPosts.map((post) => {
    if (post.tags) {
      post.tags.map((tag) => {
        const newTag = convertSlugToTitle(tag);
        tags[newTag] ? (tags[newTag] += 1) : (tags[newTag] = 1);
      });
    }
  });

  return tags;
};

export default getAllTags;
