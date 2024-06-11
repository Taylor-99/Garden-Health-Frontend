
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
// import { useRouter } from 'next/router'
import { useRouter } from 'next/router'
import Link from 'next/link';
import withAuth from '../../components/withAuth';


const Post = ({socialPosts}, {username}) => {

    const router = useRouter();

    const [cookies] = useCookies(['token']);
    const [replyForm, setReplyForm] = useState({
        post: "",
    });

    const setLikes = async (postId, postLikes) => {

        try {
            const liked = postLikes?.includes(username);
            const method = liked ? 'DELETE' : 'PUT';

            const response = await fetch(`http://localhost:4000/social/likes/${postId}`, {
                method: method,
                credentials: 'include',
                headers: {
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                }
            });

        } catch (error) {
            console.error('Error:', error.message);
        }
    };

  return (
    <div>
        <ul className="max-w-screen-md w-full">
            {socialPosts && socialPosts.map((post, index) => {
                let likes = post.likes.length
                const liked = post.likes?.includes(username)
                return (
                    <li key={index} className="bg-white rounded-lg shadow-md p-4 mb-4 w-full" >
                        <div className="flex items-center mb-2" >
                            <img src={ post.userImage } className="w-10 h-10 rounded-full mr-2" alt="User Avatar" />
                            <p  className="font-semibold" >{ post.userName }</p>
                        </div>
                        <br></br>
                        <div className="max-w-screen-md w-full" >
                            <p className="mb-4 text-center" >{post.post}</p>
                            
                            <img src={post.image} className="w-full rounded-lg mb-4 mx-auto" />
                        </div>
                        <div className="flex justify-end" >
                            <input 
                                type='button' 
                                value={liked ? `Unlike ${likes}` : `Like ${likes}`}
                                onClick={() => setLikes(post._id, post.likes)}
                                className="bg-blue-500 text-white px-4 py-2 rounded mr-2 flex-grow" 
                                />
                            <input 
                                type='button' 
                                value='View Comments' 
                                className="bg-blue-500 text-white px-4 py-2 rounded flex-grow" 
                                onClick={() => router.push(`/social/replies/${post._id}`)}
                            />
                        </div>
                    </li>
                );
            })}
            </ul>
    </div>
  )
}

export default withAuth(Post)