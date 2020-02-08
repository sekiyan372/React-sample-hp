import React from 'react'
import TopImage from '../image/sit-cat.jpg'
import { constants } from 'buffer'

const Image: React.FC = () => {
  return (
    <div>
      <img src={ TopImage } alt="topimage" className="topimg"/>
    </div>
  )
}

const Infomation: React.FC = () => {
  return (
    <div>
      <h2>新着情報</h2>
    </div>
  )
}

const About: React.FC = () => {
  return (
    <div>
      <h2>Cirkitとは？</h2>
      <p>
        2006年4月にCirKitは金沢工業大学のプロジェクト活動としてスタートしました。
        そして、2013年4月に株式会社として活動を開始します。
        CirKItは創立当初から今まで「地域の活性化」と「IT」の二つを柱とし、
        お客様に「ありがとう」と言っていただけるような活動を行っています。
      </p>
    </div>

  )
}

const TwitterWindow: React.FC = () => {
  return (
    <div>
      <h2>Twiterの窓</h2>
    </div>
  )
}


const Home: React.FC = () => {
  return (
    <div>
      <Image />
      <div className="topscript">
        <Infomation />
        <About />
        <TwitterWindow />
      </div>
    </div>
  )
}

export default Home
