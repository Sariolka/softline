<script setup lang="ts">
import logo from '@/images/logo.png';
</script>

<template>
    <header class="header">
        <img :src="logo" alt="Softline" class="header__logo" />
        <nav class="header__nav">
            <a class="header__link" href="/">Облачные решения</a>
            <a class="header__link" href="/">Кибербезопасность</a>
            <a class="header__link" href="/">Импортозамещение</a>
            <a class="header__link" href="/">Цифровая трансформация</a>
        </nav>
    </header>
</template>

<style scoped lang="scss">
@use '@/assets/constants';
@use '@/assets/mixins';

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--border-grey-color);
    padding: 29px 70px 29px 69px;

    @media screen and (max-width: 1279px) {
        padding-left: 30px;
        padding-right: 30px;
        margin-left: 15px;
        margin-right: 15px;
    }

    @media screen and (max-width: 1023px) {
        flex-direction: column;
        align-items: start;
        gap: 15px;
    }

    @media screen and (max-width: 719px) {
        padding: 15px 0 15px 5px;
        margin-left: 0;
        margin-right: 0;
    }

    &__logo {
        width: 125px;
        height: 25px;
        object-fit: contain;
        object-position: center;
    }

    &__nav {
        display: flex;
        align-items: center;
        gap: 20px;

        @media screen and (max-width: 719px) {
            flex-wrap: wrap;
            gap: 6px 8px;
        }
    }

    &__link {
        @include mixins.base--typography(18px, 20px, 600);
        text-decoration: none;
        color: var(--black-text-color);
        white-space: nowrap;

        @media screen and (max-width: 1023px) {
            font-size: 16px;
            line-height: 18px;
        }

        @media screen and (max-width: 719px) {
            font-size: 14px;
            line-height: 16px;
        }
    }
}
</style>
