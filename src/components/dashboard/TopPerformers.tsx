import { Star } from 'lucide-react';
import { TopPerformersProps } from './types';

const TopPerformers = ({ filteredMovies, theme }: TopPerformersProps) => {

  return (
    <div
      className={`rounded-xl mb-8 p-6 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
      }`}
    >
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Star className="mr-2" /> Top Performers
      </h2>
      <div className="grid gap-4">
        {filteredMovies.slice(0, 3).map((movie) => (
          <div
            key={movie.title}
            className={`p-4 rounded-lg flex justify-between items-center ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
            }`}
          >
            <div>
              <h3 className="font-bold text-lg">{movie.title}</h3>
              <p className="text-gray-400">
                Rating: {movie.rating} | Box Office: $
                {movie.box_office_millions}M
              </p>
            </div>
            <div className="text-yellow-500 flex items-center">
              <Star className="mr-1" /> {movie.rating}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPerformers;
