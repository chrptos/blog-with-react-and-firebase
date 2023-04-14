import React from 'react'
import './CreatePost.css';

const CreatePost = () => {
    return (
        <div className='create__post__page'>
            <div className='post__container'>
                <h1>記事を投稿する</h1>
                <div className="input__post">
                    <div>タイトル</div>
                    <input type='text' placeholder='タイトルを記入' />
                </div>
                <div className="input__post">
                    <div>投稿</div>
                    <textarea placeholder='投稿内容を記入' />
                </div>
                <button className='post__button'>投稿する</button>
            </div>
        </div>
    )
}

export default CreatePost