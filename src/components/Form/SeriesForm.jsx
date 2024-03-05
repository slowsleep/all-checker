import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.css";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux"
import { add } from "../../features/series/seriesSlice";

// eslint-disable-next-line react/prop-types
export const SeriesForm = ({ formName }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [season, setSeason] = useState("");
    const [episode, setEpisode] = useState("");

    const [nameError, setNameError] = useState(true);
    const [seasonError, setSeasonError] = useState(true);
    const [episodeError, setEpisodeError] = useState(true);

    const [finished, setFinished] = useState(false);

    const [formValid, setFormValid] = useState(false);

    const handleName = (e) => {
        setTitle(e.target.value);
        if (e.target.value) {
            setNameError(false);
        } else {
            setNameError("Название не может быть пустым");
        }
    };

    const handleSeason = (e) => {
        setSeason(e.target.value);
        if (e.target.value <= 0) {
            setSeasonError("Сезон может быть только положительным числом");
        } else if (!e.target.value) {
            setSeasonError(null);
        } else {
            setSeasonError(false);
        }
    };
    const handleEpisode = (e) => {
        setEpisode(e.target.value);
        if (e.target.value <= 0) {
            setEpisodeError("Серия может быть только положительным числом");
        } else if (!e.target.value) {
            setEpisodeError(null);
        } else {
            setEpisodeError(false);
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
        if (nameError || seasonError || episodeError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [nameError, seasonError, episodeError]);

    const submitData = (e) => {
        e.preventDefault();
        dispatch(add({ id: uuidv4(), title, season, episode, finished }));
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
                        {seriesDirty && episodeError && <div>{episodeError}</div>}
                        <input
                            type="number"
                            name="episode"
                            placeholder="серия"
                            onChange={handleEpisode}
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
