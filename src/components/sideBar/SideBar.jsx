export const SideBar = ({ showMenu }) => {
  return (
    <ul
      className={`${showMenu ? 'w-[200px]  left-0' : 'left-[-280px]'} 
    transition-all
    h-[calc(100vh-85px)]
    md:h-screen
    absolute 
    top-[85px]
    text-white
  border-r-gray-200
  bg-primary z-10 
    ease-in-out 
    duration-200
    whitespace-nowrap
    overflow-y-hidden
    ps-4
    pe-5
 `}
    >
      <li className=' relative cursor-pointer border-2 border-primary  hover:border-b-secondary/50'>
        <a href=''>Iniciar sesión</a>
      </li>
      <li className='cursor-pointer border-2 border-primary  hover:border-b-secondary/50'>
        Soluciones
      </li>
      <li className='cursor-pointer border-2 border-primary  hover:border-b-secondary/50'>
        <a href=''>Contáctanos</a>
      </li>
    </ul>
  )
}
