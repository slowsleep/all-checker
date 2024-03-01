import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.css";
import { addToStorage } from "../../utils/storageManager";

// eslint-disable-next-line react/prop-types
export const SeriesForm = ({ formName }) => {
    const [inputName, setInputName] = useState("");
    const [season, setSeason] = useState("");
    const [series, setSeries] = useState("");

    const [nameError, setNameError] = useState(true);
    const [seasonError, setSeasonError] = useState(true);
    const [seriesError, setSeriesError] = useState(true);

    const [finished, setFinished] = useState(false);

    const [formValid, setFormValid] = useState(false);

    const handleName = (e) => {
        setInputName(e.target.value);
        if (e.target.value) {
            setNameError(false);
        } else {
            setNameError("Название не может быть пустым");
        }
    };

    const handleSeason = (e) => {
        setSeason(e.target.value);
        if (e.target.value <= 0) {
            setSeasonError("Часть может быть только положительным числом");
        } else if (!e.target.value) {
            setSeasonError(null);
        } else {
            setSeasonError(false);
        }
    };
    const handleSeries = (e) => {
        setSeries(e.target.value);
        if (e.target.value <= 0) {
            setSeriesError("Часть может быть только положительным числом");
        } else if (!e.target.value) {
            setSeriesError(null);
        } else {
            setSeriesError(false);
        }
    };

    const handleFinished = (e) => {
        setFinished(e.target.value);
    };

    const [nameDirty, setNameDirty] = useState(false);
    const [seasonDirty, setSeasonDirty] = useState(false);
    const [seriesDirty, setSeriesDirty] = useState(false);

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "name":
                setNameDirty(true);
                break;
            case "season":
                setSeasonDirty(true);
                break;
            case "series":
                setSeriesDirty(true);
                break;
            default:
        }
    };

    useEffect(() => {
        if (nameError || seasonError || seriesError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [nameError, seasonError, seriesError]);

    const submitData = (e) => {
        e.preventDefault();
        addToStorage("serial", { inputName, season, series, finished });
    };

    return (
        <form name={formName}>
            <fieldset>
                <legend>Добавить сериал/аниме</legend>
                <div className={styles.row}>
                    <label htmlFor="name" className={styles.col}>
                        название
                        {nameDirty && nameError && <div>{nameError}</div>}
                        <input
                            type="text"
                            name="name"
                            placeholder="название"
                            onChange={handleName}
                            onBlur={blurHandler}
                        />
                    </label>
                    <label htmlFor="season" className={styles.col}>
                        сезон
                        {seasonDirty && seasonError && <div>{seasonError}</div>}
                        <input
                            type="number"
                            name="season"
                            placeholder="сезон"
                            onChange={handleSeason}
                            onBlur={blurHandler}
                        />
                    </label>
                    <label htmlFor="series" className={styles.col}>
                        серия
                        {seriesDirty && seriesError && <div>{seriesError}</div>}
                        <input
                            type="number"
                            name="series"
                            placeholder="серия"
                            onChange={handleSeries}
                            onBlur={blurHandler}
                        />
                    </label>
                    <label htmlFor="isFinished" className={styles.col}>
                        завершен
                        <input
                            type="checkbox"
                            name="isFinished"
                            onChange={handleFinished}
                        />
                    </label>
                    <button
                        type="submit"
                        disabled={!formValid}
                        onClick={submitData}
                    >
                        добавить
                    </button>
                </div>
            </fieldset>
        </form>
    );
};

SeriesForm.prototype = {
    fromName: PropTypes.string.isRequired,
};
