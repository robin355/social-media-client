import React from 'react';

const Apparea = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://www.usualsmart.com/wp-content/uploads/2021/10/log2.png" alt='/' className=" rounded-lg shadow-2xl lg:w-1/2" />
                    <div className='lg:w-1/2'>
                        <h1 className="text-5xl font-bold">You Can Easy Find <br /> This APP..!!</h1>
                        <p className="py-6">The full monty burkes posh excuse my french richards cheeky bobby spiffing crikey why gormless, pear shaped Why I say chap that’s suing lavatory chip shop gosh off his smashing boot are you taking the piss posh loo brilliant mate boy young.!</p>
                        <button>
                            <img src="http://themelooks.biz/demo/socibook/html/preview/assets/img/icons/google-play.png" alt="" />
                        </button>
                        <button className='ml-3'>
                            <img src="http://themelooks.biz/demo/socibook/html/preview/assets/img/icons/app-store.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apparea;