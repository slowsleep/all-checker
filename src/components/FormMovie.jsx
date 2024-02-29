import { useState, useEffect } from "react"
import PropTypes from 'prop-types';
import styles from "./Form.module.css"

// eslint-disable-next-line react/prop-types
export const FormMovie = ({ formName }) => {
  const [inputName, setInputName] = useState("")
  const [part, setPart] = useState("")

  const [nameError, setNameError] = useState(true)
  const [partError, setPartError] = useState(false)

  const [finished, setFinished] = useState(false)

  const [formValid, setFormValid] = useState(false)
  const [data, setData] = useState("")

  const nameChange = (e) => {
    console.log(e.target.value)
    setInputName(e.target.value)
    if (e.target.value) {
      setNameError(false)
    } else {
      setNameError("Название не может быть пустым")
    }
  }

  const partChange = (e) => {
    console.log(e.target.value)
    console.log(typeof e.target.value)
    setPart(e.target.value)
    if (e.target.value <= 0) {
      setPartError("Часть может быть только положительным числом")
    } else if (!e.target.value) {
      setPart(null)
    } else {
      setPartError(false)
    }
  }

  const finishedChange = (e) => {
    console.log("finished ", e.target.value)
    setFinished(e.target.value)
    console.log(nameError, partError)
  }

  const [nameDirty, setNameDirty] = useState(false)
  const [partDirty, setPartDirty] = useState(false)

  const blurHandler = (e) => {
      switch(e.target.name) {
          case "name":
              setNameDirty(true)
              break
          case "part":
              setPartDirty(true)
              break
          default:
      }
  }

  useEffect(() => {
    if(nameError || partError) {
        setFormValid(false)
    } else {
        setFormValid(true)
    }

  }, [nameError, partError])

  const submitData = (e) => {
    e.preventDefault()
    setData(JSON.stringify({inputName, part, finished}))
    // с первого раза добавляет null, а со второго уже содержимое state data
    // почему?
    window.localStorage.setItem("movie", data)
  }

  return (
    <form name={formName}>
      <fieldset>
        <legend>Добавить фильм/мультфильм</legend>
        <div className={styles.row}>
          <label htmlFor="name" className={styles.col}>
            название
            {nameDirty && nameError && <div>{nameError}</div>}
            <input
              type="text"
              name="name"
              placeholder="название"
              onBlur={blurHandler}
              onChange={nameChange}
            />
          </label>
          <label htmlFor="part" className={styles.col}>
            часть
            {partDirty && partError && <div style={{minWidth: "100%", wordBreak: "break-word"}}>{partError}</div>}
            <input
              type="number"
              name="part"
              placeholder="часть"
              onBlur={blurHandler}
              onChange={partChange}
            />
          </label>
          <label htmlFor="isFinished" className={styles.col}>
            завершен
            <input
              type="checkbox"
              name="isFinished"
              placeholder="Завершен"
              onChange={finishedChange}
            />
          </label>
          <button type="submit" disabled={!formValid} onClick={submitData}>добавить</button>
        </div>
      </fieldset>
    </form>
  )
}

FormMovie.prototype = {
  fromName: PropTypes.string.isRequired,
}
