import viteLogo from '../../../public/vite.svg'
import reactLogo from '../../assets/react.svg'
import './styles.css'
import { Link } from 'react-router-dom'

export default function Header(){
    return (
        <>
            <header>
                <h1>Minha Página React</h1>
                <img className="rotate" src={reactLogo} alt='Logo do React' />
                <img className="rotate2" src={viteLogo} alt='Logo do Vite' />
            </header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/testePage'>Teste</Link>
            </nav>
        </>
    )
}