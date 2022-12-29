import React from 'react';
import { Link } from 'react-router-dom';
const Posts = ({ posts }) => {

    const { _id, title, post, image } = posts
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='h-[220px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{post}</p>
                    <div className="card-actions justify-between mt-2">
                        <div>
                            <Link to={`/post/${_id}`}>
                                <button className="btn btn-outline btn-secondary">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts;