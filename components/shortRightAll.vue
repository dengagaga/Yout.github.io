<template>
    <div class="short_right-all">
        <button @click="active = !active" :class="active ? 'short_btn-grey short_btn-grey--active' : 'short_btn-grey'">
            <slot></slot>
        </button>
        <p class="short_right-text">{{ title }}</p>
    </div>
</template>

<script setup>
defineProps({
    title:String
})
const active = ref(false)
</script>

<style>
.short_btn-grey {
    background-color: #f2f2f2;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    padding: 12px;
    transition: all .3s;
}
.short_btn-grey:hover {
    opacity: .8;
}
.short_btn-grey--active {
    background-color: #000;
}
.short_btn-grey--active svg path{
    fill: #fff;
}
</style>