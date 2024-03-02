import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { MovieForm } from "./components/Form/MovieForm";
import { SeriesForm } from "./components/Form/SeriesForm";
import { MovieSerialFormVisible } from "./components/MovieSerialFormVisible/MovieSerialFormVisible";
import { MovieTable } from "./components/Table/MovieTable";
import { SeriesTable } from "./components/Table/SeriesTable";

function App() {
    return (
            <Layout>
                <MovieSerialFormVisible />
                <MovieForm formName="addMovie" />
                <SeriesForm formName="addSerial" />
                <MovieTable/>
                <SeriesTable/>
            </Layout>
    );
}

export default App;
