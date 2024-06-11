

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie'
import withAuth from './withAuth'

const NavBar = (props) => {

    const navigate = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [cookies] = useCookies(['token', 'user']);

    const [username, setUsername] = useState("")

    useEffect(() => { const userName = cookies.user; if (userName) { setUsername(userName); } }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:4000/auth/logout', {
                method: 'get',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                },
            });

            if (response.ok) {
                removeCookie("token");
                navigate.replace('/auth')

            } else {
                console.log(data.message);
            }
        } catch (err) {
            console.log('Network error');
        }
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (

        <div>
            <nav className="flex justify-between items-center px-4 bg-green-900 py-2 w-full">

                <h1 className="text-white font-semibold text-xl" >{props.pageName}</h1>

                <div className=" flex items-center " >

                    <h1 className="text-white text-base mr-4">Welcome {username}</h1>

                    <div className="relative" >

                        <button onClick={toggleDropdown} className="text-white font-semibold px-4">
                        <span className="ml-1 text-2xl">&#9776;</span> {/* Hamburger icon */}
                        </button>

                        {isDropdownOpen && (

                                <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md" >
                                    <li>
                                        <Link 
                                            href="/dashboard"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                            onClick={closeDropdown}
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="/plantjournal/garden" 
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200" 
                                            onClick={closeDropdown}
                                        >
                                            Plant Journal
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="/wellnessjournal/mood" 
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200" 
                                            onClick={closeDropdown}
                                        >
                                            Wellness Journal
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="/social" 
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200" 
                                            onClick={closeDropdown}
                                        >
                                            Social
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="/profile" 
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200" 
                                            onClick={closeDropdown}
                                        >
                                            View Profile
                                        </Link>
                                    </li>
                                    <li>
                                        < input 
                                            type="button"
                                            onClick={() => {
                                                handleLogout(); closeDropdown(); 
                                            }}
                                            className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                                            value = "Logout"
                                        />
                                    </li>
                                </ul>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default withAuth(NavBar);