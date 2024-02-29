import './App.css'
import { FormMovie } from './components/FormMovie'
import { FormSerial } from './components/FormSerials'

function App() {

  const movieClickHandler = () => {
    let form = document.querySelector(`form[name=addMovie]`)
    form.classList.toggle("hidden")
  }
  const serialClickHandler = () => {
    let form = document.querySelector(`form[name=addSerial]`)
    form.classList.toggle("hidden")
  }

  return (
    <>
      <h1>Что вы хотите добавить?</h1>
      <button name="movie" onClick={movieClickHandler}>фильм/мультфильм</button>
      <button name="serial" onClick={serialClickHandler}>сериал/аниме</button>

      <FormMovie formName="addMovie"/>
      <FormSerial formName="addSerial" />

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
