import { Dispatch, SetStateAction } from 'react';

export type MovieKey = 'rating' | 'box_office_millions';

export interface Movie {
  title: string;
  release_year: number;
  genre: string[];
  director: string;
  runtime_minutes: number;
  rating: number;
  box_office_millions: number;
  streaming_platforms: string[];
  cast: string[];
  awards: string[];
}

export interface TopPerformersProps {
  filteredMovies: Movie[];
  theme: string | ((value: string) => void);
}

export interface SearchAndFilterPanelProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  selectedGenres: string[];
  setSelectedGenres: Dispatch<SetStateAction<string[]>>;
  sortBy: MovieKey;
  setSortBy: Dispatch<SetStateAction<MovieKey>>;
  theme: string | ((value: string) => void);
}

export interface ChartSeries {
  name: string;
  data: number[];
}

export interface ChartOptions {
  chart: {
    type: 'bar' | 'line' | 'pie' | 'donut' | 'area' | 'scatter';
  };
  xaxis: {
    categories: string[];
  };
  colors: string[];
}

export interface OscarStatisticsOptions {
  series: ChartSeries[];
  options: ChartOptions;
}

export interface OscarStatisticsProps {
  options: OscarStatisticsOptions;
  theme: string | ((value: string) => void);
}
