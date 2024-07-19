'use client'
import './Form.css'
import React, {useState} from 'react'
import Image from 'next/image'
import sideBarImageDesktop from '@/public/assets/images/bg-sidebar-desktop.svg'
import sideBarImageMobile from '@/public/assets/images/bg-sidebar-mobile.svg'
import useCustomForm from '../hooks/useMultiStepForm'
import useMultiStepForm from '../hooks/useMultiStepForm'
import PersonalInfo from './PersonalInfo'
import SelectYourPlan from './SelectYourPlan'
import Addons from './Addons'
import FinishingUp from './FinishingUp'
import ThankYou from './ThankYou'

const INITIAL_VALUES={
  name: "", 
  email: "",
  phone: "",
  plan: "arcade",
  yearly: false,
  onlineService: false,
  largerStorage: false,
  customizableProfile: false,  
}

const Form = () => {
  const [formdata, setFormdata] = useState(INITIAL_VALUES)
  const [thankyou, setThankyou] = useState(false)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const stepOneValidation = {
    name: formdata.name.length>3 || formdata.name.length===0,
    email: emailRegex.test(formdata.email) || formdata.email.length===0,
    phone: formdata.phone.length>3 || formdata.phone.length===0,
  }

  const stepOneValidationOk = stepOneValidation.name && stepOneValidation.email && stepOneValidation.phone
  console.log(stepOneValidationOk)

  const {steps, currentStepIndex, isFirstStep, isLastStep, back, next, goto} = useMultiStepForm([
    <PersonalInfo key={1} title='Personal Info' subtitle='Please provide your name, email, address, and phone number' formdata={formdata} setFormdata={setFormdata} stepOneValidation={stepOneValidation}/>,
    <SelectYourPlan key={2} title='Select a Plan' subtitle='You have the option of monthly or yearly billing.' formdata={formdata} setFormdata={setFormdata} />,
    <Addons key={3} title='Add-ons' subtitle='Add-ons help enhance your gaming experience' formdata={formdata} setFormdata={setFormdata} />,
    <FinishingUp key={4} title='Finishing up' subtitle='Double-check everythng looks OK before confirming' formdata={formdata} setFormdata={setFormdata} changePage={changePage}/>,
  ]);

  function changePage(i){
    goto(i);
  }
  console.log(formdata) 
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    isLastStep ? setThankyou(true) : next();
  }

  return (
    <>
    {/* DESKTOP VERSION */}
    <form className='hidden md:flex bg-white rounded-xl flex w-[80%] h-[600px] p-4 max-w-[1000px] mx-auto' onSubmit={handleSubmit}>
      <div className='w-[30%] h-full rounded-xl relative overflow-hidden z-0 flex flex-col gap-8 pl-8 pt-12 shrink-0'>
        <div className='z-10 flex items-center gap-2'>
          <div className={currentStepIndex+1===1 ? 'form__step-circle_active' : 'form__step-circle'
          }><p>1</p></div>
          <div>
            <h3 className='text-white text-xs opacity-60'>STEP 1</h3>
            <h3 className='text-white font-bold '>YOUR INFO</h3>
          </div>
        </div>
        <div className='z-10 flex items-center gap-2'>
          <div className={currentStepIndex + 1 === 2 ? 'form__step-circle_active' : 'form__step-circle'}><p>2</p></div>
          <div>
            <h3 className='text-white text-xs opacity-60'>STEP 2</h3>
            <h3 className='text-white font-bold '>SELECT A PLAN</h3>
          </div>
        </div>
        <div className='z-10 flex items-center gap-2'>
          <div className={currentStepIndex + 1 === 3 ? 'form__step-circle_active' : 'form__step-circle'}><p>3</p></div>
          <div>
            <h3 className='text-white text-xs opacity-60'>STEP 3</h3>
            <h3 className='text-white font-bold '>ADD-ONS</h3>
          </div>
        </div>
        <div className='z-10 flex items-center gap-2'>
          <div className={ currentStepIndex + 1 === 4 ? 'form__step-circle_active' : 'form__step-circle'}><p>4</p></div>
          <div>
            <h3 className='text-white text-xs opacity-60'>STEP 4</h3>
            <h3 className='text-white font-bold '>SUMMARY</h3>
          </div>
        </div>
        <Image src={sideBarImageDesktop} width={400} height={300} alt='background image' className='absolute top-0 left-0 w-full h-full object-cover z-[-1]' priority />
      </div>
      {!thankyou && <div className='flex flex-col items-center mx-0 mt-12 w-full gap-4'>
        {steps[currentStepIndex]}
        <div className={!isFirstStep ? 'w-full flex justify-between w-[70%] items-end h-full' : 'w-full flex justify-end w-[70%] items-end h-full' }> 
          {!isFirstStep && <button className='text-gray-400 hover:text-black px-6 py-3 rounded-lg' type='button' onClick={back}>Go Back</button>}
          <button className='bg-black text-white px-6 py-3 rounded-lg' type='submit' disabled={!stepOneValidationOk}>{isLastStep ? 'Confirm' : 'Next Step'}</button>
        </div>
      </div>}
      {thankyou && <ThankYou />}
    </form>

    {/* MOBILE VERSION */}
    <form className='flex md:hidden bg-white rounded-xl w-[90%] p-4 max-w-[1000px] mx-auto' onSubmit={handleSubmit}>
      <Image src={sideBarImageMobile} width={400} height={300} alt='background image' className='absolute top-0 left-0 w-full h-1/3 object-cover -z-10' priority />
      <div className='relative flex flex-col items-center mt-2 mb-4 w-full gap-4'>
        <div className='w-full translate-y-[-100px] h-full rounded-xl overflow-hidden flex gap-8 justify-center'>
            <div className={currentStepIndex+1===1 ? 'form__step-circle_active' : 'form__step-circle'
            }><p>1</p></div>
            <div className={currentStepIndex + 1 === 2 ? 'form__step-circle_active' : 'form__step-circle'}><p>2</p></div>
            <div className={currentStepIndex + 1 === 3 ? 'form__step-circle_active' : 'form__step-circle'}><p>3</p></div>
            <div className={currentStepIndex + 1 === 4 ? 'form__step-circle_active' : 'form__step-circle'}><p>4</p></div>
        </div>
        {steps[currentStepIndex]}
        <div className={!isFirstStep ? 'fixed bottom-4 right-4 left-4 flex justify-between items-end' : 'fixed bottom-4 right-4 w-full flex justify-end items-end' }> 
          {!isFirstStep && <button className='text-gray-400 hover:text-black px-6 py-3 rounded-lg' type='button' onClick={back}>Go Back</button>}
          <button className='bg-black text-white px-6 py-3 rounded-lg' type='submit'>{isLastStep ? 'Confirm' : 'Next Step'}</button>
        </div>
      </div>
    </form>
    </>
  )
}

export default Form
