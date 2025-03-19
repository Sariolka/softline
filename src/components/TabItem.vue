<script setup lang="ts">
const props = defineProps<{
    status: 'default' | 'active';
    text: string;
}>();

const emit = defineEmits<{
    (e: 'update:status', status: string): void;
}>();

const handleSetActive = () => {
    emit('update:status', 'active');
};
</script>

<template>
    <h4
        class="tab-item"
        :class="{ 'tab-item__active': status === 'active' }"
        @click="handleSetActive"
    >
        {{ text }}
    </h4>
</template>

<style scoped lang="scss">
@use '@/assets/constants';
@use '@/assets/mixins';

.tab-item {
    @include mixins.base--typography(18px, 20px, 600);
    transition: color 0.3s ease-in-out;

    &:hover {
        color: var(--red-dark-color);
    }
}
</style>
