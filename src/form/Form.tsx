import { countries } from '../data/countries'
import styles from "./Form.module.css"

const Form = () => {
    return (
        <form action="" className={styles.form}>
            <div className={styles.field}>
                <label htmlFor="city">Ciudad:</label>
                <input type="text" id='city' name='city' placeholder='Ciudad' />
            </div>
            <div className={styles.field}>
                <label htmlFor="city">País:</label>
                <select>
                    <option value="">-- Seleccione un País --</option>
                    {countries.map(country => (
                        <option
                            value={country.code}
                            key={country.code}
                        >
                            {country.name}
                        </option>
                    ))}

                </select>
            </div>

            <input className={styles.submit} type="submit" value="Consultar clima" />
        </form>
    )
}

export default Form