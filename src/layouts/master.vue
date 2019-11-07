<template>
    <div class="main">

        <nav class="navbar is-fixed-top is-info is-bold" role="navigation" aria-label="main navigation">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                <img src="https://www.singsys.co.in/assets/images/logo.png" width="112" height="28">
              </a>
              <a role="button" class="navbar-burger burger" data-target="navMenu" aria-expanded="false" aria-label="menu" >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navMenu" class="navbar-menu" >
              <div class="navbar-start">
                <router-link to="/" class="navbar-item">Home</router-link>
                <router-link to="/installation" class="navbar-item">Installation</router-link>
              </div>

              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="buttons">
                    <a class="button is-primary">
                      <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <router-view />
        <footer class="footer">
          <div class="content has-text-centered">
            <p>
              <strong>Progress Bar</strong> by <a href="http://singsys.com/">Hitesh Kumar</a>. The source code is licensed
              <a href="http://singsys.com/">MIT</a>. The website content
              is licensed <a href="http://singsys.com/">CC BY NC SA 1.0</a>.
            </p>
          </div>
        </footer>
    </div>
</template>
<script>

  export default {
    name: 'master',
    data () {
      return {
        showMenu: false
      }
    },
    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu
      },
    }
  }
</script>
