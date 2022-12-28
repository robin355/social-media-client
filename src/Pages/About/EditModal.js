import React from 'react';
import { toast } from 'react-toastify';

const EditModal = ({ userInfo }) => {

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const university = form.university.value
        const address = form.address.value
        const newEditData = {
            name,
            email,
            university,
            address
        }
        fetch(`https://social-media-server-red.vercel.app/userInfo/${userInfo?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEditData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Data Updated')
                    console.log(data);
                }

            })
    }

    return (
        <div>
            <input type="checkbox" id="edit-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="edit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleUpdate}>
                        <input type="text" name='name' defaultValue={userInfo?.name} className="input input-bordered w-full max-w-xs mb-3" required /> <br />
                        <input type="text" name='email' defaultValue={userInfo?.email} className="input input-bordered w-full max-w-xs mb-3" required /> <br />
                        <input type="text" name='university' defaultValue={userInfo?.university} className="input input-bordered w-full max-w-xs mb-3" required /> <br />
                        <input type="text" name='address' defaultValue={userInfo?.address} className="input input-bordered w-full max-w-xs mb-3" required /> <br />
                        <input className='btn btn-outline btn-secondary ml-3 mb-10' type="submit" value="Save" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default EditModal;