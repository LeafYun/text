<template>
    <div>{{content}}
    <p>{{this.$store.state.count}}</p>
    <p>这是three的部分</p>
    <slot></slot>
    </div>
</template>
<script>
export default {
    name:"Three",
    data(){
        return({
            content:"this is Three"
        })
    }
}
</script>