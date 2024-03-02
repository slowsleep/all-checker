export const MovieTable = () => {
    return (
        <>
            <h2>Список фильмов</h2>
            <table>
                <thead>
                    <tr>
                        <td>название</td>
                        <td>часть</td>
                        <td>просмотрен</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>название</td>
                        <td>часть</td>
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
                            <input type="number" placeholder="часть" />
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
