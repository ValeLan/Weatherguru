import styles from "./App.module.css"
import Form from "./components/form/Form"
import useWeather from "./hooks/useWeather"
import WeatherDetails from "./components/weatherDetail/WeatherDetails"
import Spiner from './components/spiner/Spiner'
import Alert from "./components/alert/Alert"
function App() {

  const { weather, loading, notFound, fetchWeather, hasWeatherData } = useWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>
      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
        {loading && <Spiner/>}
        {hasWeatherData &&
          <WeatherDetails
            weather={weather}
          />
        }
        {notFound && <Alert>Ciudad no encontrada.</Alert>}

      </div>
    </>
  )
}

export default App
