import './styles.css'
import React from 'react'

export default function Duck(){
    return (
        <main>
            <a className='duck'>duck</a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox=" -18 -1 50 20">
                <path d="M1 6 7 4C11 4 5 10 13 9A1.42 1.42 0 013 9T6 7Z" fill="#fff" stroke="white"/>
            </svg>
       </main>
    )
}