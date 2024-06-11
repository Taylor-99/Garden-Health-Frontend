
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useCookies } from 'react-cookie';
import NavBar from '../../components/NavBar.jsx';
import withAuth from '../../components/withAuth.jsx'

const CreatePlant = () => {

    const router = useRouter()

    const [plantFormData, setPlantFormData] = useState({
        plantName: '',
        plantSpecies: '',
        watered: '',
        plantDate: '',
        plantImage: '',
        temperature: '',
        rain: '',
        health: '',
        fertilizer: '',
        notes: '',
    }); 
    const [error, setError] = useState('');
    const [cookies] = useCookies(['token']);
    const [file, setFile] = useState(null);

    const navigate = useRouter();

    const handleCreatePlant = async () => {
        try {

            const formData = new FormData();
            // console.log('form data = ', formData)
            formData.append('plantImage', file);
            formData.append('plantName', plantFormData.plantName)
            formData.append('plantSpecies', plantFormData.plantSpecies)
            formData.append('watered', plantFormData.watered)
            formData.append('plantDate', plantFormData.plantDate)
            formData.append('temperature', plantFormData.temperature)
            formData.append('rain', plantFormData.rain)
            formData.append('health', plantFormData.health)
            formData.append('fertilizer', plantFormData.fertilizer)
            formData.append('notes', plantFormData.notes)

            // console.log(formData)

            console.log("Sending data")
            const response = await fetch('http://localhost:4000/garden/create', {
                method: 'POST',
                credentials: "include",
                headers: {
                    // 'Content-Type': 'multipart/formdata',
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                },
                body: formData,
            });

            await response.json();

            if (response.ok) {
                // Redirect or perform an action on successful login
                navigate.replace('/plantjournal/garden')
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Network error');
        }
    }

    const handleChange = (e) => {
        setPlantFormData({
            ...plantFormData, 
            [e.target.name]: e.target.value
        })
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]); // Get the first file from the file input
      };

  return (
    <div className="min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto">

        <NavBar pageName="Plant Journal" />

        <section className="mt-8">

        <button onClick={() => router.back()} className="text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none">
            Go Back
        </button>

            <h2 className="text-xl font-semibold mt-4 text-center" >Add a New Plant</h2>

            {error && <p className="text-red-500" >{error}</p>}

            <form 
                encType = 'multipart/formdata'
                onSubmit={(e) => {
                e.preventDefault();
                setError('');
                handleCreatePlant()
            }} className="mt-4 space-y-4 mx-auto max-w-md" >

                <label htmlFor="plantName" className="block" >Plant Name: </label>
                <input type="text" 
                name="plantName" 
                placeholder="Enter Plant Name" 
                onChange={handleChange} 
                value={plantFormData.plantName} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <label htmlFor="plantSpecies" className="block" >Plant Species: </label>
                <input type="text" 
                name="plantSpecies" 
                placeholder="Enter Plant Species" 
                onChange={handleChange} 
                value={plantFormData.plantSpecies} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <label htmlFor="plantDate" className="block" >Date Planted: </label>
                <input type='date' 
                name="plantDate"  
                onChange={handleChange} 
                value={plantFormData.plantDate} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <label htmlFor="watered" className="block">Was it watered today:</label>
                <div>
                    <input
                        type="radio"
                        id="watered_yes"
                        name="watered"
                        value="Yes"
                        checked={plantFormData.watered === "Yes"}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label htmlFor="watered_yes" className="mr-4">Yes</label>
                    <input
                        type="radio"
                        id="watered_no"
                        name="watered"
                        value="No"
                        checked={plantFormData.watered === "No"}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label htmlFor="watered_no">No</label>
                </div>

                <br></br>

                <label htmlFor="plantImage" className="block" >Plant Image: </label>
                <input type='file' 
                name="plantImage"  
                placeholder="Upload image of your plant"
                onChange={handleFileChange} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <label htmlFor="temperature" className="block" >Todays Temperature: </label>
                <input type='number' 
                name="temperature"  
                placeholder="Todays Temperature"
                onChange={handleChange} 
                value={plantFormData.temperature} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <label htmlFor="rain" >Did it rain Today? </label>
                <div>
                    <input
                        type="radio"
                        id="rain_yes"
                        name="rain"
                        value="Yes"
                        checked={plantFormData.rain === "Yes"}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label htmlFor="rain_yes" className="mr-4">Yes</label>
                    <input
                        type="radio"
                        id="rain_no"
                        name="rain"
                        value="No"
                        checked={plantFormData.rain === "No"}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label htmlFor="rain_no">No</label>
                </div>

                <br></br>

                <label htmlFor="health" className="block" >Plant health status: </label>
                <select
                    name="health"
                    value={plantFormData.health}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                >
                    <option value="">Select plant health</option>
                    <option value="Healthy">Healthy</option>
                    <option value="Fair">Fair</option>
                    <option value="Poor">Poor</option>
                    <option value="Critical">Critical</option>
                </select>

                <br></br>

                <label htmlFor="fertilizer" className="block" >What fertilizer did you use: </label>
                <select
                    name="fertilizer"
                    value={plantFormData.fertilizer}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                >
                    <option value="">Select fertilizer type</option>
                    <option value="None">None</option>
                    <option value="Organic">Organic</option>
                    <option value="Inorganic">Inorganic</option>
                    <option value="Liquid">Liquid</option>
                    <option value="Granular">Granular</option>
                    <option value="Slow-release">Slow-release</option>
                    <option value="Other">Other</option>
                </select>

                <br></br>

                <label htmlFor="notes" className="block" >Any other notes: </label>
                <textarea 
                    name="notes" 
                    placeholder="Additional notes about plant" 
                    value={plantFormData.notes} 
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600" 
                ></textarea>

                <br></br>
                <br></br>

                <input type="submit" 
                value="Submit" className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 cursor-pointer mx-auto block"/>
                <br></br>
            </form>
        </section>
    </div>
  )
}

export default withAuth(CreatePlant)