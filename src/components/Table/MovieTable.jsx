import { useEffect, useState } from "react";
import { getFromStorage } from "../../utils/storageManager.js";

export const MovieTable = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let movieItems = getFromStorage("movie");
        if (movies !== movieItems) {
            setMovies(movieItems);
        }
    }, []);

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
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.part}</td>
                            <td>
                                <input type="checkbox" defaultChecked={item.finished} disabled />
                            </td>
                            <td>
                                <button>изменить</button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td>
                            <input type="text" placeholder="название" />
                        </td>
                        <td>
                            <input type="number" placeholder="часть" />
                        </td>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>
                            <button>сохранить</button>
                        </td>
                        <td>
                            <button>удалить</button>
                        </td>
                        <td>
                            <button>отменить</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};
