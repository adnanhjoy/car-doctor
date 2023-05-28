import React from 'react';
import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'
import banner5 from '../../../assets/images/banner/5.jpg'
import banner6 from '../../../assets/images/banner/6.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='img-gradient'>
                    <img src={banner1} className="w-full" />
                </div>
                <div className="absolute flex flex-col justify-end transform -translate-y-1/2 left-24 top-1/2">
                    <h1 className='text-6xl font-bold text-white'>
                        Affordable <br /> Price For Car <br /> Servicing
                    </h1>
                    <p className=' w-5/12 text-white mt-10'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='mt-10'>
                        <button className="btn btn-warning mr-5">Discover More</button>
                        <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='img-gradient'>
                    <img src={banner2} className="w-full" />
                </div>
                <div className="absolute flex flex-col justify-end transform -translate-y-1/2 left-24 top-1/2">
                    <h1 className='text-6xl font-bold text-white'>
                        Affordable <br /> Price For Car <br /> Servicing
                    </h1>
                    <p className=' w-5/12 text-white mt-10'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='mt-10'>
                        <button className="btn btn-warning mr-5">Discover More</button>
                        <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='img-gradient'>
                    <img src={banner3} className="w-full" />
                </div>
                <div className="absolute flex flex-col justify-end transform -translate-y-1/2 left-24 top-1/2">
                    <h1 className='text-6xl font-bold text-white'>
                        Affordable <br /> Price For Car <br /> Servicing
                    </h1>
                    <p className=' w-5/12 text-white mt-10'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='mt-10'>
                        <button className="btn btn-warning mr-5">Discover More</button>
                        <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='img-gradient'>
                    <img src={banner4} className="w-full" />
                </div>
                <div className="absolute flex flex-col justify-end transform -translate-y-1/2 left-24 top-1/2">
                    <h1 className='text-6xl font-bold text-white'>
                        Affordable <br /> Price For Car <br /> Servicing
                    </h1>
                    <p className=' w-5/12 text-white mt-10'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='mt-10'>
                        <button className="btn btn-warning mr-5">Discover More</button>
                        <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <div className='img-gradient'>
                    <img src={banner5} className="w-full" />
                </div>
                <div className="absolute flex flex-col justify-end transform -translate-y-1/2 left-24 top-1/2">
                    <h1 className='text-6xl font-bold text-white'>
                        Affordable <br /> Price For Car <br /> Servicing
                    </h1>
                    <p className=' w-5/12 text-white mt-10'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='mt-10'>
                        <button className="btn btn-warning mr-5">Discover More</button>
                        <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <div className='img-gradient'>
                    <img src={banner6} className="w-full" />
                </div>
                <div className="absolute flex flex-col justify-end transform -translate-y-1/2 left-24 top-1/2">
                    <h1 className='text-6xl font-bold text-white'>
                        Affordable <br /> Price For Car <br /> Servicing
                    </h1>
                    <p className=' w-5/12 text-white mt-10'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='mt-10'>
                        <button className="btn btn-warning mr-5">Discover More</button>
                        <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;