import React, { useState } from 'react';
import { useRouter } from 'next/router';
import withAuth from '../../components/withAuth';
import { useCookies } from 'react-cookie';

const CreateProfile = () => {
    const [profileData, setProfileData] = useState({
        fName: '',
        lName: '',
        image: '',
        city: '',
        state: '',
        gExperience: '',
        aExperience: '',
        bio: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useRouter();
    const [cookies] = useCookies(['token']);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            console.log(profileData)
            const response = await fetch('http://localhost:4000/profile/createprofile/', {
                method: 'POST',
                credentials: 'include', // Important to include cookies
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                },
                body: JSON.stringify(profileData),
            });

            if (response.ok) {
                setSuccess('Profile created successfully');
                navigate.replace('/dashboard')
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Network error');
        }
    };

    return (
        <div className="min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto" >

            <h2 className="text-xl font-semibold mt-4 text-center" >Create Profile</h2>

            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}

            <form onSubmit={(e) => {
                e.preventDefault();
                setError('');
                setSuccess('');
                handleSubmit()
            }} className="mt-4 space-y-4 mx-auto max-w-md">

                <input 
                type="text" 
                name="fName" 
                placeholder="First Name" 
                value={profileData.fName} 
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600" 
                required />

                <br></br>

                <input 
                type="text" 
                name="lName" 
                placeholder="Last Name" 
                value={profileData.lName} 
                onChange={handleChange} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <input 
                type="text" 
                name="image" 
                placeholder="Image URL" 
                value={profileData.image} 
                onChange={handleChange} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <input 
                type="text" 
                name="city" 
                placeholder="City" 
                value={profileData.city} 
                onChange={handleChange} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <select
                    name="state"
                    value={profileData.state}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                >
                    <option value="">Select a state</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>

                <br></br>

                <select
                    name="gardeningExperience"
                    value={profileData.gExperience}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                >
                    <option value="">Select gardening experience</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Beginner">Amateur</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Advanced">Expert</option>
                </select>

                <br></br>

                <select
                    name="activityLevel"
                    value={profileData.aExperience} 
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                >
                    <option value="">Select activity level</option>
                    <option value="Sedentary">Sedentary (little to no exercise)</option>
                    <option value="Lightly Active">Lightly Active (light exercise/sports 1-3 days a week)</option>
                    <option value="Moderately Active">Moderately Active (moderate exercise/sports 3-5 days a week)</option>
                    <option value="Very Active">Very Active (hard exercise/sports 6-7 days a week)</option>
                    <option value="Extra Active">Extra Active (very hard exercise/sports & physical job or 2x training)</option>
                </select>

                <br></br>

                <textarea 
                name="bio" 
                placeholder="Tell us about yourself" 
                value={profileData.bio} 
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600" 
                ></textarea>

                <br></br>
                <br></br>

                <input type="submit" 
                value="Submit" className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 cursor-pointer mx-auto block" />
            </form>
        </div>
    )
};

export default withAuth(CreateProfile)