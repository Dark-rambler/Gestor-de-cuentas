import { getAccounts } from '../services/accounts'
import { Button } from '../components/button/Button'
import { useQuery } from 'react-query'
import { useState } from 'react'
import { errorToast } from '../services/toasts'

function SearchAccount () {
  const [search, setSearch] = useState([])
  const { isLoading, data, isError } = useQuery({
    queryKey: ['accounts'],
    queryFn: () => getAccounts(1),
    onSuccess: () => {
      setSearch(data)
    },
    onError: () => {
      errorToast('No se pudo cargar las cuentas')
    }
  })
  const searchAccount = value => {
    const objetosEncontrados = data.filter(item =>
      item.nombre.toLowerCase().startsWith(value.toLowerCase())
    )
    setSearch(objetosEncontrados)
  }

  return (
    <section className='py-6'>
      <Button
        text={'Volver'}
        icon={'backArrow'}
        className={'border-2 border-primary font-bold'}
        navigation={'/'}
      />
      <h1 className='text-4xl my-10'>Buscar cuenta</h1>
      <label htmlFor='' className='font-bold'>
        Buscar
        <input
          onChange={e => searchAccount(e.target.value)}
          type='text'
          className='border-2 border-primary w-full h-10 rounded ps-2'
        />
      </label>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl my-6 font-semibold'>Resultado</h2>
        <Button
          text={'Descargar PDF'}
          icon={'backArrow'}
          className={'border border-primary font-bold'}
        />
      </div>{' '}
      <div className='overflow-hidden overflow-y-auto max-h-96 min-h-0'>
        <table className='border-primary border-2 w-full '>
          <thead className='border-primary border-2'>
            <tr className=''>
              <th>Código</th>
              <th className='border-primary border-2'>Nombre</th>
              <th>Saldo</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading ? (
              search.length > 0 ? (
                search.map((item, index) => (
                  <tr
                    className='border-primary border-2 text-center'
                    key={index}
                  >
                    <td>{item.codigo}</td>
                    <td className='border-primary border-x-2'>{item.nombre}</td>
                    <td>{item.haber - item.debe}</td>
                  </tr>
                ))
              ) : (
                <div className=''>no se encontraton coincidencias</div>
              )
            ) : (
              isLoading && <span className='ms-11'>Cargando...</span>
            )}

            {isError && <span className='ms-11'>Hubo un error</span>}
          </tbody>
        </table>
      </div>
    </section>
  )
}
export default SearchAccount
