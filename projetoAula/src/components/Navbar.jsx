import { link } from 'react-router-dom';

export default function Navbar(){
    return(
        <nav style={{
            display: 'flex',
            gap: '16px',
            padding: '12px',
            background: '#333',
        }}>
            <link to="/" style={{color: 'white', textDecoration: 'none'}}>
            Home
            </link>
            <link to="/sobre" style={{color: 'white', textDecoration: 'none'}}>
            Sobre
            </link>
        </nav>
    )
}


module.exports = Navbar;