import React, { useEffect, useState } from 'react'
import './Home.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Home = () => {
    const [postList, setPostList] = useState();
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(collection(db, "posts"))
            // console.log(data.docs.map((doc) => ({ doc })))
            // ドキュメントに対してdata()を使うと簡単にデータが取得できる。
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getPosts();
        // console.log(postList)
    }, []);
    return (
        <div className='homePage'>
            {postList.map((post) => {
                return (
                    <div className="post__contents">
                        <div className="post__header">
                            <h1>{post.title}</h1>
                        </div>
                        <div className="post__text__container">
                            {post.postsText}
                        </div>
                        <div className="name__and__delete__button">
                            <h3>{post.author.username}</h3>
                            <button>削除</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Home