import BASE_URL from '../config/app.config/index'

export const URLGenerator = obj => {
  const { t } = obj
  let remURL = ``
  Object.keys(obj).reduce((acc, curr) => {
    if (curr !== 't') {
      acc += `&${curr}=${obj[curr]}`
    }
    remURL = acc
    return acc
  }, '')
  return `${BASE_URL}/search?t=${t + remURL}`
}
