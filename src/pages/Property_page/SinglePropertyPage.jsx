// CardPropertyPage.js
import React from 'react';
import { useSelector } from 'react-redux';

function SinglePropertyPage() {
  const selectedCard = useSelector(state => state.card.selectedCard);

  if (!selectedCard) {
    return <div>Card not found</div>;
  }

  return (
  <>
  <div className='d-flex justify-content-center align-items-center'>
  <div className="col col-sm-6 col-lg-3 rounded box-shadow-1" style={{ height: '500px' }}>
  <div className="row d-flex flex-column " style={{
                height:
                    '100%'
            }} >
                <div className="col">
                    <div className="row  " style={{ height: '50%' }}>
                        <div className="col-12 d-flex justify-content-center p-2 ">
                            <img src={selectedCard.image} className="img-fluid rounded" alt="..." style={{ width: '100%', height: '90%' }}></img>
                        </div>

                    </div>


                    <div className="row d-flex justify-content-center m-0 " style={{ height: '50%' }}>
                     
                     <div className='col d-flex flex-row justify-content-between'>
                     <span className='fs-4'>{selectedCard.car}</span>
                     <span className='fs-4'>{selectedCard.date}</span>
                     </div>

                        <div className='row d-flex align-items-center  text-center' style={{ width: '100%' }}>
                        <div className='col'>
                                <i className="fa-solid fa-user col me-2 "></i>
                                <span >{selectedCard.average}</span>
                            </div>

                            <div className='col '>
                                <i className="fa-solid fa-gas-pump col me-2 "></i>
                                <span >{selectedCard.fuel}</span>
                            </div>
                        </div>


                        <div className='row d-flex align-items-center  text-center' style={{ width: '100%' }}>

                            <div className='col  '>
                                <i className="fa-solid fa-car col me-2 "></i>
                                <span >{selectedCard.average}</span>
                            </div>

                            <div className='col '>
                                <i className="fa-solid fa-gear col me-2"></i>
                                <span >{selectedCard.automatic}</span>
                            </div>
                        </div>



                        <div className='row d-flex align-items-center ' style={{ width: '100%' }}>

                            <div className=" col ">${selectedCard.rent}/month</div>
                            <div className=" col  d-flex justify-content-end">
                                <button type="button" className="btn btn-outline-primary rounded-pill">Rent Now</button>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
            </div>
            </div>
  </>
  );
}

export default SinglePropertyPage;
