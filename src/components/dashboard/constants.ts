import { Movie, OscarStatisticsOptions } from './types';

export const MOVIES: Movie[] = [
  {
    title: 'Inception',
    release_year: 2010,
    genre: ['Action', 'Sci-Fi', 'Thriller'],
    director: 'Christopher Nolan',
    runtime_minutes: 148,
    rating: 8.8,
    box_office_millions: 829.9,
    streaming_platforms: ['Netflix', 'Amazon Prime'],
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
    awards: ['Oscar for Best Cinematography'],
  },
  {
    title: 'The Shawshank Redemption',
    release_year: 1994,
    genre: ['Drama'],
    director: 'Frank Darabont',
    runtime_minutes: 142,
    rating: 9.3,
    box_office_millions: 58.3,
    streaming_platforms: ['HBO Max', 'Netflix'],
    cast: ['Tim Robbins', 'Morgan Freeman'],
    awards: ['Nominated for 7 Oscars'],
  },
  {
    title: 'Avengers: Endgame',
    release_year: 2019,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    director: 'Anthony Russo, Joe Russo',
    runtime_minutes: 181,
    rating: 8.4,
    box_office_millions: 2797.5,
    streaming_platforms: ['Disney+'],
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo'],
    awards: ['Nominated for 1 Oscar'],
  },
  {
    title: 'Parasite',
    release_year: 2019,
    genre: ['Drama', 'Thriller'],
    director: 'Bong Joon Ho',
    runtime_minutes: 132,
    rating: 8.6,
    box_office_millions: 263.1,
    streaming_platforms: ['Hulu'],
    cast: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong'],
    awards: ['Oscar for Best Picture', 'Oscar for Best Director'],
  },
  {
    title: 'The Dark Knight',
    release_year: 2008,
    genre: ['Action', 'Crime', 'Drama'],
    director: 'Christopher Nolan',
    runtime_minutes: 152,
    rating: 9.0,
    box_office_millions: 1005.0,
    streaming_platforms: ['HBO Max', 'Amazon Prime'],
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    awards: ['Oscar for Best Supporting Actor'],
  },
];

export const OPTIONS: OscarStatisticsOptions = {
  series: [
    {
      name: 'Oscar Wins',
      data: MOVIES.map(
        (m) => m.awards.filter((a) => a.includes('Oscar')).length,
      ),
    },
    {
      name: 'Oscar Nominations',
      data: MOVIES.map(
        (m) => m.awards.filter((a) => a.includes('Nominated')).length,
      ),
    },
  ],
  options: {
    chart: { type: 'bar' as 'bar' },
    xaxis: { categories: MOVIES.map((m) => m.title) },
    colors: ['#10B981', '#3B82F6'],
  },
};
