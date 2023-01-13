import * as Style from './styles';

const PostCard = () => {
  return (
    <Style.PostCard>
      <Style.PostTime>2022년 1월 13일</Style.PostTime>
      <Style.PostTitle href={'/'}>포스트 제목</Style.PostTitle>
      <Style.PostDesc>포스트 부제</Style.PostDesc>
      <Style.PostTags>
        <Style.TagItem href={'/'}>태그들</Style.TagItem>
        <Style.TagItem href={'/'}>태그들</Style.TagItem>
        <Style.TagItem href={'/'}>태그들</Style.TagItem>
        <Style.TagItem href={'/'}>태그들</Style.TagItem>
      </Style.PostTags>
    </Style.PostCard>
  );
};

export default PostCard;
