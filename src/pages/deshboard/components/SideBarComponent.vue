<template>
    <div class="sidebar">
        <div class="topMenu">
            <div class="avatar">
                <span><i class="fa fa-user icon"></i></span>
            </div>
            <div class="info">
                <p class="name">Geison Santos</p>
                <p class="status">Online</p>
            </div>
        </div>

        <div class="menu">
            <ul>
                <li><router-link :to="{name: 'login'}"><i class="fa fa-home icon"></i> Início</router-link></li>
                <li><router-link :to="{name: 'home'}"><i class="fa fa-home icon"></i> Home</router-link></li>
                <li><router-link :to="{name: 'cliente'}"><i class="fa fa-users icon"></i> Clientes</router-link></li>
                <li><router-link :to="{name: 'produto'}"><i class="fa fa-store icon"></i> Produtos</router-link></li>
                <li><router-link :to="{name: 'venda'}"><i class="fa fa-box icon"></i> Vendas</router-link></li>
                <li><router-link :to="{name: 'relatorio'}"><i class="fa fa-chart-bar icon"></i> Relatórios</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBarComponent',
}
</script>

<style lang="scss">
 .sidebar{

     .topMenu{
         width: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
         padding: 25px 5px;
         margin-top: 90px;

         .avatar{
             margin-right: 10px;

             span{
                 display: block;
                 width: 50px;
                 height: 50px;
                 border-radius: 50%;
                 background-color: rgb(224, 49, 201);
                 display: flex;
                 justify-content: center;
                 align-items: center;
                 font-size: 25px;
                 color: rgb(88, 25, 85);
             }
         }
         .info{
             p{
                 margin: 0;
                 color: rgb(244, 245, 247);
             }
             .name{
                 font-size: 14px;
             }
             .status{
                 font-size: 10px;
             }
         }
     }

     .menu{
         display: flex;
         margin-top: 15px;
         padding: 10px;

         ul li{
             margin: 15px 0;
             font-size: 20px;
             list-style: none;
             font-weight: 200;

             a{
                 color: rgb(249, 250, 252);
                 text-decoration: none;
             }
         }
     }
 }   
</style>
