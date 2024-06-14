import { useState } from 'react';


export default function AddPartner() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnailUrl, setThumbnailUrl] = useState('');

    /** Makes a post request to the API to save user data. */
    const handleSubmit = (e) => {
        e.preventDefault();
       
        const data = {
            name: name,
            description: description,
            thumbnailUrl: thumbnailUrl
        }

        /** Makes a post request to the backend to write a new business to the existing collection. */
        fetch('http://localhost:4000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => res.json())
        .then((data) => {
            console.log(data);
        })

        // Clear the form
        setName('');
        setDescription('');
        setThumbnailUrl('');
    }


    return (
        <div className="add-partner-form">
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
            <p></p>
    
            <label>Description:</label> 
            <input type='text'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}/>
            <p></p>
            <label>Thumbnail URL:</label>
            <input type='text'
                    value={thumbnailUrl}
                    onChange={(e) => setThumbnailUrl(e.target.value)}/>
    
            <p></p>
            <button type="submit">Add Partner</button>
        </form>
        </div>
    );
}