import React from 'react'

export type IProduct = {
  id: number,
  name: string,
  year: number,
  make: string,
  price: number,
  mileage: number,
  location: string,
  fuel: string
  img?: string
}

type IProps = {
  product: IProduct
}

const Card = ({ product }: IProps) => {
  const { name, year, make, price, mileage, location, fuel, img } = product;

  const formatPrice = (price: number) => {
    const toStringPrice = [..."" + price]
    toStringPrice.splice(2, 0, ',')
    return toStringPrice.reduce((acc, curr) => acc+curr);
  }

  return (
    <div className='card'>
      <img src={`/img/${img?img:"card-default.jpeg"}`} alt="" className="card__img" />
      <div className="card__body">
        <h4 className="card__title">
          <span>{ name }</span>
          <span className="card__title-date">{year}</span>
        </h4>
        <div className="card__price">${ formatPrice(price) }.00</div>
        <div className="card__info">
          <div className="card__info-item">
            <h5 className="card__info-name">Make:</h5>
            <div className="card__info-value">{ make }</div>
          </div>
          <div className="card__info-item">
            <h5 className="card__info-name">Mileage:</h5>
            <div className="card__info-value">{ mileage }</div>
          </div>
          <div className="card__info-item">
            <h5 className="card__info-name">Location:</h5>
            <div className="card__info-value">{ location}</div>
          </div>
          <div className="card__info-item">
            <h5 className="card__info-name">Fuel type:</h5>
            <div className="card__info-value">{ fuel }</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card