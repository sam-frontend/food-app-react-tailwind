import React, { useState } from 'react';
import { data } from '../data/data.js';

const Food = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
//filter b id
 const filterId = (id) => {
    setFoods(
      data.filter((item) => {
        return item.id === id;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Naija Dishes
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter By Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('Rice')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Rice
            </button>
            <button
              onClick={() => filterType('pizza')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Pizza
            </button>
            <button
              onClick={() => filterType('Swallow')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Swallow
            </button>
            <button
              onClick={() => filterType('chicken')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Chicken
            </button>
          </div>
        </div>
        <div>
          <p className='font-bold text-gray-700'>Filter By Id</p>
          <div className='flex justfiy-between flex-wrap'>
          <button
                      onClick={() => filterId('01')}
                      className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                    >
                    01
                    </button>
                  <button
                      onClick={() => filterId('02')}
                      className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                    >
                    02
                    </button>
                    <button
                      onClick={() => filterId('03')}
                      className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                    >
                      03
                    </button>
                    <button
                      onClick={() => filterId('04')}
                      className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                    >
                      04
                    </button>
                    <button
                      onClick={() => filterPrice('050')}
                      className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                    >
                      050
                    </button>
                    <button
                      onClick={() => filterId('06')}
                      className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                    >
                      06
                    </button>
                    <button
                      onClick={() => filterId('07')}
                      className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                    >
                    07
                    </button>
                    <button
                      onClick={() => filterId('08')}
                      className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                    >
                    08
                    </button>
                    <button
                      onClick={() => filterId('09')}
                      className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                    >
                    09
                    </button>
                    <button
                      onClick={() => filterId('10')}
                      className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                    >
                    10
                    </button>
                    <button
                      onClick={() => filterId('11')}
                      className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                    >
                    11
                    </button>
                    <button
                      onClick={() => filterPrice('#12')}
                      className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                    >
                    12
                    </button>
                    <button
                      onClick={() => filterId('13')}
                      className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                    >
                    13
                    </button>
                    <button
                      onClick={() => filterId('14')}
                      className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                    >
                    14
                    </button>
                    <button
                      onClick={() => filterId('15')}
                      className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                    >
                    15
                    </button>
                    <button
                      onClick={() => filterId('16')}
                      className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                    >
                    16
                    </button>
              
            </div>
            </div>
                
        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter By Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('#3000')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              #3000
            </button>
            <button
              onClick={() => filterPrice('#4500')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              #4500
            </button>
            <button
              onClick={() => filterPrice('#4000')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              #4000
            </button>
            <button
              onClick={() => filterPrice('#5000')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              #5000
            </button>
            <button
              onClick={() => filterPrice('#6000')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              #6000
            </button>
            <button
              onClick={() => filterPrice('#2500')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              #2500
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
