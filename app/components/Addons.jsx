import Image from 'next/image';
import arcadeIcon from '@/public/assets/images/icon-arcade.svg';
import advancedIcon from '@/public/assets/images/icon-advanced.svg';
import proIcon from '@/public/assets/images/icon-pro.svg';
import { useState } from 'react';
import './Addons.css';
import { toCamelCase } from '../utils/converters';

function Addons({ title, subtitle, formdata, setFormdata }) {
  const isPlanYearly = formdata.yearly;

  const handlePlanChange = (plan) => {
    setFormdata({ ...formdata, plan });
  };

  const addOns = [
    { name: 'Online service', description:'Access to multiplayer games', price: {monthly: '+1/mon', yearly: '+10/yr'}},
    { name: 'Larger storage', description:'Extra 1TB of cloud save', price: {monthly: '+2/mon', yearly: '+20/yr'}},
    { name: 'Customizable profile', description:'Custom theme on your profile', price: {monthly: '+2/mon', yearly: '+20/yr'}},
  ]

  return (
    <div className="w-[80%]">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <p className="mt-2 text-gray-400 w-[80%]">{subtitle}</p>
      </div>
      <div className="flex justify-between w-full flex-col">
        {addOns.map(({ name, description, price }) => (
          <label key={name} className={name===formdata.plan ? "addons__label bg-blue-50 border border-blue-800 cursor-pointer" : "addons__label border border-gray-200 cursor-pointer"}>
            <div className='flex justify-between items-center w-full'>
              <div className='flex gap-4'>
                <input
                  type="checkbox"
                  className="px-4 py-3 rounded-lg border border-gray-300 font-bold"
                  name={toCamelCase(name)}
                  // checked={getAddonValue(name)}
                  value={toCamelCase(name)}
                  checked={formdata[toCamelCase(name)]}
                  onChange={()=>{
                    console.log(toCamelCase(name))
                    setFormdata((prevFormdata) => ({...prevFormdata, [toCamelCase(name)]:!prevFormdata[toCamelCase(name)]}))
                  }}
                />
                <div>
                  <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                  <p className='text-sm text-gray-400'>{description}</p>
                </div>
              </div>
              <p className="text-blue-800 text-sm">{isPlanYearly ? price.yearly : price.monthly}</p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Addons;
