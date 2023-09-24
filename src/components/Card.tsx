import React from 'react'

const Card = () => {
  return (
    <div className='card'>
      <img src="img/card-default.jpeg" alt="" className="card__img" />
      <div className="card__body">
        <h4 className="card__title">
          <span>Toyota Prius 5dr HB Two</span>
          <span className="card__title-date">2015</span>
        </h4>
        <div className="card__price">$14,499.00</div>
        <div className="card__info">
          <div className="card__info-item">
            <h5 className="card__info-name">Make:</h5>
            <div className="card__info-value">Toyota</div>
          </div>
          <div className="card__info-item">
            <h5 className="card__info-name">Mileage:</h5>
            <div className="card__info-value">1</div>
          </div>
          <div className="card__info-item">
            <h5 className="card__info-name">Location:</h5>
            <div className="card__info-value">Ames, IA</div>
          </div>
          <div className="card__info-item">
            <h5 className="card__info-name">Fuel type:</h5>
            <div className="card__info-value">Hybrid</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card