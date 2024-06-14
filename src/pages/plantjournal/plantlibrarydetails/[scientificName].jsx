
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import withAuth from '../../components/withAuth.jsx';
import NavBar from '../../components/NavBar.jsx';
import PlantNavBar from '../components/PlantNavBar.jsx';

const PlantLibraryDetails = () => {


    const backend_endpoint = process.env.NEXT_PUBLIC_BACKEND_URL

    const router = useRouter();
    const { scientificName } = router.query; // Get the dynamic id from the URL

    const [isLoading, setLoading] = useState(true)
    const [cookies] = useCookies(['token']);
    const [plant, setPlant] = useState(null);

    
    useEffect(() => {

        const fetchPlantDetails = async () => {
            try {
                const response = await fetch(`${backend_endpoint}/plantlibrary/details/${scientificName}`, {
                    credentials: 'include',
                    headers: {
                        Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                    }
                });
        
                const data = await response.json();
                setPlant(data.data[0]);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error.message);
            }
        };
        
        if (scientificName) {
            fetchPlantDetails();
        }
    }, [scientificName, cookies.token]);

    if (isLoading) return <p>Loading...</p>
    if (!plant) return <p>No Plant data</p>

    console.log(plant)
    
  return (
    <div className="min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto">
        <NavBar pageName="Plant Journal" />
        <br></br>

        <button onClick={() => router.back()} className="text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none">
            Go Back
        </button>

        <br></br>
        <br></br>
        <PlantNavBar />
        <br></br>


        <h1 className="text-2xl font-bold mb-4 text-center">{plant.common_name} Details</h1>

        <div className="flex flex-col items-center">
            <img src={plant.image_url} className="w-64 h-64 object-cover rounded-lg shadow-md mb-4" alt={plant.common_name} />
            <p className="mb-2"><span className="font-semibold">Common Name:</span> {plant.common_name}</p>
            <p className="mb-2"><span className="font-semibold">Scientific Name:</span> {plant.scientific_name}</p>
            <p className="mb-2"><span className="font-semibold">Genus:</span> {plant.genus}</p>
            <p className="mb-2"><span className="font-semibold">Family:</span> {plant.family}</p>
            <p className="mb-2"><span className="font-semibold">IPNI Status:</span> {plant.status}</p>
            <p className="mb-2"><span className="font-semibold">Taxonomic Rank:</span> {plant.rank}</p>
        </div>

        <a href="https://trefle.io/" className="text-sm text-blue-500 hover:underline" >Plant data provided by Trefle </a>
    </div>

  )
}

export default withAuth(PlantLibraryDetails);