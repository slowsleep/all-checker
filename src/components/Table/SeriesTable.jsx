export const SeriesTable = () => {
    return (
        <>
            <h2>Список сериалов</h2>
            <table>
                <thead>
                    <tr>
                        <td>название</td>
                        <td>часть</td>
                        <td>сезон</td>
                        <td>серия</td>
                        <td>просмотрен</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>название</td>
                        <td>сезон</td>
                        <td>серия</td>
                        <td>
                            <input type="checkbox" checked />
                        </td>
                        <td>
                            <button>изменить</button>
                        </td>
                        <td>
                            <button>удалить</button>
                        </td>
                    </tr>
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
                    </tr>
                </tbody>
            </table>
        </>
    );
};
