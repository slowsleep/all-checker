import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.css";
import { addToStorage } from "../../utils/storageManager";
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line react/prop-types
export const MovieForm = ({ formName }) => {
    const [title, setTitle] = useState("");
    const [part, setPart] = useState("");

    const [nameError, setNameError] = useState(true);
    const [partError, setPartError] = useState(false);

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

    const handlePart = (e) => {
        setPart(e.target.value);
        if (e.target.value < 0) {
            setPartError("Часть может быть только положительным числом");
        } else if (!e.target.value) {
            setPart(null);
        } else {
            setPartError(false);
        }
    };

    const handleFinished = (e) => {
        setFinished(e.target.value);
    };

    const [nameDirty, setNameDirty] = useState(false);
    const [partDirty, setPartDirty] = useState(false);

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "name":
                setNameDirty(true);
                break;
            case "part":
                setPartDirty(true);
                break;
            default:
        }
    };

    useEffect(() => {
        if (nameError || partError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [nameError, partError]);

    const submitData = (e) => {
        e.preventDefault();
        addToStorage("movie", { id: uuidv4(), title, part, finished });
    };

    return (
        <form name={formName} onSubmit={submitData}>
            <fieldset>
                <legend>Добавить фильм/мультфильм</legend>
                <div className={styles.row}>
                    <label htmlFor="name" className={styles.col}>
                        название
                        {nameDirty && nameError && <div>{nameError}</div>}
                        <input
                            type="text"
                            name="name"
                            placeholder="название"
                            onBlur={blurHandler}
                            onChange={handleName}
                        />
                    </label>
                    <label htmlFor="part" className={styles.col}>
                        часть
                        {partDirty && partError && (
                            <div
                                style={{
                                    minWidth: "100%",
                                    wordBreak: "break-word",
                                }}
                            >
                                {partError}
                            </div>
                        )}
                        <input
                            type="number"
                            name="part"
                            placeholder="часть"
                            onBlur={blurHandler}
                            onChange={handlePart}
                        />
                    </label>
                    <label htmlFor="isFinished" className={styles.col}>
                        завершен
                        <input
                            type="checkbox"
                            name="isFinished"
                            placeholder="Завершен"
                            onChange={handleFinished}
                        />
                    </label>
                    <button type="submit" disabled={!formValid}>
                        добавить
                    </button>
                </div>
            </fieldset>
        </form>
    );
};

MovieForm.prototype = {
    fromName: PropTypes.string.isRequired,
};
