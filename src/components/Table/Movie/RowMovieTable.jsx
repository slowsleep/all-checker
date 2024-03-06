import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { edit, remove } from "../../../features/movie/movieSlice";

// eslint-disable-next-line react/prop-types
const RowMovieTable = ({ movie }) => {
    const dispatch = useDispatch();
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

        setIsEdit(false);
        toggleBtns(curRow);
        dispatch(edit(editedMovie));
    };

    const handleDeleteMovie = (e) => {
        e.preventDefault();
        dispatch(remove(movie.id));
    };

    const handleCancel = (e) => {
        e.preventDefault();
        let btn = e.target;
        let curRow = btn.parentElement.parentElement;
        setIsEdit(false);
        let newFinished = curRow.querySelector(
            "input[name=movieFinished]"
        );
        newFinished.checked = movie.finished;
        toggleBtns(curRow);
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
                        name="moviepart"
                    />
                )}
            </td>
            <td>
                <input
                    type="checkbox"
                    defaultChecked={movie.finished}
                    disabled={isEdit ? false : true}
                    name="movieFinished"
                />
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
