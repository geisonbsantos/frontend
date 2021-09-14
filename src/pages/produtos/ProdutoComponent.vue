<template>
    <DashComponent>
        <div slot="slot-pages" class="content-pages">
            
            <header class="title-pages">
                <p>Página de Produtos</p>
            </header>
            
        </div>
    </DashComponent>
</template>

<script>
    import DashComponent from '../deshboard/DashComponent';

    export default{
        name: 'ProdutoComponent',

        components: {
            DashComponent,
        }
    }
</script>

<style lang="scss" src="./style.scss" scoped />