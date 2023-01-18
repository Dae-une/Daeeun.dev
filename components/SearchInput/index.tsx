import React, { FC } from 'react';
import * as Style from './styles';

interface SearchInputProps {
  onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<SearchInputProps> = ({ onChangeSearch }) => {
  return (
    <Style.SearchWrapper>
      <Style.SearchInput placeholder="검색어를 입력하세요." onChange={onChangeSearch} />
    </Style.SearchWrapper>
  );
};

export default SearchInput;
