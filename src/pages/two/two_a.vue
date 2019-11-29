<template>
    <div>{{content}}<br/>
    <p>{{this.$store.state.count}}</p>
    <slot></slot>
    </div>
</template>
<script>
export default {
    name:"Two",
    data(){ 
        return({
            content:"this is Two"
        })
    }
}
</script>