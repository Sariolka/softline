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
    color: var(--black-text-color);
    cursor: pointer;
    white-space: nowrap;

    @media screen and (max-width: 719px) {
        font-size: 14px;
        line-height: 16px;
    }

    &:hover {
        color: var(--red-dark-color);
    }

    &__active {
        color: var(--red-dark-color);
        text-decoration: underline;
        text-underline-offset: 30px;
        text-decoration-thickness: 3px;

        @media screen and (max-width: 719px) {
            text-underline-offset: 23px;
            text-decoration-thickness: 2px;
        }
    }
}
</style>
