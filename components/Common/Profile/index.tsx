import * as Style from './styles';
import { motion } from 'framer-motion';
import ProfileImage from '../../../static/svg/profile.png';
import { CHANNEL } from 'constants/channel';
import { FC, PropsWithChildren } from 'react';

const Profile = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', damping: 20 }}>
      <Style.ProfileWrapper>
        <Style.ProfileImg src={ProfileImage} alt="profileImage" />
        <Style.ProfileContent>
          <strong>Daeeun</strong>
          <div>Frontend Developer</div>
          <span>Web Engineer Interested in 추상화. 함수형 프로그래밍. 테스트.</span>
          <Style.Channel>
            {CHANNEL.map((channel) => (
              <ExternalLink {...channel} key={channel.title} />
            ))}
          </Style.Channel>
        </Style.ProfileContent>
      </Style.ProfileWrapper>
    </motion.div>
  );
};

export default Profile;

interface ExternalLinkProps extends PropsWithChildren {
  title: string;
  url: string;
}

const ExternalLink: FC<ExternalLinkProps> = ({ title, url }) => {
  return (
    <Style.LinkItem href={url} target="_blank" rel="noopener">
      {title}
    </Style.LinkItem>
  );
};
