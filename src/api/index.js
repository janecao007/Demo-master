import fetch from '../servers/fetch.js'
export function getList () {
  const params = {
    cmd: 'tags'
  }
  return fetch({
    data: params
  })
}
export function getImageList (query) {
  const params = {
    cmd: 'list'
  }
  return fetch({
    data: Object.assign({}, params, query)
  })
}
