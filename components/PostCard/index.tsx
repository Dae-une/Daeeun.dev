import { Post } from 'contentlayer/generated';
import { FC } from 'react';
import * as Style from './styles';

interface PostCardProps {
  post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <Style.PostCard>
      <Style.PostTime>{post.date}</Style.PostTime>
      <Style.PostTitle href={`/blog/${post.slug}`}>{post.title}</Style.PostTitle>
      <Style.PostDesc>{post.summary}</Style.PostDesc>
      <Style.PostTags>
        {post.tags.map((tag) => (
          <Style.TagItem href={`/tags/${tag.toUpperCase()}`} key={tag}>
            {tag.toUpperCase()}
          </Style.TagItem>
        ))}
      </Style.PostTags>
    </Style.PostCard>
  );
};

export default PostCard;
