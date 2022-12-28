import React, { useEffect, useState } from 'react';
import HomePost from './HomePost';

const SecondSection = () => {
    const [topPost, setTopPost] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/toplike`)
            .then(res => res.json())
            .then(data => setTopPost(data))
    }, [])
    console.log(topPost)
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                topPost.map(homepost => <HomePost homepost={homepost} key={homepost._id}></HomePost>)
            }
        </div>
    );
};

export default SecondSection;