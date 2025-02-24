"use client"

const DealerCard = ({icon, title1, title2, count}) => {
  return (
    <div className='w-1/2 h-40 rounded-lg bg-[#F7F9FC] m-3'>
        <div className='flex justify-between items-center p-4'>
            <p className='text-[#615E83] text-base font-semibold'>{title1}<br/>{title2}</p>
            <div className='w-8 h-8 rounded-full bg-white flex justify-center items-center'>
                <img className='w-5 h-5 text-red-500' src={icon} alt="icon" />
            </div>
        </div>
        <p className="p-4 text-4xl font-bold">{count}</p>
    </div>
  )
}

export default DealerCard