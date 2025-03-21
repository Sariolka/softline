<script setup lang="ts">
const props = defineProps<{
    title: string;
    text: string;
    biggerGap?: boolean;
    plus?: boolean; //не самое лучшее решение, но другое как будто не обязательно в условиях лендинга )
    leftSign?: boolean;
}>();

</script>

<template>
    <li class="statistic-item" :class="{ 'statistic-item_type-bigger-gap': biggerGap }">
        <span class="statistic-item__counter"
            ><span class="statistic-item__sign" v-if="leftSign">></span>{{ title
            }}<span class="statistic-item__plus" v-if="plus">+</span></span
        >
        <p
            class="statistic-item__description"
            :class="{ 'statistic-item__description_type-bigger-gap': biggerGap }"
        >
            {{ text }}
        </p>
    </li>
</template>

<style scoped lang="scss">
@use '@/assets/constants';
@use '@/assets/mixins';

.statistic-item {
    display: none;

    @media screen and (max-width: 719px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 4px;
        max-width: 180px;
        margin-bottom: 14.5px;

        &_type-bigger-gap {
            gap: 2px;
        }
    }

    &__counter {
        @include mixins.base--typography(40px, 80%, 600);
        color: var(--red-dark-color);
        display: inline-flex;
        align-items: center;
        gap: 6px;
    }

    &__description {
        @include mixins.base--typography(16px, 150%, 400);

        &_type-bigger-gap {
            line-height: 130%;
        }
    }

    &__plus {
        @include mixins.base--typography(30px, 100%, 600);
    }

    &__sign {
        @include mixins.base--typography(30px, 100%, 900);
    }
}
</style>
