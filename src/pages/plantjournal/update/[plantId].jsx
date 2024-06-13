
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import NavBar from '../../components/NavBar'
import withAuth from '../../components/withAuth';

const UpdatePlant = () => {

    const router = useRouter();

    const [updateFormData, setUpdateFormData] = useState({
        watered: '',
        plantDate: '',
        temperature: '',
        rain: '',
        health: '',
        fertilizer: '',
        notes: '',
    }); 
    const [error, setError] = useState('');
    const [cookies] = useCookies(['token']);
    const { plantId } = router.query; // Get the dynamic id from the URL
    const [file, setFile] = useState(null);

    const navigate = useRouter();

    const handleUpdatePlant = async () => {
        try {

            const formData = new FormData();
            formData.append('plantImage', file);
            formData.append('plantDate', updateFormData.plantDate)
            formData.append('temperature', updateFormData.temperature)
            formData.append('rain', updateFormData.rain)
            formData.append('health', updateFormData.health)
            formData.append('fertilizer', updateFormData.fertilizer)
            formData.append('notes', updateFormData.notes)

            const response = await fetch(`http://localhost:4000/garden/update/${plantId}`, {
                method: 'POST',
                credentials: "include",
                headers: {
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                },
                body: formData,
            });

            await response.json();

            if (response.ok) {
                // Redirect or perform an action on successful login
                navigate.replace(`/plantjournal/details/${plantId}`)
            } 

        } catch (err) {
            console.log(err)
            setError('Network error');
        }
    };

    const handleChange = (e) => {
        setUpdateFormData({
            ...updateFormData, 
            [e.target.name]: e.target.value
        })
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]); // Get the first file from the file input
      };

  return (
    <div className="min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto ">
        <NavBar pageName="Plant Journal" />

        <button onClick={() => router.back()} className="text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none">
            Go Back
        </button>
        
        <section className="mt-8">

            <h2 className="text-xl font-semibold mt-4 text-center"> Update Plant </h2>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form
                encType = 'multipart/formdata'
                onSubmit={(e) => {
                e.preventDefault();
                setError('');
                handleUpdatePlant()
            }} className="mt-4 space-y-4 mx-auto max-w-md">
                
                <label htmlFor="plantImage" className="block">Upload updated picture of plant: </label>
                <input type='file' 
                name="plantImage"  
                onChange={handleFileChange} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <label htmlFor="temperature" className="block">Todays Temperature: </label>
                <input type='number' 
                name="temperature"  
                placeholder="Todays Temperature"
                onChange={handleChange} 
                value={updateFormData.temperature} 
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
                        checked={updateFormData.rain === "Yes"}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label htmlFor="rain_yes" className="mr-4">Yes</label>
                    <input
                        type="radio"
                        id="rain_no"
                        name="rain"
                        value="No"
                        checked={updateFormData.rain === "No"}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label htmlFor="rain_no">No</label>
                </div>

                <br></br>

                <label htmlFor="health" className="block" >Plant health status: </label>
                <select
                    name="health"
                    value={updateFormData.health}
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
                    value={updateFormData.fertilizer}
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

                <label htmlFor="notes" className="block">Any other notes: </label>
                <textarea 
                    name="notes" 
                    placeholder="Additional notes about plant" 
                    value={updateFormData.notes} 
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600" 
                ></textarea>

                <br></br>
                <br></br>

                <input type="submit" 
                className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 cursor-pointer mx-auto block"
                value="Submit" />
            </form>
        </section>
    </div>
  )
}

export default withAuth(UpdatePlant)