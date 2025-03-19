<script setup lang="ts">
const props = defineProps<{
    image: string;
    caption: string;
}>();
</script>

<template>
    <li class="compensation-item">
        <figure class="compensation-item__content">
            <div class="compensation-item__image">
                <img class="compensation-item__icon" :src="image" :alt="caption" />
            </div>

            <figcaption class="compensation-item__description">{{ caption }}</figcaption>
        </figure>
    </li>
</template>

<style scoped lang="scss">
@use '@/assets/constants';
@use '@/assets/mixins';

.compensation-item {
    width: 178px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 11px;
    }

    &__image {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.05);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__icon {
        object-fit: contain;
        object-position: center;
    }

    &__description {
        @include mixins.base--typography(18px, 110%, 400);
        color: var(--black-text-color);
        text-align: center;
        white-space: pre-line;
        text-indent: -1px;
    }
}
</style>
