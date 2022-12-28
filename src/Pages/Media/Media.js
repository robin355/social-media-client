import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Posts from './Posts';

const Media = () => {
    const Allposts = useLoaderData()
    return (
        <div>
            <h3>ALL Post</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    Allposts.map(posts => <Posts posts={posts} key={posts._id}></Posts>)
                }
            </div>
        </div>
    );
};

export default Media;