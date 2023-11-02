export const IconSelector = ({ name, className }) => {
  switch (name) {
    case 'menuBars':
      return (
        <svg
          width='36'
          height='20'
          viewBox='0 0 36 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1.5 1H34.5M1.5 10H34.5M1.5 19H34.5'
            stroke='white'
            className={`w-6 h-6  ${className}`}
          />
        </svg>
      )
    case 'shopingCart':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className={`w-6 h-6  ${className}`}
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
            className={`${className}`}
          />
        </svg>
      )
    case 'glass':
      return (
        <svg
          width='32'
          height='33'
          viewBox='0 0 32 33'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={`w-6 h-6  ${className}`}
        >
          <path
            d='M28.5431 26.8369L22.6625 20.9562C24.0783 19.0715 24.8426 16.7773 24.84 14.42C24.84 8.39875 19.9412 3.5 13.92 3.5C7.89875 3.5 3 8.39875 3 14.42C3 20.4412 7.89875 25.34 13.92 25.34C16.2773 25.3426 18.5715 24.5783 20.4562 23.1625L26.3369 29.0431C26.6346 29.3092 27.0228 29.4513 27.4219 29.4401C27.821 29.4289 28.2007 29.2654 28.4831 28.9831C28.7654 28.7007 28.9289 28.321 28.9401 27.9219C28.9513 27.5228 28.8092 27.1346 28.5431 26.8369ZM6.12 14.42C6.12 12.8773 6.57746 11.3693 7.43454 10.0866C8.29161 8.80385 9.50981 7.8041 10.9351 7.21374C12.3603 6.62338 13.9287 6.46891 15.4417 6.76988C16.9548 7.07084 18.3446 7.81372 19.4354 8.90457C20.5263 9.99542 21.2692 11.3852 21.5701 12.8983C21.8711 14.4113 21.7166 15.9797 21.1263 17.4049C20.5359 18.8302 19.5362 20.0484 18.2534 20.9055C16.9707 21.7625 15.4627 22.22 13.92 22.22C11.8521 22.2175 9.86955 21.3949 8.40731 19.9327C6.94506 18.4704 6.12248 16.4879 6.12 14.42Z'
            fill='black'
          />
        </svg>
      )
    case 'user':
      return (
        <svg
          width='30'
          height='22'
          viewBox='0 0 30 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={`w-6 h-6  ${className}`}
        >
          <path
            d='M16.3333 5.66668C16.3333 2.72001 13.9466 0.333344 11 0.333344C8.05331 0.333344 5.66665 2.72001 5.66665 5.66668C5.66665 8.61334 8.05331 11 11 11C13.9466 11 16.3333 8.61334 16.3333 5.66668ZM13.6666 5.66668C13.6666 7.13334 12.4666 8.33334 11 8.33334C9.53331 8.33334 8.33331 7.13334 8.33331 5.66668C8.33331 4.20001 9.53331 3.00001 11 3.00001C12.4666 3.00001 13.6666 4.20001 13.6666 5.66668ZM0.333313 19V21.6667H21.6666V19C21.6666 15.4533 14.56 13.6667 11 13.6667C7.43998 13.6667 0.333313 15.4533 0.333313 19ZM2.99998 19C3.26665 18.0533 7.39998 16.3333 11 16.3333C14.5866 16.3333 18.7066 18.04 19 19H2.99998ZM25.6666 15V11H29.6666V8.33334H25.6666V4.33334H23V8.33334H19V11H23V15H25.6666Z'
            fill='black'
          />
        </svg>
      )
    case 'backArrow':
      return (
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8.38462 16.3846L1 9L8.38462 1.61539M2.02564 9H17'
            stroke='#070705'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className={`w-6 h-6  ${className}`}
          />
        </svg>
      )
    case 'close':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className={`w-10 h-10  ${className}`}
        >
          <path d='M6 18L18 6M6 6l12 12' />
        </svg>
      )
    case 'upArrow':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          class='w-6 h-6'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3'
          />
        </svg>
      )
    default:
      return null
  }
}
