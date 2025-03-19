<script setup lang="ts">
import TrendsCard from '@/components/TrendsCard.vue';
import { TRENDS_DATA } from '@/constants/constants.ts';

const trends = TRENDS_DATA;
</script>

<template>
    <section class="trends">
        <h2 class="trends__title">Направления бизнеса</h2>
        <ul class="trends__list">
            <TrendsCard
                :title="trend.title"
                :image="trend.image"
                :description="trend.description"
                v-for="(trend, index) in trends"
                :key="index"
            />
        </ul>
    </section>
</template>

<style scoped lang="scss">
@use '@/assets/constants';
@use '@/assets/mixins';

.trends {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;

    &__title {
        @include mixins.base--typography(56px, 100%, 600);
        margin-bottom: 55px;
    }

    &__list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 22.5px 20px;
        padding-left: 0;
        margin-left: -10px; // я обычно не сдвигаю так, но в макете местами явно указаны отрицательные маржины и паддинги...
    }
}
</style>
