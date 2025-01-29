import { Search } from 'lucide-react';
import { MOVIES } from './constants';
import { MovieKey, SearchAndFilterPanelProps } from './types';

const SearchAndFilterPanel = ({
  searchTerm,
  setSearchTerm,
  selectedGenres,
  setSelectedGenres,
  sortBy,
  setSortBy,
  theme,
}: SearchAndFilterPanelProps) => {
  const allGenres = [...new Set(MOVIES.flatMap((m) => m.genre))];

  return (
    <div
      className={`mb-8 p-6 rounded-xl ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
      }`}
    >
      <div className="flex space-x-4">
        <div className="flex-grow relative">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full p-3 rounded-lg pl-10 ${
              theme === 'dark'
                ? 'bg-gray-700 text-white'
                : 'bg-white text-black'
            }`}
          />
          <Search className="absolute left-3 top-3.5 text-gray-400" />
        </div>
        <div>
          <select
            className={`p-3 rounded-lg ${
              theme === 'dark'
                ? 'bg-gray-700 text-white'
                : 'bg-white text-black'
            }`}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as MovieKey)}
          >
            <option value="rating">Sort by Rating</option>
            <option value="box_office_millions">Sort by Box Office</option>
          </select>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {allGenres.map((genre) => (
          <button
            key={genre}
            onClick={() =>
              setSelectedGenres((prev: string[]) =>
                prev.includes(genre)
                  ? prev.filter((g) => g !== genre)
                  : [...prev, genre],
              )
            }
            className={`px-3 py-1 rounded-full text-sm ${
              selectedGenres.includes(genre)
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchAndFilterPanel;
