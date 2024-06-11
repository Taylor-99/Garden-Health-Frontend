
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import withAuth from '../../components/withAuth';

const DeletePlant = () => {

    const router = useRouter();
    const { plantId } = router.query; // Get the dynamic id from the URL

    const [cookies] = useCookies(['token']);
    const [error, setError] = useState('');

    const handleDelete = async () => {

        try {
            const response = await fetch(`http://localhost:4000/garden/details/${plantId}`, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                }
            });
    
            if(response.ok){
                router.replace('/plantjournal/garden');
            }else {
                setError(data.message);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }

    }

    return (
        <div className="min-h-screen flex-col items-center justify-center bg-gray-100" >
            <NavBar pageName="Plant Journal" />

            <button onClick={() => router.back()} className="text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none">
            Go Back
            </button>

            <div className="flex flex-col items-center justify-center h-screen" >
                <h1 className="text-2xl font-bold mb-8" >Are you sure you want to delete this plant?</h1>

                <div className="flex space-x-4" >
                    <input type='button' value='Yes' onClick={() => handleDelete()} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" />
                    <input type='button' value='No' onClick={() => router.replace(`/plantjournal/details/${plantId}`)} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded" />
                </div>
            </div>

        </div>
    )
}

export default withAuth(DeletePlant)