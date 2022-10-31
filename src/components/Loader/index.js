import React from 'react';
import './loader.scss';
import Loading from '../../assets/Loader.gif';

const Loader = () => {
    return (
        <div className='loader'>
            <img src={Loading} alt="loader" />
        </div>
    );
};

export default Loader;