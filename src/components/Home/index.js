import {useState} from 'react'

import data from '../../data/productsData'

import Navbar from '../Navbar'

import ProductItem from '../ProductItem'

import Pagination from '../Pagination'

import './index.css'

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
    const paginationData = {
        prevPage, numbers, currentPage, changeCurrentPage, nextPage
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
                    <ul className="filters-container">
                        <li className="filter-list-item">
                            <p className="no-margin">Filter</p>
                            <p className="no-margin">CLEAR ALL</p>
                        </li>
                        <hr className="filter-hr" />
                        <li className="filter-list-item">
                            <p className="no-margin">Types of Plants</p>
                            <p className="no-margin">+</p>
                        </li>
                        <hr className="filter-hr" />
                        <li className="filter-list-item">
                            <p className="no-margin">Price</p>
                            <p className="no-margin">+</p>
                        </li>
                        <hr className="filter-hr" />
                        <li className="filter-list-item">
                            <p className="no-margin">Nursery</p>
                            <p className="no-margin">+</p>
                        </li>
                        <hr className="filter-hr" />
                        <li className="filter-list-item">
                            <p className="no-margin">Ideal Plants Location</p>
                            <p className="no-margin">+</p>
                        </li>
                        <hr className="filter-hr" />
                        <li className="filter-list-item">
                            <p className="no-margin">Indoor/Outdoor</p>
                            <p className="no-margin">+</p>
                        </li>
                        <hr className="filter-hr" />
                        <li className="filter-list-item">
                            <p className="no-margin">Maintenance</p>
                            <p className="no-margin">+</p>
                        </li>
                        <hr className="filter-hr" />
                        <li className="filter-list-item">
                            <p className="no-margin">Plant Size</p>
                            <p className="no-margin">+</p>
                        </li>
                        <hr className="filter-hr" />
                        <li className="filter-list-item">
                            <p className="no-margin">Water Schedule</p>
                            <p className="no-margin">+</p>
                        </li>
                        <hr className="filter-hr" />
                        <li className="filter-list-item">
                            <p className="no-margin">Color</p>
                            <p className="no-margin">+</p>
                        </li>
                        <hr className="filter-hr" />
                        <li className="filter-list-item">
                            <p className="no-margin">Seasonal</p>
                            <p className="no-margin">+</p>
                        </li>
                        <hr className="filter-hr" />
                        <li className="filter-list-item">
                            <p className="no-margin">Light Efficient</p>
                            <p className="no-margin">+</p>
                        </li>    
                    </ul>
                    <div className="products-section">
                        <div className="product-no-and-sort-container">
                            <p className="no-of-products">30 products</p>
                            
                        </div>
                        <ul className="products-container">
                            {records.map((item, index) => <ProductItem key={index} item={item}/>)}
                        </ul>
                        <Pagination paginationData={paginationData} />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home