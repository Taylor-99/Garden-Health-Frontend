
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
// import { useRouter } from 'next/router'
import { useRouter } from 'next/router'
import Link from 'next/link';
import withAuth from '../../components/withAuth';

const ReplyPost = ({postid}) => {
    const [cookies] = useCookies(['token']);
    const [post, setPost] = useState([]);

    const fetchPost = async () => {

        try {
            console.log("id = ", postId)
            const response = await fetch(`http://localhost:4000/social/post/${postid}`, {
                credentials: 'include',
                headers: {
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                }
            });

            const data = await response.json()
            setPost(data)
            setLoading(false)
        } catch (error) {
            console.error('Error:', error.message);
        }
    };
  return (
    <div>
        <div className="bg-white rounded-lg shadow-md p-4 mb-4 w-full" >
            <div className="flex items-center mb-2" >
                <img src={ post.userImage } className="w-10 h-10 rounded-full mr-2" alt="User Avatar" />
                <p  className="font-semibold" >{ post.userName }</p>
            </div>
            <br></br>
            <div className="max-w-screen-md w-full" >
                <p className="mb-4 text-center" >{post.post}</p>
                
                <img src={post.image} className="w-full rounded-lg mb-4 mx-auto" />
            </div>
        </div>
    </div>
  )
}

export default ReplyPost