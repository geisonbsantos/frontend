<template>
    <div class="listas">
        <div class="top">
            <p> <strong>{{ description }}</strong> <span class="badge badge-info">{{ data.length }}</span> </p>
        </div>

        <div class="content">
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">{{columns[0]}}</th>
                    <th scope="col">{{columns[1]}}</th>
                    <th scope="col">{{columns[2]}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in data" :key="item.id">
                    <th scope="row">{{ item.id }}</th>
                    <td>{{ item.name }}</td>
                    <td>{{ (description == 'Clientes') ? item.email : item.value }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListasComponent',
    props:{
        data: Array,
        description: String,
        columns: [],
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_main';
    .listas{
        width: 100%;
        padding: 20px;
        border: 1px solid $primary;
        border-radius: 3px;
        background-color: $quartiary;
    }
</style>
