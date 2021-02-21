import React, { useState, useEffect } from "react"
import CryptoList from "../components/CryptoList"

export default function CryptoPage() {
  const [cryptoList, setCryptoList] = useState(null)

  useEffect(() => {
    const url =
      "https://stock-market-dummy-default-rtdb.firebaseio.com/market-collector/crypto/.json"
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCryptoList(data.usd))
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="text-uppercase font-weight-bold pt-3">Crypto Currencies</h2>
          <h3 className="font-monospace">Click on a currency for details</h3>
        </div>
      </div>
      <div className="row">
        {!cryptoList && <p className="text-center">Loading data...</p>}
      
        {cryptoList &&
          Object.entries(cryptoList).map(
            (item, index) => {
              const key = index
              const id = item[0]
              const value = item[1]
              return <CryptoList id={id} value={value} key={key} />
              }
            )
          }
      </div>
    </div>
  )
}
