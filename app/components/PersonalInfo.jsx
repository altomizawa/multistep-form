import formErrors from '../utils/formErrors'

function PersonalInfo({ title, subtitle, formdata, setFormdata, stepOneValidation}) {
  console.log(stepOneValidation)
  return (
    <div className='w-[80%]'>
      <div className='w-full'>
          <h2 className='text-3xl md:text-4xl font-bold'>{title}</h2>
          <p className='mt-2 text-gray-400 w-[80%]'>{subtitle}</p>
        </div>
        <div className='flex flex-col mt-4 w-full relative'>
          {!stepOneValidation.name && <p className='absolute top-0 right-0 text-sm text-red-500 font-bold'>{formErrors('name')}</p>}
          <label htmlFor="name">Name</label>
          <input autoFocus required className='px-4 py-3 rounded-lg border border-gray-300 font-bold' placeholder="e.g. Stephen King" name='name' value={formdata.name} onChange={(e)=>setFormdata({...formdata, [e.target.name]: e.target.value})}/>
        </div>
        <div className='flex flex-col w-full mt-4 relative'>
          {!stepOneValidation.email && <p className='absolute top-0 right-0 text-sm text-red-500 font-bold'>{formErrors('email')}</p>}
          <label htmlFor="email">Email Address</label>
          <input required className='px-4 py-3 rounded-lg border border-gray-300 font-bold' placeholder="e.g. stephenking@lorem.com" name='email' value={formdata.email} onChange={(e)=>setFormdata({...formdata, [e.target.name]: e.target.value})}/>
        </div>
        <div className='flex flex-col w-full relative mt-4'>
          {!stepOneValidation.phone && <p className='absolute top-0 right-0 text-sm text-red-500 font-bold'>{formErrors('phone')}</p>}
          <label htmlFor="phone">Phone Number</label>
          <input required className='px-4 py-3 rounded-lg border border-gray-300 font-bold' placeholder="e.g. +1 234 567 890" name='phone' value={formdata.phone} onChange={(e)=>setFormdata({...formdata, [e.target.name]: e.target.value})}/>
        </div>
    </div>
  )
}

export default PersonalInfo
