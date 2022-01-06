import './Header.css'
import logo from '../../Assets/Images/logo.svg';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} className="logo" alt="logo" />
            <span className='title'>Crypto Stats</span>
            <img src={logo} className="logo" alt="logo" />
        </div>
    )
}

export default Header
