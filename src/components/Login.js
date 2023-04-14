import React from 'react'
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase.js";
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
    const navigate = useNavigate();
    const loginWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem('isAuth', true);
            console.log('test')
            setIsAuth(true);
            navigate('/');
        });
    }
    return (
        <div>
            <p>ログインして始める</p>
            <button onClick={loginWithGoogle}>Googleでログイン</button>
        </div>
    )
}

export default Login