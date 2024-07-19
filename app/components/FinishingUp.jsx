import Link from 'next/link'
import { upperCaseFirstLetter } from '../utils/converters'
import useTotalCalculator from '../hooks/useTotalCalculator'
import useMultiStepForm from '../hooks/useMultiStepForm'

const FinishingUp = ({title, subtitle, formdata, changePage}) => {
  const isOnlineServiceSelected = formdata.onlineService
  const isLargerStorageSelected = formdata.largerStorage
  const isCustomizableProfileSelected = formdata.customizableProfile
  const { planCost, onlineServiceCost, largerStorageCost, customizableProfileCost, totalCost }  = useTotalCalculator(formdata)
  return (
    <div className="w-[80%]">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <p className="mt-2 text-gray-400 w-[80%]">{subtitle}</p>
      </div>
      <div className='mt-8'>
        <div className="flex justify-center w-full flex-col bg-blue-50 p-4 gap-3">
          <div className='flex w-full justify-between items-center'>
            <div>
              <h3 className='font-bold text-blue-800'>{upperCaseFirstLetter(formdata.plan)} ({formdata.yearly ? 'Yearly' : 'Monthly'})</h3>
              <button type='button' className='text-sm text-gray-400 underline' onClick={()=>changePage(1)}>Change</button>
            </div>
            <p className='font-bold'>${planCost}/{planCost ? 'yr' : 'mo'}</p>
          </div>
          <div className='w-full h-[1px] bg-gray-200 my-2'></div>
         {isOnlineServiceSelected && <div className='flex w-full justify-between items-center'>
            <p className='text-sm text-gray-400'>Online service</p>
            <p className='text-sm'>${onlineServiceCost}/{formdata.yearly ? 'yr' : 'mo'}</p>
          </div>}
          {isLargerStorageSelected && <div className='flex w-full justify-between items-center'>
            <p className='text-sm text-gray-400'>Larger storage</p>
            <p className='text-sm'>${largerStorageCost}/{formdata.yearly ? 'yr' : 'mo'}</p>
          </div>}
          {isCustomizableProfileSelected && <div className='flex w-full justify-between items-center'>
            <p className='text-sm text-gray-400'>Customizable Profile</p>
            <p className='text-sm'>${customizableProfileCost}/{formdata.yearly ? 'yr' : 'mo'}</p>
          </div>}
        </div>
          <div className='flex w-full mx-auto justify-between items-center p-4'>
            <p className='text-sm text-gray-400'>Total (per month)</p>
            <p className='text-blue-800 font-bold'>+${totalCost}/{formdata.yearly ? 'yr' : 'mo'}</p>
          </div>
      </div>
    </div>
  )
}

export default FinishingUp
