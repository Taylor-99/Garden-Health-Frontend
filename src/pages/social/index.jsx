
import NavBar from '../components/NavBar.jsx'
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import withAuth from '../components/withAuth.jsx'
import Posts from './components/Post.jsx'

const Socail = () => {

    const [isLoading, setLoading] = useState(true)
    const [cookies] = useCookies(['token']);

    const [socialPosts, setSocialPosts] = useState([]);
    const [username, setUsername] = useState("")

    const fetchPosts = async () => {

        try {
            const response = await fetch('http://localhost:4000/social', {
                credentials: 'include',
                headers: {
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                }
            });

            const data = await response.json()
            setSocialPosts(data)
            setLoading(false)
        } catch (error) {
            console.error('Error:', error.message);
        }
    };
    useEffect(() => { 
        const userName = cookies.user; 
        if (userName) { setUsername(userName); }
     }, []);

    useEffect(() => {

        fetchPosts();

    }, []);

    console.log(socialPosts)

  return (
    <div className="min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto">
        <NavBar pageName='Social' />

        <br></br>

        <Link href="/social/createpost" className="block p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300 text-center text-blue-500 hover:text-blue-700 font-semibold">
             Create a Post
        </Link>

        <br></br>

        <div className="flex justify-center" >
            <Posts socialPosts={socialPosts} username={username} />
        </div>
        
    </div>
  )
}

export default withAuth(Socail)