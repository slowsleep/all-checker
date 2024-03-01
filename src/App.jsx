import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { MovieForm } from "./components/Form/MovieForm";
import { SeriesForm } from "./components/Form/SeriesForm";
import { MovieSerialFormVisible } from "./components/MovieSerialFormVisible/MovieSerialFormVisible";

function App() {
    return (
            <Layout>
                <MovieSerialFormVisible />
                <MovieForm formName="addMovie" />
                <SeriesForm formName="addSerial" />

                <table>
                    <thead>
                        <tr>
                            <td>название</td>
                            <td>часть</td>
                            <td>сезон</td>
                            <td>серия</td>
                            <td>просмотрен</td>
                            <td>изменить</td>
                            <td>удалить</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="text" placeholder="название" />
                            </td>
                            <td>
                                <input type="number" placeholder="часть" />
                            </td>
                            <td>
                                <input type="number" placeholder="сезон" />
                            </td>
                            <td>
                                <input type="number" placeholder="серия" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <button>изменить</button>
                            </td>
                            <td>
                                <button>удалить</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Layout>
    );
}

export default App;
