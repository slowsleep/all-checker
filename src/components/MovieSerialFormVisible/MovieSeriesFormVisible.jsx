import styles from "./MovieSeriesFormVisible.module.css"

export const MovieSeriesFormVisible = () => {
    const movieClickHandler = () => {
        let form = document.querySelector(`form[name=addMovie]`);
        form.classList.toggle("hidden");
    };
    const seriesClickHandler = () => {
        let form = document.querySelector(`form[name=addSeries]`);
        form.classList.toggle("hidden");
    };
    return (
        <div className={styles.movieseriesformvisible}>
            <h1>Что вы хотите добавить?</h1>
            <button name="movie" onClick={movieClickHandler}>
                фильм/мультфильм
            </button>
            <button name="series
            " onClick={seriesClickHandler}>
                сериал/аниме
            </button>
        </div>
    );
};
