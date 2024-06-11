
import NavBar from '../../components/NavBar.jsx'
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router'
import withAuth from '../../components/withAuth.jsx';

const CreatePost = () => {

    const [postFormData, setPostFormData] = useState({
        post: "",
        image: "",
    }); 

    const [error, setError] = useState('');
    const [cookies] = useCookies(['token']);

    const router = useRouter();

    const handleCreatePost = async () => {
        try {

            console.log("Sending data")
            const response = await fetch('http://localhost:4000/social/create', {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                },
                body: JSON.stringify(postFormData),
            });

            await response.json();

            if (response.ok) {
                console.log("post created")

                // Redirect or perform an action on successful login
                router.replace('/social')
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Network error');
        }
    }

    const handleChange = (e) => {
        setPostFormData({
            ...postFormData, 
            [e.target.name]: e.target.value
        })
    }

  return (
    <div className="min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto">
        <NavBar pageName='Social' />

        <br></br>

        <button onClick={() => router.back()} className="text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none">
            Go Back
        </button>

        <br></br>
        <br></br>

        <section className="mt-8">

            <h2 className="text-xl font-semibold mt-4 text-center">Create Post</h2>

            {error && <p className="text-red-500">{error}</p>}

            <form onSubmit={(e) => {
                    e.preventDefault();
                    setError('');
                    handleCreatePost()
                }} className="mt-4 space-y-4 mx-auto max-w-md">

                <input type='text' 
                name="post"
                onChange={handleChange}
                placeholder="What's on your Mind? Share your ideas, events or achievements"
                value={postFormData.post} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <input type="text" 
                name="image"
                onChange={handleChange} 
                placeholder='Upload an image'
                value={postFormData.image} 
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

export default withAuth(CreatePost);