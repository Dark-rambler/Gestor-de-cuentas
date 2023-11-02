import { useNavigate } from 'react-router-dom'

import { IconSelector } from '../iconSelector/IconSelector'

export const Card = ({ title, icon, text, navigation }) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(navigation)}
      className=' cursor-pointer transform transition-transform  active:scale-95 hover:scale-105 my-4 px-4 py-7 bg-white rounded shadow-2xl border overflow-hidden '
    >
      <div className=' text-gray-700 text-lg  space-x-2 py-4 flex items-center '>
        <IconSelector name={icon} />
        <h1 className='font-bold '>{title}</h1>
      </div>
      <p className=''>{text}</p>
    </div>
  )
}
