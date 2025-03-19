<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    image: string;
    title: string;
    description: string;
}>();

const isHovered = ref(false);
</script>

<template>
    <li
        class="trend-card"
        :style="{ backgroundImage: `url(${image})` }"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <div class="trend-card__content" :class="{ 'trend-card__content_open': isHovered }">
            <div class="trend-card__overlay"></div>
            <h3 class="trend-card__title">{{ title }}</h3>
            <p
                class="trend-card__description"
                :class="{ 'trend-card__description_open': isHovered }"
            >
                {{ description }}
            </p>
        </div>
    </li>
</template>

<style scoped lang="scss">
@use '@/assets/constants';
@use '@/assets/mixins';

.trend-card {
    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    justify-content: end;
    width: 615px;
    height: 260px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    z-index: 0;

    &__title {
        width: 100%;
        @include mixins.base--typography(24px, 100%, 600);
        color: var(--base-white);
        position: relative;
        z-index: 2;
        max-width: 358px;
    }

    &__content {
        width: 100%;
        transition: max-height 0.3s ease;
        max-height: 80px;
        height: 100%;
        transform-origin: bottom;
        position: relative;
        z-index: 2;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 20px;

        &_open {
            max-height: 260px;
            height: 100%;
            justify-content: start;
            padding-top: 28px;
        }
    }

    &__overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.6;
        background-color: var(--dark-blue-color);
        z-index: 1;
    }

    &__description {
        opacity: 0;
        transition:
            opacity 0.3s ease,
            line-height 0.3s ease,
            margin-top 0.3s ease;
        overflow: hidden;
        line-height: 0;
        transform-origin: bottom;
        color: var(--base-white);
        position: relative;
        z-index: 2;
        max-width: 480px;
        margin-top: 0;
        &_open {
            @include mixins.base--typography(17px, 140%, 400);
            opacity: 1;
            margin-top: 40px;
        }
    }
}
</style>
