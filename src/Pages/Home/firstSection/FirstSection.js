import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../../../AuthProvider/AuthProvider';

const FirstSection = () => {
    const { user } = useContext(authContext)
    const handlePost = event => {
        event.preventDefault();
        const form = event.target
        const title = form.title.value
        const post = form.post.value
        const image = form.image.value
        console.log(title, post, image)
        const posts = {
            title,
            post,
            image,
        }
        fetch(`http://localhost:5000/post`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(posts)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Add Post')
            })
    }
    return (
        <div className='mt-10 ml-2'>
            <h3 className='text-5xl text-center font-bold'>ADD Post Section </h3>
            {
                user?.email ?
                    <>
                        <form onSubmit={handlePost}>
                            <label className="label">
                                <span className="label-text text-2xl">Post Title</span>
                            </label>
                            <input type="text" name='title' placeholder="Post Title" className="input input-bordered w-full" />
                            <label className="label">
                                <span className="label-text text-2xl">Your Post</span>
                            </label>
                            <textarea className="textarea textarea-bordered w-full mt-3" name='post' placeholder="Your post"></textarea>
                            <label className="label">
                                <span className="label-text text-2xl">Post Image</span>
                            </label>
                            <input type="file" name='image' placeholder="Type here" className="input file-input-bordered w-full " /> <br />
                            <button className="btn btn-outline btn-secondary mt-2">Add Post</button>
                        </form>
                    </>
                    : <div className='text-center'>
                        <h3 className='text-3xl text-red-500 text center mt-6'>Plaese Login And Add Post</h3>
                        <Link to='/login'><button className=" mb-10  btn btn-outline btn-secondary mt-2">Login</button></Link>
                    </div>
            }


        </div>
    );
};

export default FirstSection;