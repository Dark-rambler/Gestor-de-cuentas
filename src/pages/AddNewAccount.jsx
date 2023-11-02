import { Button } from '../components/button/Button'

import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import { createAccount } from '../services/accounts'
import { errorToast, succesToast } from '../services/toasts'

function AddNewAccount () {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm()

  const addProductMutation = useMutation({
    mutationFn: createAccount,
    onSuccess: () => {
      succesToast('Cuenta creada con éxito')
    },
    onError: () => {
      errorToast('No se pudo crear la cuenta')
    }
  })

  const onSubmit = () => {
    addProductMutation.mutate({ ...watch(), negocioId: 1 })
    reset()
  }

  return (
    <section className='my-6'>
      <Button
        className={'border-primary font-bold'}
        text={'Volver'}
        icon={'backArrow'}
        navigation={'/'}
      />

      <h1 className='text-4xl my-10'>Agregar nueva cuenta</h1>

      <form action='' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='' className='font-bold flex flex-col text-lg my-8'>
          Código
          <input
            type='text'
            className='border-2 border-primary h-10 text-xl mt-2 shadow-md rounded px-2'
            {...register('codigo', {
              required: {
                value: true,
                message: 'El código es requerido'
              },
              pattern: {
                value: /^[0-9.]+$/,
                message: 'El código deben ser un números'
              }
            })}
          />
          {errors.codigo && (
            <span className='text-red-500'>{errors.codigo.message}</span>
          )}
        </label>
        <label htmlFor='' className='font-bold flex flex-col text-lg my-6'>
          Nombre
          <input
            type='text'
            className='border-2 border-primary h-10 text-xl mt-2 shadow-md rounded px-2'
            {...register('nombre', {
              required: {
                value: true,
                message: 'El nombre es requerido'
              }
            })}
          />
          {errors.nombre && (
            <span className='text-red-500'>{errors.nombre.message}</span>
          )}
        </label>
        <Button
          text={'Crear cuenta'}
          className={'bg-secondary text-primary font-bold float-right'}
        />
      </form>
    </section>
  )
}

export default AddNewAccount
