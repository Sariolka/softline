<script setup lang="ts">
import MissionBlock from '@/layouts/MissionBlock.vue';
import TrendsBlock from '@/layouts/TrendsBlock.vue';
import BenefitsBlock from '@/layouts/BenefitsBlock.vue';
import HeaderBlock from '@/layouts/HeaderBlock.vue';
import SoftlineBlock from '@/layouts/CompanyBlock.vue';
import GalleryBlock from '@/layouts/GalleryBlock.vue';
import MapBlock from '@/layouts/MapBlock.vue';
</script>

<template>
    <section class="page">
        <HeaderBlock />
        <main class="main">
            <SoftlineBlock />
            <MapBlock />
            <MissionBlock />
            <TrendsBlock />
            <BenefitsBlock />
            <GalleryBlock />
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
