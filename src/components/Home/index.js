import {useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../Navbar'

import ProductItem from '../ProductItem'

import './index.css'

const obj = [
    {
        imageUrl: "https://res.cloudinary.com/dt0mcvcq3/image/upload/v1729336004/Chaperonw/Plant1_upfzrs.png",
        name: 'Monsterra',
        specification: 'Outdoor Plant, Low maintenance',
        rating: 4.9,
        originalPrice: 359,
        finalPrice: 299,
    },
    {
        imageUrl: "https://res.cloudinary.com/dt0mcvcq3/image/upload/v1729336010/Chaperonw/Plant2_jjlt0j.png",
        name: 'Dracaena',
        specification: 'Indoor Plant, High maintenance',
        rating: 4.3,
        originalPrice: 450,
        finalPrice: 249,
    },
    {
        imageUrl: "https://res.cloudinary.com/dt0mcvcq3/image/upload/v1729336018/Chaperonw/Plant3_qagiwt.png",
        name: 'Hygrophilia',
        specification: 'Indoor Plant, Low maintenance',
        rating: 4.9,
        originalPrice: 350,
        finalPrice: 199,
    },
    {
        imageUrl: "https://res.cloudinary.com/dt0mcvcq3/image/upload/v1729350295/Chaperonw/Potted_Banana_lybn6j.jpg",
        name: 'Potted Banana',
        specification: 'Indoor Plant, Low Maintenance',
        rating: 4.8,
        originalPrice: 599,
        finalPrice: 449,
    }
]

const data = Array(30).fill().map((_, index) => {
    const product = obj[index % obj.length];
    return { ...product, id: index + 1 };
});

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 6
    const lastIndex = currentPage*recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = data.slice(firstIndex, lastIndex)
    const totalNoOfPages = Math.ceil(data.length/recordsPerPage)
    const numbers = [...Array(totalNoOfPages + 1).keys()].slice(1)
    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(prev => prev-1)
        }
    }
    const changeCurrentPage = currentValue => {
        setCurrentPage(currentValue)
    }
    const nextPage = () => {
        if (currentPage !== totalNoOfPages) {
            setCurrentPage(prev => prev + 1)
        }
    }
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="search-bar-section">
                    <div className="search-items-container">
                        <img src="https://res.cloudinary.com/dt0mcvcq3/image/upload/v1729331449/Chaperonw/Search_Icon_cy2p2b.svg" alt="search icon" />
                        <input className="search-input-bar" placeholder="Search Plant"/>
                        <img src="https://res.cloudinary.com/dt0mcvcq3/image/upload/v1729331282/Chaperonw/Search_Icon_Flower_Big_aaylc6.png" alt="flower icon" className="search-flower-icon"/>
                    </div>
                </section>
                <section className="products-filter-section">
                    <div className="filters-container">
                        
                    </div>
                    <div className="products-section">
                        <div className="product-no-and-sort-container">
                            <p className="no-of-products">300 products</p>
                            
                        </div>
                        <ul className="products-container">
                            {records.map((item, index) => <ProductItem key={index} item={item}/>)}
                        </ul>
                        <nav aria-label="...">
                            <ul className="pagination">
                                <li className="page-item">
                                    <button type="button" className="page-link" href="#" onClick={prevPage}>Previous</button>
                                </li>
                                {numbers.map((item, index)=> 
                                (
                                    <li className={`page-item ${item===currentPage ? 'active': ''}`} key={index}>
                                        <button type="button" className="page-link" onClick={() => changeCurrentPage(item)}>{item}</button>
                                    </li>
                                ))}
                                <li className="page-item">
                                <button type="button" className="page-link" onClick={nextPage}>Next</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home