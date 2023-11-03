import { useNavigate } from 'react-router-dom'
import { IconSelector } from '../iconSelector/IconSelector'

export const Button = ({ text, className, icon, navigation, type }) => {
  const navigate = useNavigate()
  return (
    <button
      type={type}
      className={`flex items-center  text-md px-4 py-1 rounded-sm border-2 transform transition-transform  active:scale-95 ${className}`}
      onClick={() => navigate(navigation)}
    >
      <IconSelector name={icon} />
      <p className={`${icon && 'ms-2'}`}>{text}</p>
    </button>
  )
}
