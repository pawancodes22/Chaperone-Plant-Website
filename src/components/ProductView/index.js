import {useNavigate, useParams} from 'react-router-dom'

import Navbar from '../Navbar'

import './index.css'

const ProductView = props => {
    const {name} = useParams()
    const navigate = useNavigate()
    const goBack = () => {
        navigate('/')
    }
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="thank-you-section">
                    <h1 className="thank-you-text">Thank you for viewing {name.toLowerCase()}</h1>
                    <button className="back-to-menu-btn" onClick={goBack}>Back</button>
                </section>
            </main>
        </>
    )
}

export default ProductView