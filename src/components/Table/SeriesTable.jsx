import RowSeriesTable from "./RowSeriesTable.jsx";
import { useSelector } from "react-redux";
import { getSeries } from "../../features/series/seriesSlice.js";

export const SeriesTable = () => {
    const series = useSelector(getSeries);

    if (series.length) {
        return (
            <>
                <h2>Список сериалов</h2>
                <table>
                    <thead>
                        <tr>
                            <td>название</td>
                            <td>сезон</td>
                            <td>серия</td>
                            <td>просмотрен</td>
                        </tr>
                    </thead>
                    <tbody>
                        {series.map((item) => (
                            <RowSeriesTable key={item.id} singleSeries={item} />
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
};
