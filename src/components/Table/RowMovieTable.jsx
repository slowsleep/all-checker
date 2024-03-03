import { useState } from "react";
import {
    updateItemStorage,
    removeFromStorage,
} from "../../utils/storageManager.js";

// eslint-disable-next-line react/prop-types
const RowMovieTable = ({ movie }) => {
    const [isEdit, setIsEdit] = useState(false);

    const toggleBtns = (row) => {
        row.querySelector("button[name=btnmovieedit]").classList.toggle(
            "hidden"
        );
        row.querySelector("button[name=btnmoviesave]").classList.toggle(
            "hidden"
        );
        row.querySelector("button[name=btnmoviedelete]").classList.toggle(
            "hidden"
        );
        row.querySelector("button[name=btnmoviecancel]").classList.toggle(
            "hidden"
        );
    };

    const handleEditMovie = (e) => {
        e.preventDefault();

        if (!isEdit) setIsEdit(true);

        setIsEdit(true);

        let btn = e.target;
        let curRow = btn.parentElement.parentElement;

        toggleBtns(curRow);
    };

    const handleSaveMovie = (e) => {
        e.preventDefault();
        let btn = e.target;
        let curRow = btn.parentElement.parentElement;

        let newTitle = curRow.querySelector("input[name=movietitle]").value;
        let newPart = curRow.querySelector("input[name=moviepart]").value;
        let newFinished = curRow.querySelector(
            "input[name=movieFinished]"
        ).checked;

        let editedMovie = {
            ...movie,
            title: newTitle,
            part: newPart,
            finished: newFinished,
        };

        toggleBtns(curRow);
        updateItemStorage("movie", editedMovie);
        setIsEdit(false);
    };

    const handleDeleteMovie = (e) => {
        e.preventDefault();

        removeFromStorage("movie", movie.id);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        let btn = e.target;
        let curRow = btn.parentElement.parentElement;
        toggleBtns(curRow);
        setIsEdit(false);
    };

    return (
        <tr id="movieFields">
            <td>
                {!isEdit ? (
                    movie.title
                ) : (
                    <input
                        type="text"
                        defaultValue={movie.title}
                        onChange={(e) => console.log(e.target.value)}
                        name="movietitle"
                    />
                )}
            </td>
            <td>
                {!isEdit ? (
                    movie.part
                ) : (
                    <input
                        type="number"
                        defaultValue={movie.part}
                        onChange={(e) => console.log(e.target.value)}
                        name="moviepart"
                    />
                )}
            </td>
            <td>
                {!isEdit ? (
                    <input
                        type="checkbox"
                        checked={movie.finished}
                        disabled={isEdit ? false : true}
                        name="movieFinished"
                    />
                ) : (
                    <input
                        type="checkbox"
                        defaultChecked={movie.finished}
                        disabled={isEdit ? false : true}
                        name="movieFinished"
                    />
                )}
            </td>
            <td>
                <button onClick={handleEditMovie} name="btnmovieedit">
                    изменить
                </button>
                <button
                    className="hidden"
                    onClick={handleSaveMovie}
                    name="btnmoviesave"
                >
                    сохранить
                </button>
            </td>
            <td>
                <button
                    className="hidden"
                    onClick={handleDeleteMovie}
                    name="btnmoviedelete"
                >
                    удалить
                </button>
            </td>
            <td>
                <button
                    className="hidden"
                    onClick={handleCancel}
                    name="btnmoviecancel"
                >
                    отменить
                </button>
            </td>
        </tr>
    );
};

export default RowMovieTable;
