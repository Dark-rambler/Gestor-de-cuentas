import { Card } from '../components/card/Card'
function AccountsManager () {
  return (
    <section className='flex flex-col justify-around '>
      <h1 className='text-3xl font-semibold mt-9 '>Cuentas</h1>

      <Card
        navigation={'/addNewAccount'}
        title={'Agregar nueva cuenta'}
        icon={'user'}
        text={
          'Agrega una nueva cuenta al sistema, recuerda que el código debe ser único.'
        }
      />
      <Card
        navigation={'/searchAccount'}
        title={'Buscar cuenta'}
        icon={'glass'}
        text={
          'Busca una cuenta en el sistema, puedes buscar por nombre.  '
        }
      ></Card>
      <Card
        navigation={'/modifyAccount'}
        title={'Modificar datos de cuenta'}
        icon={'glass'}
        text={
          'Modifica los datos de una cuenta en el sistema, puedes buscar por codigo.  '
        }
      ></Card>
    </section>
  )
}
export default AccountsManager
