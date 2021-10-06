<template>
    <DashComponent>
        <div slot="slot-pages" class="content-info">
            <header>
                <h1><p>Página de Vendas</p></h1>
            </header>
            <div class="dados">
                <h3><p>Para gerar jogos é preciso está logado</p></h3>

            </div>
            <div class="form">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Quantos jogos?</label>
                        <input type="email" class="form-control"  placeholder="Quantos jogos?">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Quantos números?</label>
                        <input type="text" class="form-control"  placeholder="Quantos números?">
                    </div>
                    <button type="submit" class="btn btn-primary btnLogin" @click.prevent="login">Gerar</button>
                </form>
            </div> 
            <div></div>  
        </div>  
    </DashComponent>
</template>

<script>
    import DashComponent from '../deshboard/DashComponent';
    //import CardsComponent from '../../components/CardsComponent';

    export default{
        name: 'VendaComponent',

        data(){
            return{

            }
        },
        methods: {
            login(){
                this.$router.push({name: 'cliente'});
            }
        },

        components: {
            DashComponent,
        }
    }
</script>

<style lang="scss" src="./style.scss" scoped />