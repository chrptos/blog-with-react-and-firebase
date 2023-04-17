import React from 'react'
import { useState } from 'react';
import './CreatePost.css';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';


const CreatePost = () => {
    const [title, setTitle] = useState();
    const [postText, setPostText] = useState();
    const navigate = useNavigate();

    const createPost = async () => {
        await addDoc(collection(db, "posts"), {
            title: title,
            postsText: postText,
            author: {
                username: auth.currentUser.displayName,
                id: auth.currentUser.uid
            }
        })

        navigate('/');
    }

    return (
        <div className='create__post__page'>
            <div className='post__container'>
                <h1>記事を投稿する</h1>
                <div className="input__post">
                    <div>タイトル</div>
                    <input type='text' placeholder='タイトルを記入' onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="input__post">
                    <div>投稿</div>
                    <textarea placeholder='投稿内容を記入' onChange={(e) => setPostText(e.target.value)} />
                </div>
                <button className='post__button' onClick={createPost}>投稿する</button>
            </div>
        </div>
    )
}

export default CreatePost