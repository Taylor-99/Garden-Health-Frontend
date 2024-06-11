
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router'
import Link from 'next/link';
import withAuth from '../../components/withAuth';
import NavBar from '../../components/NavBar.jsx';
import ReplyPost from '../components/ReplyPost.jsx'

const Replies = () => {

    const router = useRouter();
    const { postid } = router.query; // Get the dynamic id from the URL

    const [cookies] = useCookies(['token']);
    const [replyData, setReplyData] = useState([])

    const fetchPostReplies = async () => {

        try {
            console.log("getting replies")
            const response = await fetch(`http://localhost:4000/social/replies/${postid}`, {
                credentials: 'include',
                headers: {
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                }
            });
    
            const data = await response.json()
            setReplyData(data)
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    useEffect(() => {

        fetchPostReplies();

    }, [postid]);

    console.log(replyData)

  return (
    <div className="min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto">

        <NavBar pageName="Social" />

        <br></br>

        <button onClick={() => router.back()} className="text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none">
            Go Back
        </button>

        <br></br>
        <br></br>

        <ReplyPost postid={postid} />

        <ul className="max-w-screen-md w-full">
            {replyData && replyData.map((reply, index) => {
                return (
                    <li key={index} className="bg-white rounded-lg shadow-md p-4 mb-4 w-full" >
                        <div className="flex items-center mb-2" >
                            <img src={ reply.userImage } className="w-10 h-10 rounded-full mr-2" alt="User Avatar" />
                            <p  className="font-semibold" >{ reply.userName }</p>
                        </div>
                        <br></br>
                        <div className="max-w-screen-md w-full" >
                            <p className="mb-4 text-center" >{reply.reply}</p>
                            <img src={reply.image} className="w-full rounded-lg mb-4 mx-auto" />
                        </div>
                    </li>
                );
            })}
        </ul>

        <Link href={`/social/createreply/${postid}`} className="block p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300 text-center text-blue-500 hover:text-blue-700 font-semibold" >
            Create Reply for Post
        </Link>
    </div>
  )
}

export default withAuth(Replies)