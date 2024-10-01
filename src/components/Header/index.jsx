import './styles.css'
import { Link } from 'react-router-dom'

export default function Header(){
    return (
        <>
            <header>
                <div className='imagensHeader'>
                    <img className="rotate" src='https://cdn.inspireuplift.com/uploads/images/seller_products/31564/1703000651_RickSanchezConfusedface.png' alt='Logo do React' />
                    <h1>Rick and Morty<a>(amost)</a>Wiki</h1>
                    <img className="rotate2" src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a46868a6-3de3-4c82-b291-dcc524c1a7a7/d9nji2b-323c4a88-87ca-4fa6-af30-a952cc118117.png/v1/fill/w_1024,h_1093/morty_face_by_kushmastafresh_d9nji2b-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA5MyIsInBhdGgiOiJcL2ZcL2E0Njg2OGE2LTNkZTMtNGM4Mi1iMjkxLWRjYzUyNGMxYTdhN1wvZDluamkyYi0zMjNjNGE4OC04N2NhLTRmYTYtYWYzMC1hOTUyY2MxMTgxMTcucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.EIQ6eWGznx3_gcX4wSG6tafKZqBsBXbevERAaYfwk2k' alt='Logo do Vite' />
                </div>
            </header>
            <nav>
                <Link to='/'>Characters</Link>
                <Link to='/about'>In progress</Link>
                <Link to='/Home'>In progress</Link>
            </nav>
        </>
    )
}