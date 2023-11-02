import { IoIosCart } from 'react-icons/io'
export const Footer = () => {
  return (
    <div className='bg-primary text-lime-50 p-7 flex justify-between'>
      <h1 className='flex flex-col text-2xl font-bold'>
        Digital
        <div className='flex'>
          <p className='text-secondary text-sm  '>Market </p>
          <IoIosCart color='#C19A6B' />
        </div>
      </h1>
      <ul className='md:flex md:space-x-7  '>
        <li className=' cursor-pointer border-2 border-primary  hover:border-b-secondary'>
          Iniciar sesión
        </li>
        <li className=' cursor-pointer border-2 border-primary  hover:border-b-secondary'>
          Soluciones
        </li>
        <li className='  cursor-pointer border-2 border-primary  hover:border-b-secondary'>
          Contáctanos
        </li>
      </ul>
    </div>
  )
}
