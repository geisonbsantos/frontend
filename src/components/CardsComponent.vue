<template>
    <div class="meuCard">
        <div class="content top">
            <h3>{{type}}</h3>
            <p class="porcentagem"><i class="fa fa-arrow-up"></i> {{porcent}}</p>
        </div>
        
        <div class="content footer">
            <i :class="['fa ico', icon,]"></i>
            <p class="qtd">{{qtd}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardsComponent',
    props:{
        type: String,
        porcent: String,
        icon: String,
        qtd: String,
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_main';

    .meuCard{
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: $primary;
        padding: 15px;
        border-radius: 10px;
        color: $branco;

        .content{
            display: flex;
            justify-content: space-between;
        }

        .top{

            .porcentagem{
                color: $tertiary;
            }

        }
        .footer{
            
            .ico{
                font-size: 40px;
            }

            .qtd{
                font-size: 30px;
                margin: 0%;
            }
        }
    }
</style>