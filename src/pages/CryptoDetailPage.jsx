import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function CryptoDetailPage(props) {
  const [cryptoDetail, setCryptoDetail] = useState(null)

  const id = props.match.params.id
  useEffect(() => {
    const url = `https://stock-market-dummy-default-rtdb.firebaseio.com/market-collector/crypto/usd/${id}.json`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCryptoDetail(data))
  }, [id])

  return (
    <div className="container bg-light p-4 shadow mt-3">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="text-uppercase font-weight-bold">Crypto Currency</h1>
        </div>
      </div>

      {!cryptoDetail && <p>Loading Data</p>}
      {cryptoDetail && (
        <>
          <div className="row">
            <div className="col-md-12">
              <h2 className="p-3 text-center text-uppercase bg-primary text-light shadow-sm serif">{cryptoDetail.name}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex">
              <img
                className="img-fluid mx-auto mb-2 p-4"
                src={`../icons/${cryptoDetail.ticker}.png`}
                alt={`Icon of ${cryptoDetail.name}`}
              />
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-12 my-auto">
              <p>Market: {cryptoDetail.market}</p>
              <p>Price: {cryptoDetail.price}</p>
              <p>Today: {cryptoDetail.today}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <Link to="/crypto">
                <button className="btn btn-primary mt-3">Go back</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
