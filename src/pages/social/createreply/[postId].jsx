
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router'
import Link from 'next/link';
import withAuth from '../../components/withAuth';
import NavBar from '../../components/NavBar';
import ReplyPost from '../components/ReplyPost'

const CreateReply = () => {

    const router = useRouter();
    const { postId } = router.query; // Get the dynamic id from the URL

    const [replyForm, setReplyForm] = useState({
        reply: "",
        image: "",
    });

    const [error, setError] = useState('');
    const [cookies] = useCookies(['token']);
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useRouter();

    const fetchPost = async () => {

        try {
            console.log("id = ", postId)
            const response = await fetch(`http://localhost:4000/social/post/${postId}`, {
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

    useEffect(() => {

        fetchPost();

    }, [postId]);

    const handlePostReply = async () => {
        try {

            const response = await fetch(`http://localhost:4000/social/create/${postId}`, {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                },
                body: JSON.stringify(replyForm),
            });

            await response.json();

            if (response.ok) {
                console.log("reply created")

                // Redirect or perform an action on successful login
                navigate.replace(`/social/replies/${postId}`)
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Network error');
        }
    }

    const handleChange = (e) => {
        setReplyForm({
            ...replyForm, 
            [e.target.name]: e.target.value
        })
    };


  return (
    <div className="min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto" >
        <NavBar pageName="Social" />

        <br></br>

        <button onClick={() => router.back()} className="text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none">
            Go Back
        </button>

        <br></br>
        <br></br>

        <ReplyPost postid={postId} />

        <section className="mt-8">
            <h2 className="text-xl font-semibold mt-4 text-center">Create Reply</h2>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form onSubmit={(e) => {
                    e.preventDefault();
                    setError('');
                    handlePostReply()
                }} className="mt-4 space-y-4 mx-auto max-w-md">

                <input type='text' 
                name="reply"
                onChange={handleChange}
                placeholder="Reply to this post"
                value={replyForm.reply} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <input type="text" 
                name="image"
                onChange={handleChange} 
                placeholder='Upload an image'
                value={replyForm.image} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>
                <br></br>

                <input type="submit" 
                value="Submit" className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 cursor-pointer mx-auto block" />

            </form>
        </section>


    </div>
  )
}

export default withAuth(CreateReply)