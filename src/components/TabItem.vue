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
    <div class="tab-item" :class="{ 'tab-item_active': status === 'active' }">
        <h4
            class="tab-item__text"
            @click="handleSetActive"
            :class="{ 'tab-item__text_active': status === 'active' }"
        >
            {{ text }}
        </h4>
    </div>
</template>

<style scoped lang="scss">
@use '@/assets/constants';
@use '@/assets/mixins';

.tab-item {
    display: flex;
    padding-bottom: 27px;

    @media screen and (max-width: 719px) {
        padding-bottom: 20px;
    }

    &_active {
        border-bottom: 3px solid var(--red-dark-color);

        @media screen and (max-width: 719px) {
            border-width: 2px;
        }
    }

    &__text {
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

        &_active {
            color: var(--red-dark-color);
            //text-decoration: underline;
            //text-underline-offset: 30px;
            //text-decoration-thickness: 3px;

            //@media screen and (max-width: 719px) {
            //    text-underline-offset: 23px;
            //    text-decoration-thickness: 2px;
            //}
        }
    }
}
</style>
