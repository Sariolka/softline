<script setup lang="ts">
import MissionBlock from '@/blocks/MissionBlock.vue';
import TrendsBlock from '@/blocks/TrendsBlock.vue';
import BenefitsBlock from '@/blocks/BenefitsBlock.vue';
import HeaderBlock from '@/blocks/HeaderBlock.vue';
import SoftlineBlock from '@/blocks/CompanyBlock.vue';
import GalleryBlock from '@/blocks/GalleryBlock.vue';
import MapBlock from '@/blocks/MapBlock.vue';
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
