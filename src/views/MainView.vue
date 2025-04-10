<script setup lang="ts">
import { defineAsyncComponent, onMounted, onUnmounted, ref } from 'vue';
import HeaderBlock from '@/layouts/HeaderBlock.vue';
import SoftlineBlock from '@/layouts/CompanyBlock.vue';
import MapBlock from '@/layouts/MapBlock.vue';
const MissionBlock = defineAsyncComponent(() => import('@/layouts/MissionBlock.vue'));
const TrendsBlock = defineAsyncComponent(() => import('@/layouts/TrendsBlock.vue'));
const BenefitsBlock = defineAsyncComponent(() => import('@/layouts/BenefitsBlock.vue'));
const GalleryBlock = defineAsyncComponent(() => import('@/layouts/GalleryBlock.vue'));

const lazyLoadMissionBlock = ref<HTMLElement | null>(null);
const lazyLoadTrendsBlock = ref<HTMLElement | null>(null);
const lazyLoadBenefitsBlock = ref<HTMLElement | null>(null);
const lazyLoadGalleryBlock = ref<HTMLElement | null>(null);

const isMissionBlockVisible = ref(false);
const isTrendsBlockVisible = ref(false);
const isBenefitsBlockVisible = ref(false);
const isGalleryBlockVisible = ref(false);

const lazyLoadTargets = [
    { ref: lazyLoadMissionBlock, visible: isMissionBlockVisible },
    { ref: lazyLoadTrendsBlock, visible: isTrendsBlockVisible },
    { ref: lazyLoadBenefitsBlock, visible: isBenefitsBlockVisible },
    { ref: lazyLoadGalleryBlock, visible: isGalleryBlockVisible },
];

let observer: IntersectionObserver;

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const target = lazyLoadTargets.find(t => t.ref.value === entry.target);
                if (target) {
                    target.visible.value = entry.isIntersecting;
                }

                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            rootMargin: '60px',
            threshold: 0,
        },
    );

    lazyLoadTargets.forEach(target => {
        if (target.ref.value) observer.observe(target.ref.value);
    });
});

onUnmounted(() => {
    if (observer) {
        lazyLoadTargets.forEach(target => {
            if (target.ref.value) observer.unobserve(target.ref.value);
        });
    }
});
</script>

<template>
    <section class="page">
        <HeaderBlock />
        <main class="main">
            <SoftlineBlock />
            <MapBlock />
            <div ref="lazyLoadMissionBlock">
                <MissionBlock v-if="isMissionBlockVisible" />
                <div v-else>Loading...</div>
            </div>
            <div ref="lazyLoadTrendsBlock">
                <TrendsBlock v-if="isTrendsBlockVisible" />
                <div v-else>Loading...</div>
            </div>
            <div ref="lazyLoadBenefitsBlock">
                <BenefitsBlock v-if="isBenefitsBlockVisible" />
                <div v-else>Loading...</div>
            </div>
            <div ref="lazyLoadGalleryBlock">
                <GalleryBlock v-if="isGalleryBlockVisible" />
                <div v-else>Loading...</div>
            </div>
        </main>
    </section>
</template>

<style scoped lang="scss">
.page {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 719px) {
        padding-left: 15px;
        padding-right: 15px;
    }
}
</style>
