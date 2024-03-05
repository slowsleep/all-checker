import RowMovieTable from "./RowMovieTable.jsx";
import { useSelector } from "react-redux"
import { getMovies } from '../../../features/movie/movieSlice.js'

export const MovieTable = () => {
    const movies = useSelector(getMovies);

    if (movies.length) {
        return (
            <>
                <h2>Список фильмов</h2>
                <table>
                    <thead>
                        <tr>
                            <td>название</td>
                            <td>часть</td>
                            <td>просмотрен</td>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((item) => (
                            <RowMovieTable key={item.id} movie={item} />
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
};
