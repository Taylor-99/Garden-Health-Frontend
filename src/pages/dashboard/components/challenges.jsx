
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import withAuth from '../../components/withAuth';

const challenges = () => {

    const [isLoading, setLoading] = useState(true)
    const [cookies] = useCookies(['token']);

    const [challenge, setChallenge] = useState([]);
    const [isCompleted, setIsCompleted] = useState(false); // Track the completion status

    useEffect(() => {
        const fetchChallenges = async () => {

            try {
                const response = await fetch('http://localhost:4000/dash/challenge', {
                    credentials: 'include',
                    headers: {
                        Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                      }
                });

                const data = await response.json()
                setChallenge(data);
                setIsCompleted(data.completed);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error.message);
            }
        }

        fetchChallenges();

    }, [cookies.token]);

    const handleCompleteClick = async () => {
        try {
            // Send a request to update the challenge status to "completed"
            const response = await fetch(`http://localhost:4000/dash/challenge/update/${challenge._id}`, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                },
            });

            if (response.ok) {
                // Update the frontend state to reflect the completed status
                console.log(response)
                setIsCompleted(true);
            } else {
                console.error('Failed to complete the challenge');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    if (isLoading) return <p>Loading...</p>
    if (!challenge) return <p>No Challenge</p>

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4" >
        <h1 className="text-2xl font-bold mb-4 text-center" >Challenge</h1>
        <div className={`rounded-lg shadow-md p-6 mb-4 text-center ${isCompleted ? 'bg-gray-300' : 'bg-white'}`} >
            <p className="text-gray-700 mb-4">{challenge.description}</p>
            <input 
                type="button" 
                value={isCompleted ? 'Completed' : 'Complete'}
                onClick={handleCompleteClick}
                disabled={isCompleted}
                className={`${ isCompleted ? 'bg-green-500 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600 ' } text-white font-semibold py-2 px-4 rounded mt-4 transition duration-300` } 
            />
        </div>
        <p>{isCompleted ? 'Come back tomorrow for a new challenge' : ''}</p>
    </div>
  )
}

export default withAuth(challenges)