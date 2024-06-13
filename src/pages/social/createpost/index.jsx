
import NavBar from '../../components/NavBar.jsx'
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router'
import withAuth from '../../components/withAuth.jsx';

const CreatePost = () => {

    const [postFormData, setPostFormData] = useState({
        post: "" }); 
    const [file, setFile] = useState(null);

    const [error, setError] = useState('');
    const [cookies] = useCookies(['token']);

    const router = useRouter();

    const handleCreatePost = async () => {
        try {

            const formData = new FormData();
            formData.append('image', file);
            formData.append('post', postFormData.post)

            const response = await fetch('http://localhost:4000/social/create', {
                method: 'POST',
                credentials: "include",
                headers: {
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                },
                body: formData,
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
            console.log(err)
            setError('Network error');
        }
    }

    const handleChange = (e) => {
        setPostFormData({
            ...postFormData, 
            [e.target.name]: e.target.value
        })
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]); // Get the first file from the file input
      };

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

            <form 
                encType = 'multipart/formdata'
                onSubmit={(e) => {
                e.preventDefault();
                setError('');
                handleCreatePost()
            }} className="mt-4 space-y-4 mx-auto max-w-md">

                <textarea
                name="post"
                onChange={handleChange}
                placeholder="What's on your Mind? Share your ideas, events or achievements"
                value={postFormData.post} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <label htmlFor="image" className="block" >Upload an image (optional): </label>
                <input type="file" 
                name="image"
                onChange={handleFileChange} 
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