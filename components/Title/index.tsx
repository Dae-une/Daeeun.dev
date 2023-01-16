import * as Style from './styles';
import { motion } from 'framer-motion';

const Title = () => {
  return (
    <Style.TitleFrame>
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
        <Style.Flex>
          <Style.TitleDesc>성장을 위한 집필 공간</Style.TitleDesc>
          <Style.Title>Daeeun. Library</Style.Title>
        </Style.Flex>
        <Style.UnderLine />
      </motion.div>
    </Style.TitleFrame>
  );
};

export default Title;
