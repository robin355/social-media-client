import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../../../AuthProvider/AuthProvider';

const FirstSection = () => {
    const { user } = useContext(authContext)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const imagehostkey = process.env.REACT_APP_imgbb_key;
    const handlePost = data => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imagehostkey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {
                    const posts = {
                        title: data.title,
                        post: data.post,
                        image: imgData.data.url,
                        counter: 0
                    }

                    fetch(`https://social-media-server-red.vercel.app/post`, {
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
            })
    }
    return (
        <div className='mt-10 ml-2'>
            <h3 className='text-5xl text-center font-bold'>ADD Post Section </h3>
            {
                user?.email ?
                    <>
                        <form onSubmit={handleSubmit(handlePost)}>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" {...register("title", {
                                    required: "title is required"
                                })} className="input input-bordered w-full" />
                                {errors.title && <p className='text-red-600'>{errors.title?.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">post</span>
                                </label>
                                <input type="text" {...register("post", {
                                    required: "post Address is required"
                                })} className="input input-bordered w-full" />
                                {errors.post && <p className='text-red-600'>{errors.post?.message}</p>}
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="file" {...register("image", {
                                    required: "Name is required"
                                })} className="input input-bordered w-full" />
                                {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                            </div>
                            <input className='btn btn-outline btn-secondary mt-2 mb-10' value='Add Post' type="submit" />
                        </form>
                    </>
                    : <div className='text-center'>
                        <h3 className='text-3xl text-red-500 text center mt-6'>Plaese Login And Add Post</h3>
                        <Link to='/login'><button className="mb-10 btn btn-outline btn-secondary mt-2">Login</button></Link>
                    </div>
            }


        </div>
    );
};

export default FirstSection;