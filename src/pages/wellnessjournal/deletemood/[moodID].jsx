
import NavBar from '../../components/NavBar';
import { useCookies } from 'react-cookie';
import withAuth from '../../components/withAuth';
import { useRouter } from 'next/router';

const Delete = () => {

    const backend_endpoint = process.env.NEXT_PUBLIC_BACKEND_URL

    const router = useRouter();
    const { moodID } = router.query; // Get the dynamic id from the URL

    const [cookies] = useCookies(['token']);

    const handleDelete = async () => {

        try {
            const response = await fetch(`${backend_endpoint}/mood/${moodID}`, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                }
            });
    
            if(response.ok){
                router.replace('/wellnessjournal/mood');
            }

        } catch (error) {
            console.error('Error:', error.message);
        }

    }


  return (
    <div>
        <div className="min-h-screen flex-col items-center justify-center bg-gray-100" >
            <NavBar pageName="Profile" />

            <button onClick={() => router.back()} className="text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none">
            Go Back
            </button>

            <div className="flex flex-col items-center justify-center h-screen" >
                <h1 className="text-2xl font-bold mb-8" >Are you sure you want to delete this Mood Log?</h1>

                <div className="flex space-x-4" >
                    <input type='button' value='Yes' onClick={() => handleDelete()} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" />
                    <input type='button' value='No' onClick={() => router.replace('/wellnessjournal/mood')} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default withAuth(Delete)