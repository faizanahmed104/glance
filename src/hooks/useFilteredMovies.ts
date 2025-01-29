import { useMemo } from 'react';
import { Movie } from '../components/dashboard/types';

const useFilteredMovies = (
  movies: Movie[],
  searchTerm: string,
  selectedGenres: string[],
  sortBy: keyof Pick<Movie, 'rating' | 'box_office_millions'>,
) => {
  return useMemo(() => {
    return movies
      .filter(
        (movie) =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (selectedGenres.length === 0 ||
            selectedGenres.some((genre) => movie.genre.includes(genre))),
      )
      .sort((a, b) => {
        return (b[sortBy] as number) - (a[sortBy] as number);
      });
  }, [movies, searchTerm, selectedGenres, sortBy]);
};

export default useFilteredMovies;
