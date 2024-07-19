import Image from 'next/image'
import checkIcon from '@/public/assets/images/icon-thank-you.svg'
const ThankYou = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full gap-4'>
      <Image className='w-20' src={checkIcon} height={400} width={400} alt='Check icon' />
      <h2 className='text-3xl font-bold'>Thank you!</h2>
      <p className='text-center text-gray-400 px-12'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default ThankYou
