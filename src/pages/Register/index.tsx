import './Register.css'
import skull from '../../assets/deer-skull.png'
import { FormsRegister } from '../../components/FormsRegister'

export const Register = () => {
    return (
        <section className='register-section'>
            <div className='register-container'>
                <img className='register-image1' src={skull} />
                <div className='register-formulario'>
                    <h2>Create an account</h2>
                    <FormsRegister />
                </div>
            </div>
        </section>
    )
}