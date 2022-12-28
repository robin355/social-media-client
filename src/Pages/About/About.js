import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import EditModal from './EditModal';

const About = () => {
    const [userInfo, setUserInfo] = useState({})
    const { user } = useContext(authContext)
    useEffect(() => {
        fetch(`https://social-media-server-red.vercel.app/userInfo?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [user.email])
    return (
        <div className='text-center'>
            <div className="  card  bg-base-100 shadow-xl">

                <div className=" mt-10">
                    <form>
                        <input type="text" placeholder="Type here" defaultValue={userInfo?.name} className="input input-bordered w-full max-w-xs mb-3" /> <br />
                        <input type="text" placeholder="Type here" defaultValue={userInfo?.email} className="input input-bordered w-full max-w-xs mb-3" /> <br />
                        <input type="text" placeholder="Type here" defaultValue={userInfo?.university} className="input input-bordered w-full max-w-xs mb-3" /> <br />
                        <input type="text" placeholder="Type here" defaultValue={userInfo?.address} className="input input-bordered w-full max-w-xs mb-3" /> <br />
                    </form>

                    <label htmlFor="edit-modal" className="btn btn-secondary mb-10">Edit</label>


                </div>
            </div>
            {
                <EditModal userInfo={userInfo}></EditModal>
            }
        </div>
    );
};

export default About;