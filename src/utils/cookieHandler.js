export function setCookie (name, value, seconds) {
  const date = new Date()
  date.setTime(date.getTime() + seconds * 1000)
  const expires = 'expires=' + date.toUTCString()
  document.cookie = name + '=' + value + ';' + expires + ';path=/'
}

export const cookieGetter = () => {
  const cookies = document.cookie.split(';')
  const accessToken = cookies.find(cookie => cookie.startsWith('accessToken='))
  return accessToken ? accessToken.split('=')[1] : null
}

export function deleteCookie(cookieName) {
  document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
