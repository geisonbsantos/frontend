<template>
    <DashComponent>
        <div slot="slot-pages" class="content-pages">
            
            <header class="title-pages">
                <p>Página de Vendas</p>
            </header>
            
        </div>
        
    </DashComponent>
</template>

<script>
    import DashComponent from '../deshboard/DashComponent';
    //import CardsComponent from '../../components/CardsComponent';

    export default{
        name: 'VendaComponent',

        components: {
            DashComponent,
        }
    }
</script>

<style lang="scss" src="./style.scss" scoped />