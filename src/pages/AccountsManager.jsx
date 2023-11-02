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
          'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!'
        }
      />
      <Card
        navigation={'/searchAccount'}
        title={'Buscar cuenta'}
        icon={'glass'}
        text={
          'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!  '
        }
      ></Card>
      <Card
        navigation={'/modifyAccount'}
        title={'Modificar datos de cuenta'}
        icon={'glass'}
        text={
          'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!  '
        }
      ></Card>
    </section>
  )
}
export default AccountsManager
