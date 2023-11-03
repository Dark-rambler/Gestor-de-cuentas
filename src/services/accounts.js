import axios from 'axios'

//instancia de axios para la api de cuentas
const accountApi = axios.create({
  baseURL: 'https://web-production-0986.up.railway.app/api/v1/cuentas/'
})

export const getAccounts = async id => {
  const { data } = await accountApi.get(`/${id}`)
  return data
}

export const createAccount = async account => {
  const { data } = await accountApi.post(`/`, account)
  return data
}

export const updateAccount = async params => {
  const { data } = await accountApi.patch(
    `/${params.negocioId}/${params.id}`,
    params.values
  )
  return data
}
