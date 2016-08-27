// Very bare bones implementation of authenticaion.
// This can fleshed out based on the needs of your application; for the purposes
// of Silver Screen and in the interest of learning about authentication, this will suffice.

const auth = {
  login(context, credentials) {
    // context is the Vue context. We pass this in as a param to our function
    // so we have access to the VueResource plugin we installed earlier
    // which allows us to make requests to our server, like so :

    // context.$http.post('myapp.com/api/authenticate', {credentials: { email: 'foo@bar.com', password: 'foobar'} })
    const user = {email: 'john@example.com', token: '6786asdfasdfn78'}

    localStorage.setItem('user', JSON.stringify(user))
    this.isLoggedIn = true
  },

  getAuthenticatedUser() {
    if (this.isLoggedIn) {
      return JSON.parse(localStorage.getItem('user'))
    }
  },

  logout() {
    localStorage.removeItem('user')
    this.isLoggedIn = false
  }
}

Object.defineProperty(auth, 'isLoggedIn', {
  _isLoggedIn: false,
  get() {
    const user = localStorage.getItem('user')
    if (user) {
      console.log('...')
      return this._isLoggedIn = true
    }

    return false
  },

  set(value) {
    this._isLoggedIn = value
  }
})

// Quick Tip : this will give you global access via the console to the current auth state. This is sometimes useful for debugging and should be removed for production.
window.auth = auth

export default auth
