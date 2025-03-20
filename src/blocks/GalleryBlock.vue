<script setup lang="ts">
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { SLIDE_DATA } from '@/constants/constants.ts';

const galleryData = SLIDE_DATA;
</script>

<template>
    <section class="gallery">
        <h2 class="gallery__title">Корпоративная жизнь</h2>
        <Carousel :items-to-show="1" wrapAround>
            <Slide v-for="slide in galleryData" :key="slide">
                <img class="carousel__item" :src="slide" alt="Корпоративная жизнь" />
            </Slide>
            <template #addons>
                <Navigation>
                    <template #prev>
                        <span class="gallery__button-icon"></span>
                    </template>
                    <template #next>
                        <span class="gallery__button-icon rotate"></span>
                    </template>
                </Navigation>
                <Pagination />
            </template>
        </Carousel>
    </section>
</template>

<style scoped lang="scss">
@use '@/assets/constants';
@use '@/assets/mixins';

.gallery {
    padding-top: 93px;
    padding-bottom: 93px;
    margin-left: 70px;
    margin-right: 70px;

    @media screen and (max-width: 719px) {
        margin-left: 20px;
        margin-right: 20px;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    &__title {
        @include mixins.base--typography(56px, 100%, 600);
        margin-bottom: 50px;

        @media screen and (max-width: 719px) {
            font-size: 28px;
            margin-bottom: 15px;
        }
    }

    &__button-icon {
        @include mixins.image-cover('@/images/icons/arrow.svg', 10px, 20px, cover);
    }
}
.carousel {
    width: 100%;

    &::v-deep(.carousel__pagination) {
        gap: 10px;
        bottom: -35px;
    }

    &::v-deep(.carousel__pagination-item) {
        width: 214px;

        @media screen and (max-width: 1279px) {
            width: 150px;
        }

        @media screen and (max-width: 1023px) {
            width: 100px;
        }

        @media screen and (max-width: 719px) {
            display: none;
        }
    }

    &::v-deep(.carousel__pagination-button) {
        background-color: var(--base-black);
        opacity: 0.1;
        width: 214px;
        height: 6px;
        margin-top: 0;
        margin-bottom: 0;

        @media screen and (max-width: 1279px) {
            width: 150px;
        }

        @media screen and (max-width: 1023px) {
            width: 100px;
        }
    }

    &::v-deep(.carousel__pagination-button--active) {
        background-color: var(--red-dark-color);
        width: 214px;
        height: 6px;
        margin: 0;
        opacity: 1;

        @media screen and (max-width: 1279px) {
            width: 150px;
        }

        @media screen and (max-width: 1023px) {
            width: 100px;
        }
    }

    &::v-deep(.carousel__prev) {
        position: absolute;
        top: -82px;
        left: 968px;
        width: 56px;
        height: 56px;
        border-radius: 64.29px;
        background-color: var(--base-grey-color);

        @media screen and (max-width: 1279px) {
            display: none;
        }
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

        @media screen and (max-width: 1279px) {
            display: none;
        }
    }
}
.carousel__slide {
    height: 834px;

    @media screen and (max-width: 1279px) {
        height: auto;
    }
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

    @media screen and (max-width: 1279px) {
        width: 100%;
        height: auto;
    }
}
</style>
