import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { MovieForm } from "./components/Form/MovieForm";
import { SeriesForm } from "./components/Form/SeriesForm";
import { MovieSeriesFormVisible } from "./components/MovieSerialFormVisible/MovieSeriesFormVisible";
import { MovieTable } from "./components/Table/Movie/MovieTable";
import { SeriesTable } from "./components/Table/Series/SeriesTable";

function App() {
    return (
            <Layout>
                <MovieSeriesFormVisible />
                <MovieForm formName="addMovie" />
                <SeriesForm formName="addSerial" />
                <MovieTable/>
                <SeriesTable/>
            </Layout>
    );
}

export default App;
