import { useState } from "react";
import { useDispatch } from "react-redux";
import { edit, remove } from "../../../features/series/seriesSlice";

// eslint-disable-next-line react/prop-types
const RowSeriesTable = ({ singleSeries }) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);

    const toggleBtns = (row) => {
        row.querySelector("button[name=btnseriesedit]").classList.toggle(
            "hidden"
        );
        row.querySelector("button[name=btnseriessave]").classList.toggle(
            "hidden"
        );
        row.querySelector("button[name=btnseriesremove]").classList.toggle(
            "hidden"
        );
        row.querySelector("button[name=btnseriescancel]").classList.toggle(
            "hidden"
        );
    };

    const handleEditSeries = (e) => {
        e.preventDefault();

        if (!isEdit) setIsEdit(true);

        setIsEdit(true);
        let btn = e.target;
        let curRow = btn.parentElement.parentElement;
        toggleBtns(curRow);
    };

    const handleSaveSeries = (e) => {
        e.preventDefault();
        let btn = e.target;
        let curRow = btn.parentElement.parentElement;
        let newTitle = curRow.querySelector("input[name=seriestitle]").value;
        let newSeason = curRow.querySelector("input[name=seriesseason]").value;
        let newEpisode = curRow.querySelector("input[name=seriesepisode]").value;
        let newFinished = curRow.querySelector(
            "input[name=seriesFinished]"
        ).checked;

        let editedSeries = {
            ...singleSeries,
            title: newTitle,
            season: newSeason,
            episode: newEpisode,
            finished: newFinished,
        };

        toggleBtns(curRow);
        setIsEdit(false);
        dispatch(edit(editedSeries));
    };

    const handleRemoveSeries = (e) => {
        e.preventDefault();
        dispatch(remove(singleSeries.id));
    };

    const handleCancel = (e) => {
        e.preventDefault();
        let btn = e.target;
        let curRow = btn.parentElement.parentElement;
        toggleBtns(curRow);
        let newFinished = curRow.querySelector(
            "input[name=seriesFinished]"
        );
        newFinished.checked = singleSeries.finished
        setIsEdit(false);
    };

    return (
        <tr id="seriesFields">
            <td>
                {!isEdit ? (
                    singleSeries.title
                ) : (
                    <input
                        type="text"
                        defaultValue={singleSeries.title}
                        name="seriestitle"
                    />
                )}
            </td>
            <td>
                {!isEdit ? (
                    singleSeries.season
                ) : (
                    <input
                        type="number"
                        defaultValue={singleSeries.season}
                        name="seriesseason"
                    />
                )}
            </td>
            <td>
                {!isEdit ? (
                    singleSeries.episode
                ) : (
                    <input
                        type="number"
                        defaultValue={singleSeries.episode}
                        name="seriesepisode"
                    />
                )}
            </td>
            <td>
                <input
                    type="checkbox"
                    defaultChecked={singleSeries.finished}
                    disabled={isEdit ? false : true}
                    name="seriesFinished"
                />
            </td>
            <td>
                <button
                    onClick={handleEditSeries}
                    name="btnseriesedit"
                >
                    изменить
                </button>
                <button
                    className="hidden"
                    onClick={handleSaveSeries}
                    name="btnseriessave"
                >
                    сохранить
                </button>
            </td>
            <td>
                <button
                    className="hidden"
                    onClick={handleRemoveSeries}
                    name="btnseriesremove"
                >
                    удалить
                </button>
            </td>
            <td>
                <button
                    className="hidden"
                    onClick={handleCancel}
                    name="btnseriescancel"
                >
                    отменить
                </button>
            </td>
        </tr>
    );
};

export default RowSeriesTable;
