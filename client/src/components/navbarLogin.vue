<template>
  <div class="main">
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">Medical Services</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

            <b-navbar-nav class="navLink">
                <router-link to='/'>Home</router-link>
                <router-link to='/pharmacie'>Pharmacies</router-link>
                <router-link to='/hospital'>Hospitals</router-link>
                <router-link to='/doctor'>Doctors</router-link>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto navLink">
                <router-link to='/login'>Login</router-link>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        
      </div>
      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'navbarLogin',
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navLink a {
  padding: 0 10px;
  color: white;
  /* font-weight: bold; */
}
</style>
