
import NavBar from '../../components/NavBar.jsx'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import withAuth from '../../components/withAuth';

const CreateActivityLog = () => {

    const router = useRouter()

    const [activityFormData, setActivityFormData] = useState({
        activity: '',
        duration: '',
        outdoors: '',
        activity_mood: '',
    }); 
    const [error, setError] = useState('');
    const [cookies] = useCookies(['token']);

    const navigate = useRouter();

    const handleCreateActivityLog = async () => {
        try {

            console.log("Sending data")
            const response = await fetch('http://localhost:4000/activity/create', {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                },
                body: JSON.stringify(activityFormData),
            });

            await response.json();

            if (response.ok) {
                console.log("activity log created")

                // Redirect or perform an action on successful login
                navigate.replace('/wellnessjournal/activity')
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Network error');
        }
    }

    const handleChange = (e) => {
        setActivityFormData({
            ...activityFormData, 
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className="min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto">
            <NavBar pageName='Wellness Journal' />

            <button onClick={() => router.back()} className="text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none">
            Go Back
            </button>

            <section className="mt-8">
                <h2 className="text-xl font-semibold mt-4 text-center">Log Mood</h2>

                {error && <p className="text-red-500">{error}</p>}

                <form onSubmit={(e) => {
                    e.preventDefault();
                    setError('');
                    handleCreateActivityLog()
                }} className="mt-4 space-y-4 mx-auto max-w-md">

                    <label htmlFor="activity" className="block">Activity: </label>
                    <input type='text' 
                    name="activity"
                    placeholder='What activity did you complete'
                    onChange={handleChange} 
                    value={activityFormData.activity} 
                    className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                    />

                    <br></br>

                    <label htmlFor="duration" className="block">Duration of the activity in minutes: </label>
                    <input type='number' 
                    name="duration"
                    onChange={handleChange} 
                    value={activityFormData.duration} 
                    className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                    />

                    <br></br>

                    <div>
                        <label htmlFor="outdoors" className="block">Was this activity outdoors? </label>
                        <div className="flex items-center mt-1">
                            <input 
                                type="radio" 
                                id="outdoors_yes" 
                                name="outdoors" 
                                value="Yes" 
                                checked={activityFormData.outdoors === "Yes"} 
                                onChange={handleChange} 
                                className="mr-2"
                            />
                            <label htmlFor="outdoors_yes" className="mr-4">Yes</label>
                            
                            <input 
                                type="radio" 
                                id="outdoors_no" 
                                name="outdoors" 
                                value="No" 
                                checked={activityFormData.outdoors === "No"} 
                                onChange={handleChange} 
                                className="mr-2"
                            />
                            <label htmlFor="outdoors_no">No</label>
                        </div>
                    </div>

                    <br></br>

                    <label htmlFor="activity_mood" className="block">What is your overall moood after the activity? </label>
                    <select
                        name="activity_mood"
                        value={activityFormData.activity_mood}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                    >
                        <option value="">Select overall mood after activity</option>
                        <option name = "happy" value="Happy">Happy</option>
                        <option value="Content">Content</option>
                        <option value="Neutral">Neutral</option>
                        <option value="Sad">Sad</option>
                        <option value="Stressed">Stressed</option>
                        <option value="Other">Other</option>
                    </select>

                    <br></br>
                    <br></br>

                    <input type="submit" 
                    value="Submit" className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 cursor-pointer mx-auto block"/>
                </form>
            </section>
        </div>
    )
}

export default withAuth(CreateActivityLog);