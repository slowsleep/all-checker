import { useEffect, useState } from "react";
import { getFromStorage } from "../../utils/storageManager.js";

export const SeriesTable = () => {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        let seriesItems = getFromStorage("serial");
        if (series !== seriesItems) {
            setSeries(seriesItems);
        }
    }, []);

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
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {series.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.season}</td>
                            <td>{item.series}</td>
                            <td>
                                <input
                                    type="checkbox"
                                    defaultChecked={item.finished}
                                    disabled
                                />
                            </td>
                            <td>
                                <button>изменить</button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td>
                            <input type="text" placeholder="название" />
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
                            <button>сохранить</button>
                        </td>
                        <td>
                            <button>удалить</button>
                        </td>
                        <td>
                            <button>отменить</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};
