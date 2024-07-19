import Image from 'next/image';
import arcadeIcon from '@/public/assets/images/icon-arcade.svg';
import advancedIcon from '@/public/assets/images/icon-advanced.svg';
import proIcon from '@/public/assets/images/icon-pro.svg';
import { useState } from 'react';
import './SelectYourPlan.css';

function SelectYourPlan({ title, subtitle, formdata, setFormdata }) {
  const isPlanYearly = formdata.yearly;

  const handlePlanChange = (plan) => {
    setFormdata({ ...formdata, plan });
  };

  const handleToggleYearly = () => {
    setFormdata({ ...formdata, yearly: !isPlanYearly });
  };

  const plans = [
    { name: 'arcade', icon: arcadeIcon, price: { monthly: '$9/mon', yearly: '$90/yr' } },
    { name: 'advanced', icon: advancedIcon, price: { monthly: '$12/mon', yearly: '$120/yr' } },
    { name: 'pro', icon: proIcon, price: { monthly: '$15/mon', yearly: '$150/yr' } },
  ]
  return (
    <div className="w-[80%]">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <p className="mt-2 text-gray-400 w-[80%]">{subtitle}</p>
      </div>
      <div className="flex justify-between w-full flex-col md:flex-row md:gap-2">
        {plans.map(({ name, icon, price }) => (
          <label key={name} className={name===formdata.plan ? "selectyourplan__label bg-blue-50 border border-blue-800" : "selectyourplan__label border border-gray-200"} onClick={() => handlePlanChange(name)}>
            <Image src={icon} width={40} height={40} alt={`${name} icon`} />
            <div>
              <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
              <p className="text-gray-400">{isPlanYearly ? price.yearly : price.monthly}</p>
              {isPlanYearly && <p className="text-xs opacity-100 text-blue-900">2 months free</p>}
              <input
                type="radio"
                className="px-4 py-3 rounded-lg border border-gray-300 font-bold hidden"
                name="plan"
                value={name}
              />
            </div>
          </label>
        ))}
      </div>
      <div className="flex mt-4 gap-2 items-center justify-center bg-blue-50 w-full p-4 rounded-xl">
        <p className={isPlanYearly ? 'text-sm text-gray-400' : 'text-sm font-bold'}>Monthly</p>
        <label htmlFor="yearly" className="w-12 h-6 rounded-full relative overflow-hidden cursor-pointer" onClick={handleToggleYearly}>
          <input type="radio" name="yearly" checked={isPlanYearly} readOnly />
          <span className={`absolute top-0 left-0 right-0 bottom-0 duration-300 flex ${isPlanYearly ? 'bg-blue-400 justify-end' : 'bg-gray-200 justify-start'}`}>
            <div className="w-5 h-5 bg-white rounded-full m-0.5"></div>
          </span>
        </label>
        <p className={!isPlanYearly ? 'text-sm text-gray-400' : 'text-sm font-bold'}>Yearly</p>
      </div>
    </div>
  );
}

export default SelectYourPlan;
