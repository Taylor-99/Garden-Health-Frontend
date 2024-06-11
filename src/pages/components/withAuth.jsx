
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie'

const withAuth = (WrappedComponent) => {
    
    return (props) => {
        const navigate = useRouter();
        const [cookies] = useCookies(['token']);
    
        useEffect(() => {
            const verifyCookie = async () => {
                const token = cookies.token;
            
                console.log('Frontend Token:', token); // Debug logging

                if (!token && navigate.pathname !== '/auth') {
                    console.log('Redirecting to login page...'); 
                    // Debug logging
                    navigate.push('/auth');
                }
            };

            verifyCookie();

        }, [cookies, navigate]);

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;