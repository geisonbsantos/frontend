<template>
    <DashComponent>
        <div slot="slot-pages" class="content-pages">
            
            <header class="title-pages">
                <p>Página de Relatórios</p>
            </header>
            
        </div>
        
    </DashComponent>
</template>

<script>
    import DashComponent from '../deshboard/DashComponent';

    export default{
        name: 'RelatorioComponent',

        components: {
            DashComponent,
        }
    }
</script>

<style lang="scss" src="./style.scss" scoped />