import React, { useState } from 'react';

const useSearchValue = () => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };

  return { searchValue, onChangeSearch };
};

export default useSearchValue;
