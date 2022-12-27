import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("http://themelooks.biz/demo/socibook/html/preview/assets/img/media/banner-img.png")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Be Together, Anywhere</h1>
                        <p className="mb-5">More than 2 billion people in over countries use socibook to stay in touch with friends & family reliable messaging and calling, available on phones all over the world.</p>
                        <button className="btn btn-secondary">About More</button>
                        <button className="btn btn-outline btn-secondary ml-3">Invite Friend</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;