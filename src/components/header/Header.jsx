//import { FaBars } from 'react-icons/fa'
import { Button } from '../button/Button'
import { IconSelector } from '../iconSelector/IconSelector'
import { IoIosCart } from 'react-icons/io'
export const Header = ({ onClickSidebarButton, showMenu }) => {
  return (
    <div className='transition-all duration-75 shadow-md'>
      <div className='bg-primary text-xl  text-lime-50 py-5 px-6 flex  justify-between'>
        <div className='flex items-center space-x-3'>
          <span className='cursor-pointer w-8' onClick={onClickSidebarButton}>
            <IconSelector name={!showMenu ? 'menuBars' : 'close'} />
          </span>
          <h1 className='flex flex-col font-bold'>
            Digital
            <div className='flex'>
              <p className='text-secondary text-sm  '>Market </p>
              <IoIosCart color='#C19A6B' />
            </div>
          </h1>
        </div>

        <div className='flex space-x-4 items-center'>
          <Button
            text={'Salir'}
            className={
              'text-white  border-secondary/40 bg-secondary/40 hover:bg-secondary transition-colors duration-500'
            }
          >
            Salir
          </Button>
        </div>
      </div>
    </div>
  )
}
