import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import movies from '../../api/movies.json';

export const MovieList = () => (
  <div className="movie-list">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
);
