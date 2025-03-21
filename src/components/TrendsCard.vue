<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<{
    image: string;
    title: string;
    description: string;
}>();

const isHovered = ref(false);
const isMobile = ref(false);
const isOpen = ref(false);

const checkScreenWidth = () => {
    isMobile.value = window.innerWidth < 719;
};

onMounted(() => {
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
});

onUnmounted(() => {
    window.removeEventListener('resize', checkScreenWidth);
});
</script>

<template>
    <li
        class="trend-card"
        :class="{ 'trend-card_open': isOpen }"
        :style="{ backgroundImage: `url(${image})` }"
        @mouseenter="!isMobile && (isHovered = true)"
        @mouseleave="!isMobile && (isHovered = false)"
        @click="isMobile && (isOpen = !isOpen)"
    >
        <div
            class="trend-card__content"
            :class="{
                'trend-card__content_open': isHovered,
                'trend-card__content_type-mobile': isMobile,
                'trend-card__content_type-mobile_open': isMobile && isOpen
            }"
        >
            <div class="trend-card__overlay"></div>
            <div class="trend-card__head">
                <h3 class="trend-card__title">{{ title }}</h3>
                <button
                    class="trend-card__btn-open"
                    aria-label="Открыть описание"
                    :class="{ rotate: isOpen && isMobile }"
                ></button>
            </div>
            <p
                class="trend-card__description"
                :class="{
                    'trend-card__description_open': isHovered,
                    'trend-card__description_type-mobile': isMobile,
                    'trend-card__description_type-mobile_open': isMobile && isOpen
                }"
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

    @media screen and (max-width: 719px) {
        min-width: 280px;
        width: 100%;
        height: 60px;
        transition: height 0.3s ease;
        transform-origin: top;
        cursor: default;
    }

    @media screen and (max-width: 585px) {
        min-width: 280px;
        height: 60px;
        transition: height 0.3s ease;
        transform-origin: top;
        cursor: default;
    }

    &_open {
        height: 240px;
    }

    &__title {
        width: 100%;
        @include mixins.base--typography(24px, 100%, 600);
        color: var(--base-white);
        position: relative;
        z-index: 2;
        max-width: 358px;

        @media screen and (max-width: 719px) {
            font-size: 20px;
        }
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

        &_type-mobile {
            transform-origin: top;
            padding-left: 10px;
            max-height: 60px;
        }

        &_type-mobile_open {
            max-height: 240px;
            justify-content: start;
            padding-top: 22px;
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

        &_type-mobile {
            transition: transform 0.3s ease;
            transform-origin: top;
            transform: scaleY(0);
            display: block;
        }

        &_type-mobile_open {
            @include mixins.base--typography(16px, 140%, 400);
            @media screen and (max-width: 719px) {
                transform: scaleY(1);
                opacity: 1;
                margin-top: 10px;
            }
        }
    }

    &__head {
        width: 100%;
        display: flex;
        align-items: center;

        @media screen and (max-width: 719px) {
            justify-content: space-between;
            padding-right: 13px;
        }
    }

    &__btn-open {
        display: none;

        @media screen and (max-width: 719px) {
            display: inline-flex;
            background-image: url('@/images/icons/dropdown-white.svg');
            border: none;
            background-color: transparent;
            background-repeat: no-repeat;
            background-size: contain;
            width: 18px;
            height: 8px;
            position: relative;
            z-index: 2;
            cursor: pointer;
        }
    }
}
</style>
