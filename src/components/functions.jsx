import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { specialityData } from '../assets/assets';

const Functions = () => {
    return (
      <div id="features1" className='flex flex-col items-center gap-4 py-16 text-gray-600'>
        <h1 className='text-3xl font-medium text-center'>
          Features
          <p className='width-1/3 text-center text-sm'>Simply browse through the extensive list of features for your convenience and use them.</p>
        </h1>
      
      <div className="flex sm:justify-center gap-8 pt-5 w-full overflow-x-scroll scrollbar-hide">
        {specialityData.map((item, index) => (
          <Link
            onClick={()=>scrollTo(0,0)}
            key={index}
            to={`/Features/${item.speciality}`}
            className="feature-link flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
          >
            <img className="w-16 sm:w-24 mb-2" src={item.image} alt={item.speciality} />
            <p className="text-center">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Functions;
