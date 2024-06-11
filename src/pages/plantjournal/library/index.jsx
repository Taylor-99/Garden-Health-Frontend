
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

import { useRouter } from 'next/router';
import Link from 'next/link';
import withAuth from '../../components/withAuth.jsx';
import NavBar from '../../components/NavBar.jsx';
import PlantNavBar from '../components/PlantNavBar.jsx';

const Library = () => {

    const router = useRouter();

    const [isLoading, setLoading] = useState(true);
    const [cookies] = useCookies(['token', 'user']);

    let maxPages = 21863;

    const [page, setPage] = useState(1);
    const [userFavorites, setUserFavorites] = useState([]);
    const [plantLibrary, setPlantLibrary] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    
    const fetchLibraryData = async (pageNumber) => {

        try {
            const response = await fetch(`http://localhost:4000/plantlibrary/getplants/${pageNumber}`, {
                credentials: 'include',
                headers: {
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                }
            });

            const data = await response.json()
            setPlantLibrary(data?.data)
            setLoading(false)
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const fetchFavorites = async () => {

        try {
            const response = await fetch(`http://localhost:4000/plantlibrary/getfavorites`, {
                credentials: 'include',
                headers: {
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                }
            });

            const data = await response.json()
            setUserFavorites(data)
            setLoading(false)
        } catch (error) {
            console.error('Error:', error.message);
        }
    };
    
    useEffect(() => {

        setLoading(true); // Set loading state before fetching new data
        fetchLibraryData(page);
        fetchFavorites()

    }, [page]); // Re-fetch data whenever `page` changes

    const handleNextPage = () => {
        if (page < maxPages) {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const toggleFavorite = async (scientificName) => {

        try {
            const isFavorite = userFavorites?.includes(scientificName);
            const method = isFavorite ? 'DELETE' : 'PUT';

            const response = await fetch(`http://localhost:4000/plantlibrary/favorites/${scientificName}`, {
                method: method,
                credentials: 'include',
                headers: {
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                }
            });

            const data = await response.json()
            // Toggle the favorite status in the local state
            setUserFavorites(data);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    if (isLoading) return <p>Loading...</p>
    if (!plantLibrary) return <p>No plants to show</p>

    return (
        <div className="min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto">
            <NavBar pageName="Plant Journal" />
            
            <br></br>
            <PlantNavBar />
            <br></br>

            <div className="flex justify-center space-x-4">
                <input 
                    type='search' 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
                    />
                <input 
                    type='submit' 
                    value='Search' 
                    onClick={() => router.push(`/plantjournal/search/${searchQuery}`)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md" 
                    />
            </div>

            <br></br>

            <h1 className="text-2xl font-bold mb-4 text-center"> Plant Library </h1>
                <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" >
                    {plantLibrary && plantLibrary.map((plant, index) => {
                        const isFavorite = userFavorites?.includes(plant.scientific_name)
                        return (
                            <li key={index} className="bg-white p-4 rounded-lg shadow-md w-45" >
                                <Link href={`/plantjournal/plantlibrarydetails/${plant.scientific_name}`}>
                                    <img src={plant.image_url} alt={plant.common_name} className="w-full h-32 object-cover rounded-md mb-2" ></img>
                                    <h2 className="text-lg font-semibold">{plant.common_name}</h2>
                                    <p className="text-md">{plant.scientific_name}</p>
                                </Link>
                                <br></br>
                                    <input 
                                        type='button' 
                                        value={isFavorite ? 'Remove Favorite' : 'Add Favorite'} 
                                        onClick={() => toggleFavorite(plant.scientific_name)} 
                                        className={`px-4 py-2 rounded ${isFavorite ? 'bg-red-800 text-white' : 'bg-green-800 text-white'}`}
                                    />

                                <br></br>
                            </li>
                        );
                    })}
                </ul>

                <br></br>

                <div className="flex justify-center space-x-4">
                    <input 
                        type='button' 
                        value='Previous Page' 
                        onClick={handlePreviousPage} 
                        className="bg-blue-500 text-white px-4 py-2 rounded" 
                        disabled={page === 1} 
                    />

                    <p className="text-center">Page: {page} </p>

                    <input 
                        type='button' 
                        value='Next Page'
                        onClick={handleNextPage} 
                        className="bg-blue-500 text-white px-4 py-2 rounded" 
                        disabled={page === maxPages} 
                    />
                </div>
                <br></br>
        </div>
    )
}

export default withAuth(Library);