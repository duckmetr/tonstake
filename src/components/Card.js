import React from 'react'

function Card() {
  return (
    <div className="card">
      <div className="card-header buysellcardheader">
          <ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
              <li className="nav-item pr-1">
                  <div  aria-selected="true">Купить VK Coins</div>
              </li>
              <li className="nav-item pl-1">
                  <div className="nav-link navbsrounded" id="pills-sell-tab" data-toggle="pill" href="" role="tab" aria-controls="pills-sell" aria-selected="false">Продать VK Coins</div>
              </li>
          </ul>
      </div>
    </div>
  )
}

export default Card