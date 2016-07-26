
function createLogger() {
  return () => next => action => {
    const { payload, type } = action
    console.debug('🍻 %s 🛠 %o', type, payload)
    return next(action)
  }
}

export default createLogger
