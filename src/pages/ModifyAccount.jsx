import { Button } from '../components/button/Button'
import { errorToast, succesToast } from '../services/toasts'

import { getAccounts, updateAccount } from '../services/accounts'

import { useQuery } from 'react-query'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

function ModifyAccount () {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm()

  const { data } = useQuery({
    queryKey: ['accounts'],
    queryFn: () => getAccounts(1),
    onError: () => {
      errorToast('No se pudo cargar las cuentas')
    }
  })

  const modifyAccountMutation = useMutation({
    mutationFn: updateAccount,
    onSuccess: () => {
      succesToast('Cuenta modificada con éxito')
    },
    onError: () => {
      errorToast('No se pudo modificar la cuenta')
    }
  })

  const findIdAccount = () => {
    const account = data.find(item => item.codigo == watch('code'))
    if (!account) {
      console.log('No se encontró la cuenta')
      return
    }
    return account.id
  }

  const onSubmit = () => {
    const values = {
      nombre: watch('name'),
      debe: watch('debe'),
      haber: watch('haber')
    }

    const id = findIdAccount()
    if (!id) {
      errorToast('No se encontró la cuenta, revisa el código')
      return
    }

    modifyAccountMutation.mutate({
      id,
      values,
      negocioId: 1
    })
    reset()
  }
  return (
    <section className='my-6'>
      <Button
        text={'Volver'}
        icon={'backArrow'}
        className={'border-primary font-bold '}
        navigation={'/'}
      />

      <h1 className='text-4xl my-10'>Modificar cuenta</h1>

      <label htmlFor='' className='font-bold flex flex-col text-lg my-6'>
        Código
        <input
          type='text'
          className='border-2 border-primary h-10 text-xl mt-2 shadow-md rounded px-2'
          {...register('code', {
            required: {
              value: true,
              message: 'El código es requerido'
            }
          })}
        />
        {errors.code && (
          <span className='text-red-500'>{errors.code.message}</span>
        )}
      </label>
      <form action='' onSubmit={handleSubmit(onSubmit)}>
        <hr className='border-primary mt-12' />
        <label htmlFor='' className='font-bold flex flex-col text-lg my-6'>
          Nombre
          <input
            type='text'
            className='border-2 border-primary h-10 text-xl mt-2 shadow-md rounded px-2'
            {...register('name', {
              required: {
                value: true,
                message: 'El nombre es requerido'
              }
            })}
          />
          {errors.name && (
            <span className='text-red-500'>{errors.name.message}</span>
          )}
        </label>
        <label htmlFor='' className='font-bold flex flex-col text-lg my-6'>
          Debe
          <input
            type='text'
            className='border-2 border-primary h-10 text-xl mt-2 shadow-md rounded px-2'
            {...register('debe', {
              required: {
                value: true,
                message: 'El debe es requerido'
              },
              pattern: {
                value: /^[0-9]+$/,
                message: 'El debe es un valor numérico'
              }
            })}
          />
          {errors.debe && (
            <span className='text-red-500'>{errors.debe.message}</span>
          )}
        </label>
        <label htmlFor='' className='font-bold flex flex-col text-lg my-6'>
          Haber
          <input
            type='text'
            className='border-2 border-primary h-10 text-xl mt-2 shadow-md rounded px-2'
            {...register('haber', {
              required: {
                value: true,
                message: 'El haber es requerido'
              },
              pattern: {
                value: /^[0-9]+$/,
                message: 'El haber es un valor numérico'
              }
            })}
          />
          {errors.haber && (
            <span className='text-red-500'>{errors.haber.message}</span>
          )}
        </label>
        <div className='flex justify-between mt-10'>
          <Button
            navigation={'/'}
            text={'Cancelar'}
            className={'border-tertiary text-tertiary'}
            type={'button'}
          />
          <Button
            text={'Crear cuenta'}
            className={' bg-secondary text-primary font-bold float-right '}
          />
        </div>
      </form>
    </section>
  )
}

export default ModifyAccount
