import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';


const Navbar = ({ isAuth }) => {
    return (
        <nav>
            <Link to='/'>
                <FontAwesomeIcon icon={faHouse} />
                ホーム
            </Link>
            <Link to='/createpost'>
                <FontAwesomeIcon icon={faFilePen} />
                記事投稿
            </Link>
            {
                isAuth ?
                    <Link to='/logout'>
                        <FontAwesomeIcon icon={faArrowRightToBracket} />
                        ログアウト
                    </Link>
                    :
                    <Link to='/login'>
                        <FontAwesomeIcon icon={faArrowRightToBracket} />
                        ログイン
                    </Link>
            }

        </nav>
    )
}

export default Navbar