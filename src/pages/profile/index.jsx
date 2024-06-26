
import NavBar from '../components/NavBar.jsx'
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router'
import withAuth from '../components/withAuth.jsx';

const ShowProfile = () => {

    const backend_endpoint = process.env.NEXT_PUBLIC_BACKEND_URL

    const router = useRouter()
    const [cookies] = useCookies(['token']);

    const [userProfile, setUserProfile] = useState([]);

    
    useEffect(() => {

        const getProfile = async () => {
    
            try {
                const response = await fetch(`${backend_endpoint}/profile/`, {
                    credentials: 'include',
                    headers: {
                        Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                    }
                });
    
                const data = await response.json()
                setUserProfile(data[0])
            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        getProfile();

    }, [cookies.token]);

  return (
    <div className="min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto">
        <NavBar pageName = "Profile" />

        <br></br>

        <div className="flex flex-col items-center">
            <div className="mb-4">
                <img src={userProfile.image} className="w-24 h-24 rounded-full object-cover" alt="User Profile" />
            </div>
            <div className="text-center" >
                <p className="text-lg font-medium" >{userProfile.username}</p>
                <p className="text-sm text-gray-600" >{userProfile.firstName} {userProfile.lastName}</p>
                <p></p>
            </div>
        </div>
        <br></br>
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 text-center">
                <h2 className="text-xl font-semibold mb-4">About</h2>
                <div>
                    <p className="mb-2"><span className="font-semibold">Bio:</span> {userProfile.bio}</p>
                    <p className="mb-2"><span className="font-semibold">Location:</span> {userProfile.city}, {userProfile.state}</p>
                    <p className="mb-2"><span className="font-semibold">Gardening Experience:</span> {userProfile.gardeningExperience}</p>
                    <p className="mb-2"><span className="font-semibold">Level:</span> {userProfile.level}</p>
                </div>
            </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <input 
            type="button" 
            value="Delete Account"
            onClick={() => router.push(`/profile/delete`)}
            className={`bg-red-500 text-white px-4 py-2 rounded w-full`}
        />

    </div>
  )
}

export default withAuth(ShowProfile)