<script setup lang="ts"></script>

<template>
    <section class="mission-block">
        <h2 class="mission-block__title">Миссия Softline</h2>
        <p class="mission-block__description">
            Мы&nbsp;помогаем организациям трансформироваться, работать эффективно и&nbsp;безопасно
             в&nbsp;условиях цифровой экономики.
        </p>
        <div class="mission-block__pattern mission-block__pattern_type-left"></div>
        <div class="mission-block__pattern mission-block__pattern_type-right"></div>
    </section>
</template>

<style scoped lang="scss">
@use '@/assets/constants';
@use '@/assets/mixins';

.mission-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--red-color);
    color: var(--base-white);
    position: relative;
    z-index: 0;
    padding: 139px 70px;
    overflow: hidden;
    margin-bottom: 100px;

    @media screen and (max-width: 719px) {
        padding: 32px 5px;
        margin-left: 15px;
        margin-right: 15px;
        margin-bottom: 50px;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--red-dark-color);
        opacity: 0.5;
        z-index: -1;
    }

    &__title {
        @include mixins.base--typography(56px, 100%, 600);
        margin-bottom: 42px;

        @media screen and (max-width: 719px) {
            font-size: 28px;
            margin-bottom: 11px;
        }
    }

    &__description {
        @include mixins.base--typography(32px, 150%, 400);
        text-align: center;
        text-indent: 6px;

        @media screen and (max-width: 719px) {
            font-size: 16px;
            line-height: 130%;
            text-indent: 3px;
        }
    }

    &__pattern {
        top: 47.5px;
        position: absolute;
        @include mixins.image-cover('@/images/pattern.svg', 348.05px, 376.95px, contain);
        opacity: 0.4;

        @media screen and (max-width: 719px) {
            top: 20px;
            width: 140px;
            height: 153px;
        }

        &_type-left {
            left: -25px;

            @media screen and (max-width: 719px) {
                left: -30px;
            }
        }

        &_type-right {
            transform: rotate(180deg);
            right: -27px;

            @media screen and (max-width: 719px) {
                right: -30px;
            }
        }
    }
}
</style>
