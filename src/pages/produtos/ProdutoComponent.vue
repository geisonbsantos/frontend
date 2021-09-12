<template>
    <DashComponent>
        <div slot="slot-pages" class="content-pages">
            
            <!--<header class="title-pages">
                <p>Página Inicial</p>
            </header>-->

            <div>
                <div class="row">
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Produtos'" :porcent="'15%'" :icon="'fa-store'" :qtd="'350'" />
                    </div>
                </div>
            </div>

            <div class="mt-5">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <ListasComponent :data="users" description="Produtos" :columns="['IdUsu', 'Nome', 'Valor']" />
                    </div>
                </div>
            </div>
        </div>
    </DashComponent>
</template>

<script>
    import DashComponent from '../deshboard/DashComponent';
    import CardsComponent from '../../components/CardsComponent';
    import ListasComponent from '../../components/ListasComponent';
    const  axios  =  require ('axios');

    export default{
        name: 'ProdutoComponent',
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
                    console.log(resposta.data); 
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