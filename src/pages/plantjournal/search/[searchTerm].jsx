
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import Link from 'next/link';
import withAuth from '../../components/withAuth.jsx';
import NavBar from '../../components/NavBar.jsx';
import PlantNavBar from '../components/PlantNavBar.jsx';

const Search = () => {

    const router = useRouter();

    const [isLoading, setLoading] = useState(true);
    const [cookies] = useCookies(['token']);

    const { searchTerm } = router.query;

    const [userFavorites, setUserFavorites] = useState([]);
    const [searchedData, setSearchedData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchSearchData = async () => {

        try {
            const response = await fetch(`http://localhost:4000/plantlibrary/search/${searchTerm}`, {
                credentials: 'include',
                headers: {
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                }
            });

            const data = await response.json()
            setSearchedData(data?.data)
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

        if (searchTerm) {
            setLoading(true); // Set loading state before fetching new data
            fetchSearchData();
            fetchFavorites()
        }

    }, [searchTerm]);

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
            setUserFavorites(data)
            setLoading(false)
        } catch (error) {
            console.error('Error:', error.message);
        }
    };
    console.log(searchedData)

  return (
    <div className="min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto">
        <div>
            <NavBar pageName="Plant Journal" />
            <br></br>

            <button onClick={() => router.back()} className="text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none">
            Go Back
            </button>

            <br></br>
            <br></br>

            <PlantNavBar />
            <br></br>

            <div className="flex justify-center space-x-4" >
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

            <h1 className="text-2xl font-bold mb-4 text-center"> Searching for {searchTerm} </h1>
                <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" >
                    {searchedData && searchedData.map((item, index) => {
                        const isFavorite = userFavorites?.includes(item.scientific_name)
                        return ( 
                            <li key={index} className="bg-white p-4 rounded-lg shadow-md w-48" >
                                <Link href={`/plantjournal/plantlibrarydetails/${item.scientific_name}`}>
                                    <img src={item.image_url} alt={item.common_name} className="w-full h-32 object-cover rounded-md mb-2" ></img>
                                    <h2 className="text-lg font-semibold">{item.common_name}</h2>
                                    <p className="text-md">{item.scientific_name}</p>
                                </Link>
                                <br></br>
                                <input 
                                    type='button' 
                                    value={isFavorite ? 'Remove Favorite' : 'Add Favorite'} 
                                    onClick={() => toggleFavorite(item.scientific_name)} 
                                    className={`px-4 py-2 rounded ${isFavorite ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
                                />

                                <br></br>
                            </li>
                        );
                    })}
                </ul>

        </div>
    </div>
  )
}

export default withAuth(Search);