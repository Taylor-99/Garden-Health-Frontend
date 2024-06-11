
import NavBar from '../../components/NavBar.jsx'
import PlantNavBar from '../components/PlantNavBar.jsx'
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import withAuth from '../../components/withAuth';
import Image from 'next/image'

const Garden = () => {

    const [isLoading, setLoading] = useState(true)
    const [cookies] = useCookies(['token']);

    const [gardenData, setGardenData] = useState([]);

        const fetchGarden = async () => {

            try {
                const response = await fetch('http://localhost:4000/garden', {
                    credentials: 'include',
                    headers: {
                        Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                    }
                });

                const data = await response.json()
                setGardenData(data)
                setLoading(false)
            } catch (error) {
                console.error('Error:', error.message);
            }
        };
        
    useEffect(() => {

        fetchGarden();

    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!gardenData) return <p>No plants to show</p>

    console.log(gardenData)

    function setDate(dateString){
        
        // Create a Date object from the date string
        const date = new Date(dateString);
        
        // Get the individual components of the date
        const year = date.getFullYear();
        const month = date.getMonth() + 1; 
        const day = date.getDate();
        
        let updatedDate = `${month}/${day}/${year}`
        
        return updatedDate
    };


    return (
        <div className="min-h-screen flex-col items-center justify-center bg-gray-100">
            <NavBar pageName="Plant Journal" />
            <br></br>
            <PlantNavBar />
            <br></br>
            <h1 className="text-2xl font-bold mb-4 text-center"> Your Garden </h1>
            <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" >
                {gardenData && gardenData.map((plant, index) => {
                    return (
                        <li key={index} className="bg-white p-4 rounded-lg shadow-md w-45" >
                            <Link href={`/plantjournal/details/${plant[0]._id}`}>
                                <img src={plant[1].plantImage} alt={plant[0].plantName} className="w-full h-32 object-cover rounded-md mb-2" ></img>
                                <h2 className="text-lg font-semibold">{plant[0].plantName}</h2>
                                <p className="text-gray-600" >Last update: {setDate(plant[0].updatedAt)}</p>
                            </Link>

                            <br></br>
                        </li>
                    );
                })}
                    <Link href="/plantjournal/createplant" className="text-lime-600 hover:text-lime-900 font-semibold">
                        <li className="bg-white hover:bg-neutral-200 p-4 rounded-lg shadow-md flex justify-center items-center w-45" >
                            Create A plant
                        </li>
                    </Link>

            </ul>
        </div>
      )
}

export default withAuth(Garden);