<template>
    <DashComponent>
        <div slot="slot-pages" class="content-pages">
            
            <!--<header class="title-pages">
                <p>Página Inicial</p>
            </header>-->

            <div>
                <div class="row">
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Clientes'" :porcent="'7%'" :icon="'fa-users'" :qtd="clients.length" />
                    </div>
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Produtos'" :porcent="'15%'" :icon="'fa-store'" :qtd="products.length" />
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
                        <ListasComponent :data="clients" description="Clientes" :columns="['IdCli', 'Nome', 'E-mail']" />
                    </div>
                    <div class="col-12 col-md-6">
                        <ListasComponent :data="products" description="Produtos" :columns="['IdPro', 'Nome', 'Valor']" />
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
                //users: [],
                clients: [],
                products: [],
            }
        },
        mounted(){
            this.getUsers();
        },
        methods:{
            async getUsers(){
                let  response  = await axios.get ('/'); 
                if(response.status == 200){
                    this.clients = response.data.clients;
                    this.products = response.data.products;  
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