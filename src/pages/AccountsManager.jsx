import { Card } from '../components/card/Card'
function AccountsManager () {
  return (
    <section className='flex flex-col justify-around '>
      <h1 className='text-3xl font-semibold mt-9 '>Cuentas</h1>

      <Card
        navigation={'/addNewAccount'}
        title={'Agregar nueva cuenta'}
        icon={'user'}
        text={'Agregue cuentas nuevas a la base de datos.'}
      />
      <Card
        navigation={'/searchAccount'}
        title={'Buscar cuenta'}
        icon={'glass'}
        text={
          'Realice una búsqueda de cuentas en la base de datos por medio del nombre'
        }
      ></Card>
      <Card
        navigation={'/modifyAccount'}
        title={'Modificar datos de cuenta'}
        icon={'glass'}
        text={
          'Modifique una cuenta en la base de datos por medio del código de la cuenta'
        }
      ></Card>
    </section>
  )
}
export default AccountsManager
