<script setup lang="ts">
const props = defineProps<{
    isOpen: boolean;
    handleCloseModal: () => void;
}>();
</script>

<template>
    <div
        class="popup"
        :class="{
            popup_opened: isOpen
        }"
        @click="handleCloseModal"
    >
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
.popup {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: fixed;
    visibility: hidden;
    z-index: 10;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
        opacity 0.3s,
        visibility 0.3s;
    -o-transition:
        opacity 0.3s,
        visibility 0.3s;
    -ms-transition:
        opacity 0.3s,
        visibility 0.3s;
    -webkit-transition:
        opacity 0.3s,
        visibility 0.3s;
    -moz-transition:
        opacity 0.3s,
        visibility 0.3s;

    &_opened {
        visibility: visible;
        cursor: default;
        background-color: #fff;
        opacity: 0.7;
    }
}
</style>
