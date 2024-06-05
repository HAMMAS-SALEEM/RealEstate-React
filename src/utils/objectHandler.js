export const filterObjectByKey = (key, obj) => {
  return Object.keys(obj).reduce((acc, curr) => {
    if (curr !== key) {
      acc[curr] = obj[curr]
    }
    return acc
  }, {})
}
