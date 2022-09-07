export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, '', event.target.href)
    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
    const urls = {
      '/': './images/mountains-universe-1.png',
      '/theuniverse': './images/mountains-universe-2.png',
      '/exploration': './images/mountains-universe-3.png',
      404: './images/mountains-universe-3.png'
    }
    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
        document.querySelector('#bg-image').setAttribute('src', urls[pathname])
      })
  }
}
