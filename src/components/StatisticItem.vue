<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<{
    title: string;
    text: string;
    biggerGap?: boolean;
    plus?: boolean;
    leftSign?: boolean;
}>();

const statisticItem = ref(null);
const titleRef = ref(null);
let observer: IntersectionObserver | null = null;
const animatedValue = ref(0);
const isAnimated = ref(false);

const targetNumber = computed(() => {
    return typeof props.title === 'string' ? parseInt(props.title) : props.title;
});

const animatedTitle = computed(() => {
    return Math.floor(animatedValue.value).toLocaleString();
});

let animationFrameId: number | null = null;

const animateCounter = () => {
    if (!targetNumber.value) {
        animatedValue.value = 0;
        return;
    }

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        animatedValue.value = progress * targetNumber.value;

        if (progress < 1) {
            animationFrameId = requestAnimationFrame(animate);
        } else {
            animatedValue.value = targetNumber.value;
            isAnimated.value = false;
        }
    };

    animationFrameId = requestAnimationFrame(animate);
    isAnimated.value = true;
};

const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !isAnimated.value) {
            animateCounter();
            if (observer) {
                observer.unobserve(statisticItem.value);
            }
        }
    });
};

onMounted(() => {
    observer = new IntersectionObserver(handleIntersection, {
        root: null,
        threshold: 0.4
    });

    if (statisticItem.value) {
        observer.observe(statisticItem.value);
    }
});

onUnmounted(() => {
    if (observer && statisticItem.value) {
        observer.unobserve(statisticItem.value);
        observer = null;
    }
    isAnimated.value = false; //  Останавливаем анимацию
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId); //  Отменяем кадр анимации
        animationFrameId = null;
    }
});
</script>

<template>
    <li
        class="statistic-item"
        :class="{ 'statistic-item_type-bigger-gap': biggerGap }"
        ref="statisticItem"
    >
        <span class="statistic-item__counter"
            ><span class="statistic-item__sign" v-if="leftSign" ref="titleRef">></span>
            {{ animatedTitle }}<span class="statistic-item__plus" v-if="plus">+</span></span
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
