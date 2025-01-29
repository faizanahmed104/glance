import { useState } from 'react';
import OscarStatistics from './OscarStatistics';
import SearchAndFilterPanel from './SearchAndFilterPanel';
import TopPerformers from './TopPerformers';
import { MOVIES, OPTIONS } from './constants';
import { MovieKey } from './types';
import useColorMode from '../../hooks/useColorMode';
import useFilteredMovies from '../../hooks/useFilteredMovies';

const Dashboard = () => {
  const [colorMode] = useColorMode();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<MovieKey>('rating');

  const filteredMovies = useFilteredMovies(
    MOVIES,
    searchTerm,
    selectedGenres,
    sortBy,
  );

  return (
    <div
      className={`min-h-screen p-8 ${
        colorMode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
    >
      <h1 className="text-4xl font-bold mb-8">Movie Insights Dashboard</h1>
      <SearchAndFilterPanel
        sortBy={sortBy}
        theme={colorMode}
        setSortBy={setSortBy}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
      />
      <TopPerformers filteredMovies={filteredMovies} theme={colorMode} />
      <OscarStatistics options={OPTIONS} theme={colorMode} />
    </div>
  );
};

export default Dashboard;
