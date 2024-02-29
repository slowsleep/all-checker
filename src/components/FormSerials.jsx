import { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import styles from "./Form.module.css"

// eslint-disable-next-line react/prop-types
export const FormSerial = ({ formName }) => {
  const [inputName, setInputName] = useState("")
  const [season, setSeason] = useState("")
  const [series, setSeries] = useState("")

  const [nameError, setNameError] = useState(true)
  const [seasonError, setSeasonError] = useState(true)
  const [seriesError, setSeriesError] = useState(true)

  const [finished, setFinished] = useState(false)

  const [formValid, setFormValid] = useState(false)
  const [data, setData] = useState(null)

  const nameChange = (e) => {
    setInputName(e.target.value)
    if (e.target.value) {
      setNameError(false)
    } else {
      setNameError("Название не может быть пустым")
    }
  }

  const seasonChange = (e) => {
    setSeason(e.target.value)
    if (e.target.value <= 0) {
      setSeasonError("Часть может быть только положительным числом")
    } else if (!e.target.value) {
      setSeasonError(null)
    } else {
      setSeasonError(false)
    }
  }
  const seriesChange = (e) => {
    setSeries(e.target.value)
    if (e.target.value <= 0) {
      setSeriesError("Часть может быть только положительным числом")
    } else if (!e.target.value) {
      setSeriesError(null)
    } else {
      setSeriesError(false)
    }
  }

  const finishedChange = (e) => {
    setFinished(e.target.value)
  }

  const [nameDirty, setNameDirty] = useState(false)
  const [seasonDirty, setSeasonDirty] = useState(false)
  const [seriesDirty, setSeriesDirty] = useState(false)

  const blurHandler = (e) => {
      switch(e.target.name) {
          case "name":
              setNameDirty(true)
              break
          case "season":
              setSeasonDirty(true)
              break
          case "series":
              setSeriesDirty(true)
              break
          default:
      }
  }

  useEffect(() => {
    if(nameError || seasonError || seriesError) {
        setFormValid(false)
    } else {
        setFormValid(true)
    }

  }, [nameError, seasonError, seriesError])

  const submitData = (e) => {
    e.preventDefault()
    setData(JSON.stringify({inputName, season, series, finished}))
    // с первого раза добавляет null, а со второго уже содержимое state data
    // почему?
    window.localStorage.setItem("serial", data)
  }

  return (
    <form name={formName}>
      <fieldset>

        <legend>Добавить сериал/аниме</legend>
        <div className={styles.row}>

          <label htmlFor="name" className={styles.col}>
            название
            {nameDirty && nameError && <div>{nameError}</div>}
            <input
              type="text"
              name="name"
              placeholder="название"
              onChange={nameChange}
              onBlur={blurHandler}
            />
          </label>
          <label htmlFor="season" className={styles.col}>
            сезон
            {seasonDirty && seasonError && <div>{seasonError}</div>}
            <input
              type="number"
              name="season"
              placeholder="сезон"
              onChange={seasonChange}
              onBlur={blurHandler}
            />
          </label>
          <label htmlFor="series" className={styles.col}>
            серия
            {seriesDirty && seriesError && <div>{seriesError}</div>}
            <input
              type="number"
              name="series"
              placeholder="серия"
              onChange={seriesChange}
              onBlur={blurHandler}
            />
          </label>
          <label htmlFor="isFinished" className={styles.col}>
            завершен
            <input
              type="checkbox"
              name="isFinished"
              onChange={finishedChange}
            />
          </label>
          <button type="submit" disabled={!formValid} onClick={submitData}>добавить</button>
        </div>
      </fieldset>
    </form>
  )
}

FormSerial.prototype = {
  fromName: PropTypes.string.isRequired,
}
