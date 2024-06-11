
import NavBar from '../../components/NavBar.jsx'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import withAuth from '../../components/withAuth';

const CreateMoodLog = () => {

    const router = useRouter()

    const [moodFormData, setMoodFormData] = useState({
        overallMood: '',
        energyLevel: '',
        stressLevel: '',
        entry: '',
    }); 
    const [error, setError] = useState('');
    const [cookies] = useCookies(['token']);

    const navigate = useRouter();

    const handleCreateMoodLog = async () => {
        try {

            console.log("Sending data")
            const response = await fetch('http://localhost:4000/mood/create', {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                },
                body: JSON.stringify(moodFormData),
            });

            await response.json();

            if (response.ok) {
                console.log("mood log created")

                // Redirect or perform an action on successful login
                navigate.replace('/wellnessjournal/mood')
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Network error');
        }
    }

    const handleChange = (e) => {
        setMoodFormData({
            ...moodFormData, 
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
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setError('');
                    handleCreateMoodLog();
                }}
                className="mt-4 space-y-4 mx-auto max-w-md"
            >
                <legend htmlFor="overallmood" className="block">
                    Overall Mood:
                </legend>
                <select
                    name="overallMood"
                    value={moodFormData.overallMood}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                    required
                >
                    <option value="">Select overall mood</option>
                    <option value="Happy">Happy</option>
                    <option value="Content">Content</option>
                    <option value="Neutral">Neutral</option>
                    <option value="Sad">Sad</option>
                    <option value="Stressed">Stressed</option>
                    <option value="Other">Other</option>
                </select>

                <legend htmlFor="energylevel" className="block">
                    Energy Level:
                </legend>
                <select
                    name="energyLevel"
                    value={moodFormData.energyLevel}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                    required
                >
                    <option value="">Select energy level</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                    <option value="Fatigued">Fatigued</option>
                </select>

                <legend htmlFor="stresslevel" className="block">
                    Stress Level:
                </legend>
                <select
                    name="stressLevel"
                    value={moodFormData.stressLevel}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                    required
                >
                    <option value="">Select stress level</option>
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                    <option value="Very high">Very high</option>
                </select>

                {/* <div className="block">
                    <legend className="block">Would you like to make a journal entry?</legend>
                        Yes
                        <input
                            type="radio"
                            id="journalentry_yes"
                            name="journalentry"
                            value="Yes"
                            checked={moodFormData.journalEntry === "Yes"}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        No
                        <input
                            type="radio"
                            id="journalentry_no"
                            name="journalentry"
                            value="No"
                            checked={moodFormData.journalEntry === "No"}
                            onChange={handleChange}
                            className="mr-2"
                        />
                </div> */}

                <legend htmlFor="entry" className="block">Journal Entry:</legend>
                <textarea
                    name="entry"
                    placeholder="Add journal entry (optional)"
                    value={moodFormData.entry}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                ></textarea>

                <input
                    type="submit"
                    value="Submit"
                    className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 cursor-pointer mx-auto block"
                />
            </form>
        </section>
    </div>
  )
}

export default withAuth(CreateMoodLog)