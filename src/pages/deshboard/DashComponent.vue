<template>
    <div class="main">
        <div class="sidebar">
            <SideBarComponent />
        </div>

        <div class="content-right">
            <div class="navbar">
                <NavBarComponent />
            </div>

            <div class="pages">
                <slot name="slot-pages"></slot>
            </div>

            <div class="rodape">
                <p>Todos os direitos reservados</p>
            </div>
        </div>
    </div>
</template>

<script>
import SideBarComponent from './components/SideBarComponent';
import NavBarComponent from './components/NavBarComponent';
//import PagesComponent from './components/PagesComponent';

export default {
    name: 'DashBoard',
    components: {
            SideBarComponent,
            NavBarComponent,
            //PagesComponent,
        }
}
</script>

<style lang="scss" src="./style.scss" scoped />