import styles from "./MovieSerialFormVisible.module.css"

export const MovieSerialFormVisible = () => {
    const movieClickHandler = () => {
        let form = document.querySelector(`form[name=addMovie]`);
        form.classList.toggle("hidden");
    };
    const serialClickHandler = () => {
        let form = document.querySelector(`form[name=addSerial]`);
        form.classList.toggle("hidden");
    };
    return (
        <div className={styles.movieserialformvisible}>
            <h1>Что вы хотите добавить?</h1>
            <button name="movie" onClick={movieClickHandler}>
                фильм/мультфильм
            </button>
            <button name="serial" onClick={serialClickHandler}>
                сериал/аниме
            </button>
        </div>
    );
};
