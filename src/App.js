import { useEffect } from 'react'
import DepositSVG from './svg/dollar-sign-solid.svg'
import WithdrawSVG from './svg/wallet-solid.svg'

function App() {
  useEffect(() => {
    console.log(window.Telegram.WebApp)
  })


  return (
    <div>
      {/* <header>
        <p>TON Stake</p>
      </header> */}
      <div className="wrap">
        <div className="main">
          <div className="balance">
            <span>balance</span>
            <div className="flex-row flex-center">
              <p className="current">0</p>
              <p className="assets ml-5">TON</p>
            </div>
            <div className="buttons flex-row flex-evenly">
              <div className='flex-row align-center'>
                <img src={DepositSVG} alt="Dollar Logo" />
                <p className='ml-10'>Deposit</p>
              </div>
              <div className='flex-row align-center'>
                <img src={WithdrawSVG} alt="Withdraw Logo" />
                <p className='ml-10'>Withdraw</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App