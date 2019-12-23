const longFunc = (i) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(i)
    }, Math.random() * 3 * 1000)
  })
}

const foo = async () => {
  for (let i = 0; i < 10; ++i) {
    /* longFunc(i)
      .then(r => {
        console.log(r)
      })
      .catch(e => {
        console.error(e.message)
      }) */
    const r = await longFunc(i)
    console.log(r)
  }
  return 'done'
}
export default {
  foo
}
