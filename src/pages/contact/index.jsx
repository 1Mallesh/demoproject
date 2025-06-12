import React from 'react'
import { useEffect } from 'react';

function index() {

    async function fetchData() {
        try {
            const response = await fetch('https://api.example.com/data');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Contact Page</h1>
            <p>This is the contact page where you can reach us.</p>
<p>Check the console for fetched data.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        </div>
    )
}

export default index
