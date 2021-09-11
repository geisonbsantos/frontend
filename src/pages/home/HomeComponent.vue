<template>
    <DashComponent>
        <div slot="slot-pages" class="content-pages">
            
            <!--<header class="title-pages">
                <p>Página Inicial</p>
            </header>-->

            <div>
                <div class="row">
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Clientes'" :porcent="'7%'" :icon="'fa-users'" :qtd="'9.000'" />
                    </div>
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Produtos'" :porcent="'15%'" :icon="'fa-store'" :qtd="'350'" />
                    </div>
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Vendas'" :porcent="'86%'" :icon="'fa-box'" :qtd="'90.000'" />
                    </div>
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Relatórios'" :porcent="'90%'" :icon="'fa-chart-bar'" :qtd="'10.000'" />
                    </div>
                </div>
            </div>

            <div class="mt-5">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <ListasComponent :data="users" description="Clientes" :columns="['IdUsu', 'Nome', 'E-mail']" />
                    </div>
                    <div class="col-12 col-md-6">
                        <ListasComponent :data="users" description="Produtos" :columns="['IdUsu', 'Nome', 'Valor']" />
                    </div>
                </div>
            </div>
        </div>
    </DashComponent>
</template>

<script>
    /* eslint-disable*/
    import DashComponent from '../deshboard/DashComponent';
    import CardsComponent from '../../components/CardsComponent';
    import ListasComponent from '../../components/ListasComponent';
    const  axios  =  require ('axios');

    export default{
        name: 'HomeComponent',
        data(){
            return{
                users: []
            }
        },
        mounted(){
            this.getUsers();
        },
        methods:{
            async getUsers(){
                let  resposta  = await axios.get ('https://jsonplaceholder.typicode.com/users'); 
                if(resposta.status == 200){
                    this.users = resposta.data; 
                }else{
                    console.error("Ocorreu um erro na API.");
                }

                resposta  = await axios.get ('http://localhost:8000/api/'); 
                if(resposta.status == 200){
                    console.log(response.data); 
                }else{
                    console.error("Ocorreu um erro na API.");
                }
            }
        },
        components: {
            DashComponent,
            CardsComponent,
            ListasComponent,
        }
    }
</script>

<style lang="scss" src="./style.scss" scoped />