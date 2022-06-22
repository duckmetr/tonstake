import { useEffect } from 'react'
// import DepositSVG from './svg/dollar-sign-solid.svg'
// import WithdrawSVG from './svg/wallet-solid.svg'
import DepositPNG from './png/download.png'
import WithdrawPNG from './png/file-upload.png'
import SendPNG from './png/right-arrow.png'

function App() {
  useEffect(() => {
    console.log(window.Telegram.WebApp)
  })

  return (
    <div>
      <div className="wrap">
        <div className="main">
          <div className="balance">
            <p className='span p5'>Total balance</p>
            <div className="flex-row flex-center p10">
              <p className="current">0</p>
              <p className="assets ml-5">TON</p>
            </div>
          </div>
          <div className="buttons flex-row flex-around">
              <div className='align-center'>
                <div className="img">
                  <img src={DepositPNG} alt="Deposit Logo" />
                </div>
                <p>Deposit</p>
              </div>
              <div className='align-center'>
                <div className="img">
                  <img src={WithdrawPNG} alt="Withdraw Logo" />
                </div>
                <p>Withdraw</p>
              </div>
              <div className='align-center'>
                <div className="img">
                  <img src={SendPNG} alt="Send Logo" />
                </div>
                <p>Send</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App