import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className='container'>
      <h1>2024 파리 올림픽 메달 트래커</h1>
      <form className='input-group'>
        <div className='country'>
          <label htmlFor="">국가명</label>
          <input type="text" placeholder='국가 입력' />
        </div>
        <div className='gold-medal'>
          <label htmlFor="">금메달</label>
          <input type="text" />
        </div>
        <div className='silver-medal'>
          <label htmlFor="">은메달</label>
          <input type="text" />
        </div>
        <div className='bronze-medal'>
          <label htmlFor="">동메달</label>
          <input type="text" />
        </div>
        <button>국가 추가</button>
        <button>메달 추가</button>
      </form>
      <div>
        <div className='medal-list-title'>
          <span>국가명</span>
          <span>금메달</span>
          <span>은메달</span>
          <span>동메달</span>
          <span>액션</span>
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li>
            <button>삭제</button>
          </li>
        </ul>
      </div>
    </div>    
  )
}

export default App
