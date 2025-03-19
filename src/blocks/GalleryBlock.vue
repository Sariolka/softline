<script setup lang="ts">
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { SLIDE_DATA } from '@/constants/constants.ts';

const galleryData = SLIDE_DATA;
</script>

<template>
    <section class="gallery">
        <h2 class="gallery__title">Корпоративная жизнь</h2>
        <Carousel :items-to-show="1">
            <Slide v-for="slide in galleryData" :key="slide">
                <img class="carousel__item" :src="slide" alt="Корпоративная жизнь" />
            </Slide>
            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>
    </section>
</template>

<style scoped lang="scss">
@use '@/assets/constants';
@use '@/assets/mixins';

.gallery {
    padding: 70px;

    &__title {
        @include mixins.base--typography(56px, 100%, 600);
        margin-bottom: 50px;
    }
}
.carousel {
    width: 100%;
    //margin-left: auto;
    //margin-right: auto;
    //position: relative;

    &::v-deep(.carousel__pagination) {
        gap: 10px;
        bottom: -35px;
    }

    &::v-deep(.carousel__pagination-item) {
        width: 214px;
    }

    &::v-deep(.carousel__pagination-button) {
        background-color: var(--base-black);
        opacity: 0.1;
        width: 214px;
        height: 6px;
        margin-top: 0;
        margin-bottom: 0;
    }

    &::v-deep(.carousel__pagination-button--active) {
        background-color: var(--red-dark-color);
        width: 214px;
        height: 6px;
        margin: 0;
        opacity: 1;
    }

    &::v-deep(.carousel__prev) {
        position: absolute;
        top: -82px;
        left: 968px;
        width: 56px;
        height: 56px;
        border-radius: 64.29px;
        background-color: var(--base-grey-color);
    }

    &::v-deep(.carousel__icon) {
        width: 1.5em;
        height: 2em;
        color: var(--red-dark-color);
    }

    &::v-deep(.carousel__next) {
        top: -82px;
        left: 1045px;
        width: 56px;
        height: 56px;
        border-radius: 64.29px;
        background-color: var(--base-grey-color);
    }
}
.carousel__slide {
    height: 834px;
}
.carousel__item {
    height: 834px;
    width: 1110px;
    object-fit: cover;
    object-position: center;
    border: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
