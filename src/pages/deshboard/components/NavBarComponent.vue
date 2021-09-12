<template>
    <div class="navbar">
        <h3 class="logo"><i class="fa fa-star"></i><img src="http://localhost:8080/#/src/assets/Logo_YALO_med.png" /></h3>
        <a href="" @click.prevent="logout" class="logout">Sair <i class="fas fa-sign-out-alt"></i></a>
    </div>
</template>

<script>
export default {
    name: 'NavBarComponent',
    methods: {
        logout(){
            this.$router.push({name: 'login'});
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/_main';
    .navbar{

      .logo{
          color: $primary;
      }
      .logout{
          color: $primary;
          text-decoration: none;
      }
    }
</style>
