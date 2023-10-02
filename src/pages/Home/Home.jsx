import Card from '../../components/Card';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { setSelectedCard } from '../../redux/reducers/cardslice'; // Adjust the import path
import { useDispatch } from 'react-redux';

function Home() {

    const cardData = useSelector(state => state.card.cards) // Get the cards from the store

    const [visible, setVisible] = useState(6) // Set the number of cards to be visible
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const navigate = useNavigate(); // Get the navigation function from react-router-dom



    // pagination 
    const [currentPage, setCurrentPage] = useState(1) // 1 is the default page number
    const cardsPerPage = 6; // 6 cards per page
    const lastIndex = currentPage * cardsPerPage; // 6
    const firstIndex = lastIndex - cardsPerPage; // 0
    const cards = cardData.slice(firstIndex, lastIndex); // 6 cards per page
    const npage = Math.ceil(cardData.length / cardsPerPage); // 10
    const pageNumbers = [...Array(npage + 1).keys()].slice(1); // [1,2,3,4,5,6,7,8,9,10]) ;



    // Change page
    const changeCPage = (e) => {
        setCurrentPage(Number(e.target.textContent))
    }

    // Get previous page    
    const getPrevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }

    }

    // Get next page
    const getNextPage = () => {

        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }





    // Filter cards based on search input (case-insensitive)
    const filteredCards = cardData
        .filter(item => {
            const itemName = item.car || ''; // Ensure itemName is defined
            return search.trim() === '' || itemName.toLowerCase().includes(search.toLowerCase());
        })
        .slice(0, visible);




    return (
        <>

            < div className="container-fluid">

                <nav className="navbar navbar-light sticky-top nav-bg-color rounded-pill">
                    <div className="d-flex px-4">
                        <form className="form-inline form-control  rounded-pill d-flex  justify-content-center align-items-center ">
                            <input
                                className="mr-sm-  me-2"
                                type="search" placeholder="Search..."
                                aria-label="Search" style={{ outline: 'none', border: 'none', width: '15rem' }}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)} />

                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{ outline: 'none', border: 'none' }}> <i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                </nav>


                <div className="row " >
                    <div className="col " >

                        {/* card container */}
                        <div className="row  " >
                            <div className="col-12 " >
                                <div className="row  mt-3 d-flex justify-content-center gap-5" >

                                    {/* card */}
                                    {cards && filteredCards.map(item => (
                                        <div
                                            key={item.id}
                                            onClick={() => {
                                                dispatch(setSelectedCard(item.id));
                                                navigate(`/card/${item.id}`);
                                            }}
                                            className="col col-sm-6 col-lg-3 mt-2 rounded box-shadow-1"
                                            style={{ height: '450px' }}
                                        >
                                            <Card item={item} />
                                        </div>
                                    ))}
                                    {/* card end */}

                                </div>


                            </div>

                        </div>
                        {/* card container end */}
                    </div>

                    <nav aria-label="Page navigation example ">
                        <ul className="pagination mt-4  d-flex justify-content-end">
                            <li onClick={getPrevPage} className="page-item"><a className="page-link" href="#">Previous</a></li>
                            {
                                pageNumbers.map((number, i) => (
                                    <li className={`page-item ${currentPage === number ? 'active' : ''}`} key={i}>
                                        <a href='#' className='page-link' onClick={changeCPage}>
                                            {number}  </a>
                                    </li>
                                ))
                            }
                            <li onClick={getNextPage} className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>


                </div>
            </div>
        </>
    );
}

export default Home;