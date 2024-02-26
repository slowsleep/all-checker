import './App.css'

function App() {

  const movieClickHandler = () => {
    // changeVisibleForm("addMovie")
    let form = document.querySelector(`form[name=addMovie]`)
    form.classList.toggle("hidden")
  }
  const serialClickHandler = () => {
    // changeVisibleForm("addSerial")
    let form = document.querySelector(`form[name=addSerial]`)
    form.classList.toggle("hidden")
  }

  return (
    <>
      <h1>Что вы хотите добавить?</h1>
      <button name="movie" onClick={movieClickHandler}>фильм/мультфильм</button>
      <button name="serial" onClick={serialClickHandler}>сериал/аниме</button>

      <form name="addMovie">
        <label htmlFor="addMovie">Добавить фильм/мультфильм</label>
        <br />
        <input type="text" name="name" placeholder="название" />
        <input type="number" name="part" placeholder="часть" />
        <input type="checkbox" name="isFinished" />
        <button type="submit">добавить</button>
      </form>

      <form name="addSerial">
        <label htmlFor="addMovie">Добавить сериал/аниме</label>
        <br />
        <input type="text" name="name" placeholder="название" />
        <input type="number" name="season" placeholder="сезон" />
        <input type="number" name="series" placeholder="серия" />
        <input type="checkbox" name="isFinished" />
        <button type="submit">добавить</button>
      </form>

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
            <td><input type="text" placeholder="название" /></td>
            <td><input type="number" placeholder="часть" /></td>
            <td><input type="number" placeholder="сезон" /></td>
            <td><input type="number" placeholder="серия" /></td>
            <td><input type="checkbox" /></td>
            <td><button>изменить</button></td>
            <td><button>удалить</button></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App
