import { useEffect, useState } from "react";
import { getFromStorage } from "../../utils/storageManager.js";
import RowMovieTable from "./RowMovieTable.jsx";

export const MovieTable = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let movieItems = getFromStorage("movie");
        setMovies(movieItems);
    }, []);

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
                        <td></td>
                        <td></td>
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
