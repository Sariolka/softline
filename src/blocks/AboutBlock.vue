<script setup lang="ts"></script>

<template>
    <section class="block">
        <h1 class="block__title">Softline</h1>
        <p class="block__content">
            Ведущий поставщик IT-решений и&nbsp;сервисов.* Мы&nbsp;предлагаем комплексные
            IT-решения, облака, программное и&nbsp;аппаратное обеспечение, решения по&nbsp;цифровой
            трансформации и&nbsp;кибербезопасности, а&nbsp;также широкий спектр IT-услуг.
        </p>
    </section>
</template>

<style scoped lang="scss">
@use '@/assets/constants';
@use '@/assets/mixins';
.block {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 70px;
    gap: 32px;

    &__title {
        @include mixins.base--typography(56px, 120%, 700);
        color: var(--red-dark-color);
        margin-left: 5px;
        margin-bottom: 0;
    }

    &__content {
        @include mixins.base--typography(32px, 120%, 400);
        text-align: center;
        margin-left: 5px;
    }
}
</style>
