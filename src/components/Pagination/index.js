import 'bootstrap/dist/css/bootstrap.min.css';

const Pagination = props => {
    const {paginationData} = props
    const {prevPage, numbers, currentPage, changeCurrentPage, nextPage} = paginationData
    return (
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
)}
export default Pagination