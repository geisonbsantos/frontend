<template>
    <div class="navbar">
        <h3 class="logo"><i class="fa fa-star"></i>   Logo Marca</h3>
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
    .navbar{

      .logo{
          color: rgb(250, 251, 252);
      }
      .logout{
          color: rgb(249, 249, 250);
          text-decoration: none;
      }
    }
</style>
