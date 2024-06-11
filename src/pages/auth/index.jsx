import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
// import fetch from 'isomorphic-unfetch'

// https://blog.logrocket.com/creating-website-next-js-react/


export default function Auth(){
    const [showLogin, setShowLogin] = useState(true)
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [cookies, setCookie] = useCookies(['token', 'user']);

    const navigate = useRouter()

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:4000/auth/login', {
                method: 'POST',
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setCookie('token', data.token);
                setCookie('user', data.username);
                navigate.replace('/dashboard')

            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Network error');
        }
    }

    const handleSignUp = async () => {
        try {
            const response = await fetch('http://localhost:4000/auth/signup', {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Parse the response
            const data = await response.json();
            console.log('Response data:', data);

            // Check if the response is ok
            if (!response.ok || data.error) {
                console.log('not ok')
                const data = await response.json();
                setError(data?.error);
                console.log(data?.error)
                return; // Exit the function to prevent navigation
            }else{
    
                // If the response is ok and data is successfully received
                setCookie('token', data.token);
                setCookie('user', data.username);
                navigate.replace('/profile/newprofile');
            }

        } catch (err) {
            setError('Network error');
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }
    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100" >
            <h1 className="text-4xl font-bold mb-8" >Welcome</h1>
            {
                showLogin?
                <section className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4 text-center" onClick={() => setShowLogin(!showLogin)}>
                        Login 
                        <br></br> 
                        <small>New user? click here to Signup!</small>
                    </h2>

                    {error && <p className="text-red-500 mb-4" >{error}</p>}

                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setError('');
                        handleLogin()
                    }}>
                        <label htmlFor="username" className="block mb-2" >Username: </label>
                        <input type="text" 
                        name="username" 
                        placeholder="Enter your username" 
                        value={formData.username} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border rounded-md mb-4"
                        required
                        />

                        <br></br>

                        <label htmlFor="password" className="block mb-2" >Password: </label>
                        <input type="password" 
                        name="password" 
                        placeholder="Enter your password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border rounded-md mb-4"
                        required
                        />

                        <br></br>
                        <br></br>

                        <input type="submit" 
                        value="LogIn" className="w-full bg-green-900 text-white px-4 py-2 rounded-md cursor-pointer" />
                    </form>
                </section> :

                 <section className="bg-white rounded-lg shadow-md p-6" >
                 <h2 className="text-xl font-semibold mb-4 text-center" onClick={() => setShowLogin(!showLogin)}>
                    SignUp 
                    <br></br> 
                    <small>Already have an account? click to Login</small>
                </h2>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                 <form onSubmit={(e) => {
                    e.preventDefault();
                    setError('');
                    handleSignUp()
                }}>
                    <label htmlFor="username" className="block mb-2" >Username: </label>
                    <input type="text" 
                    name="username" 
                    placeholder="Enter your username" 
                    value={formData.username} 
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md mb-4"
                    />

                    <br></br>

                    <label htmlFor="password" className="block mb-2" >Password: </label>
                    <input type="password" 
                    name="password" 
                    placeholder="Enter your password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 border rounded-md mb-4"
                    />

                        <br></br>
                        <br></br>

                    <input type="submit" 
                    value="Sign Up" className="w-full bg-green-900 text-white px-4 py-2 rounded-md cursor-pointer"  />
                 </form>
             </section>
            }        
        </div>
    )
}