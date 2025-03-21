<script setup lang="ts">
import CompensationItem from '@/components/BenefitItem.vue';
import { ADDITIONAL_DATA, COMPENSATION_DATA } from '@/constants/constants.ts';

const compensations = COMPENSATION_DATA;
const additionals = ADDITIONAL_DATA;
</script>

<template>
    <section class="compensation-block">
        <h2 class="compensation-block__title">Компенсационный пакет</h2>
        <ul class="compensation-block__list">
            <CompensationItem
                :image="item.image"
                :caption="item.caption"
                v-for="(item, index) in compensations"
                :key="index"
            />
        </ul>
        <hr class="compensation-block__divider" />
        <h3 class="compensation-block__additional">Программа дополнительной мотивации</h3>
        <span class="compensation-block__span"> доплата 12% от суммы</span>
        <ul class="compensation-block__list">
            <CompensationItem
                :image="item.image"
                :caption="item.caption"
                v-for="(item, index) in additionals"
                :key="index"
                class="compensation-block__li-item"
            />
        </ul>
    </section>
</template>

<style scoped lang="scss">
@use '@/assets/constants';
@use '@/assets/mixins';

.compensation-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 30px 40px;
    background-color: var(--base-white);
    box-shadow: 0 0 40px 0 #0000000f;
    margin-left: 70px;
    margin-right: 70px;

    @media screen and (max-width: 719px) {
        padding: 20px 0 0;
        margin-left: 15px;
        margin-right: 15px;
    }

    &__title {
        @include mixins.base--typography(56px, 100%, 600);
        margin-bottom: 50px;
        text-align: center;

        @media screen and (max-width: 719px) {
            font-size: 28px;
            margin-bottom: 40px;
        }
    }

    &__divider {
        width: 100%;
        opacity: 0.1;
        color: var(--base-black);
        height: 1px;
        margin-bottom: 91px;

        @media screen and (max-width: 719px) {
            margin-bottom: 22px;
            width: 95%;
        }
    }

    &__list {
        padding-left: 0;
        display: flex;
        align-items: start;
        gap: 16px;
        margin-bottom: 50px;

        @media screen and (max-width: 1279px) {
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px 16px;
        }

        @media screen and (max-width: 719px) {
            flex-wrap: wrap;
            justify-content: center;
            gap: 25px 11px;
            margin-bottom: 22px;
        }
    }

    &__additional {
        @include mixins.base--typography(40px, 120%, 600);
        max-width: 639px;
        margin-bottom: 4px;
        text-align: center;

        @media screen and (max-width: 719px) {
            font-size: 22px;
            margin-bottom: 2px;
        }
    }

    &__span {
        color: var(--red-text-color);
        @include mixins.base--typography(40px, 120%, 600);
        margin-bottom: 50px;

        @media screen and (max-width: 719px) {
            font-size: 22px;
            margin-bottom: 25px;
        }
    }

    &__li-item {
        width: 94px;
    }
}
</style>
