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
                    <tr v-for="user in data" :key="user.id">
                    <th scope="row">{{ user.id }}</th>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
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
    .listas{
        width: 100%;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 3px;
        background-color: #fff;
    }
</style>
