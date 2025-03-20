<script setup lang="ts">
import StatisticItem from '@/components/StatisticItem.vue';
</script>

<template>
    <section class="block">
        <h1 class="block__title">Softline</h1>
        <p class="block__content">
            Ведущий поставщик IT-решений и&nbsp;сервисов.* Мы&nbsp;предлагаем комплексные
            IT-решения, облака, программное и&nbsp;аппаратное обеспечение, решения по&nbsp;цифровой
            трансформации и&nbsp;кибербезопасности, а&nbsp;также широкий спектр IT-услуг.
        </p>
        <div class="block__hidden-container">
            <StatisticItem title="30 лет" text="на IT-рынке" left-sign />
            <StatisticItem title="4600" text="сотрудников в России" />
            <StatisticItem title="25" text="городов России" />
            <StatisticItem title="2000" text="разработчиков" class="block__statistic-item" plus />
            <StatisticItem
                plus
                title="3000"
                bigger-gap
                text="сотрудников ежегодно  проходят оценку и&nbsp;обучение"
            />
        </div>
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
    margin-bottom: 38px;

    @media screen and (max-width: 1279px) {
        padding-left: 30px;
        padding-right: 30px;
    }

    @media screen and (max-width: 719px) {
        padding-left: 15px;
        padding-right: 15px;
        align-items: start;
        gap: 10px;
        padding-top: 9px;
        margin-bottom: 0;
    }

    &__title {
        @include mixins.base--typography(56px, 120%, 700);
        color: var(--red-dark-color);
        margin-left: 8px;
        margin-bottom: 0;

        @media screen and (max-width: 719px) {
            font-size: 28px;
            text-align: start;
            margin-left: 3px;
        }
    }

    &__content {
        @include mixins.base--typography(32px, 120%, 400);
        text-align: center;
        margin-left: 8px;

        @media screen and (max-width: 719px) {
            line-height: 118%;
            font-size: 16px;
            text-align: start;
            margin-left: 4px;
            padding-right: 10px;
            margin-bottom: 40px;
        }
    }

    &__hidden-container {
        display: none;

        @media screen and (max-width: 719px) {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
        }
    }

    &__statistic-item {
        margin-left: 25px;
    }
}
</style>
