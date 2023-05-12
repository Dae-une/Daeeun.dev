import React, { FC } from 'react';
import * as Style from './styles';
import { motion } from 'framer-motion';

interface SearchInputProps {
  onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<SearchInputProps> = ({ onChangeSearch }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', damping: 20 }}>
      <Style.SearchWrapper>
        <Style.SearchInput placeholder="Article name, tag ..." onChange={onChangeSearch} />
      </Style.SearchWrapper>
    </motion.div>
  );
};

export default SearchInput;
