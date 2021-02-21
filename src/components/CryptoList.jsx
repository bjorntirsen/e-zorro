import React from "react"
import { Link } from "react-router-dom"

export default function CryptoList({ value, id }) {
  //console.log(id) Inehåller alla namn på valutorna
  // console.log(value) Innehåller arryen med alla värden

  return (
    <div className="col-md-3 col-sm-4">
      <Link to={`/CryptoDetailPage/${id}`}>
        <div className="shadow p-3 my-2 bg-white rounded text-center">
          <div className="p-1 mb-2 bg-primary text-white">
            <h3>{value.name}</h3>
          </div>
          <img
            className="pt-4 pb-4"
            src={`./icons/${value.ticker}.png`}
            alt={`Icon of ${value.name}`}
          />

          <p>Price: {value.price}</p>
        </div>
      </Link>
    </div>
  )
}
