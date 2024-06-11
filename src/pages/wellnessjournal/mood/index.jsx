
import NavBar from '../../components/NavBar.jsx'
import WellnessNavBar from '../components/WellnessNavBar.jsx'
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import withAuth from '../../components/withAuth';
import { useRouter } from 'next/router'

const Mood = () => {
    // const [isLoading, setLoading] = useState(true)
    const [cookies] = useCookies(['token']);

    const [moodLogData, setMoodLogData] = useState([]);

    const router = useRouter();

    const fetchMoodLogs = async () => {

        try {
            const response = await fetch('http://localhost:4000/mood', {
                credentials: 'include',
                headers: {
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                }
            });

            const data = await response.json()
            setMoodLogData(data)
            // setLoading(false)
        } catch (error) {
            console.error('Error:', error.message);
        }
    };
    
    useEffect(() => {

        fetchMoodLogs();

    }, []);

    function setDate(dateString){
        
        // Create a Date object from the date string
        const date = new Date(dateString);
        
        // Get the individual components of the date
        const year = date.getFullYear();
        const month = date.getMonth() + 1; 
        const day = date.getDate();
        
        let updatedDate = `${month}/${day}/${year}`
        
        return updatedDate
    }

    console.log(moodLogData)

  return (
    <div className="min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto">
        <NavBar pageName='Wellness Journal'/>
        <br></br>
        <WellnessNavBar />
        <br></br>

        <h1>Mood Log</h1>

        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" >

            {moodLogData && moodLogData.map((mood, index) => {
                return (
                    <li key={index} className="bg-white p-4 rounded-lg shadow-md w-45" >

                        <h2 className="text-xl font-semibold mb-2">Mood Log: {setDate(mood.createdAt)}</h2>

                        <p className="mb-2">Overall Mood: {mood.overallMood}</p>
                        <p className="mb-2">Energy Mood: {mood.energyLevel}</p>
                        <p className="mb-2">Stress Mood: {mood.stressLevel}</p>
                        <br></br>

                        <input 
                            type="button" 
                            value="Delete Mood"
                            onClick={() => router.push(`/wellnessjournal/deletemood/${mood._id}`)}
                            className={`bg-red-500 text-white px-4 py-2 rounded w-full`}
                        />
                    </li>
                );
            })}
            <li className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center w-45" >
                <Link href="/wellnessjournal/createmoodlog" className="text-blue-500 hover:text-blue-700 font-semibold">
                    Log Mood
                </Link>
            </li>

        </ul>

    </div>
  )
}

export default withAuth(Mood);