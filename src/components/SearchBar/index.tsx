import React, { useState, ChangeEvent } from 'react';
import * as S from './styles';

interface SearchBarProps {
    onSearch: (query: string) => void;
    placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
    onSearch,
    placeholder = 'Pesquisar pius...'
}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    const handleClear = () => {
        setSearchQuery('');
        onSearch('');
    };

    return (
        <S.Container>
            <S.SearchIcon>🔍</S.SearchIcon>
            <S.Input
                type="text"
                placeholder={placeholder}
                value={searchQuery}
                onChange={handleInputChange}
            />
            {searchQuery && (
                <S.ClearButton onClick={handleClear}>✕</S.ClearButton>
            )}
        </S.Container>
    );
};

export default SearchBar;
