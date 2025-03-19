<script setup lang="ts">
import MissionBlock from '@/blocks/MissionBlock.vue';
import TrendsBlock from '@/blocks/TrendsBlock.vue';
import BenefitsBlock from '@/blocks/BenefitsBlock.vue';
import HeaderBlock from '@/blocks/HeaderBlock.vue';
import SoftlineBlock from '@/blocks/AboutBlock.vue';
import GalleryBlock from '@/blocks/GalleryBlock.vue';
</script>

<template>
    <section class="page">
        <HeaderBlock />
        <main class="main">
            <SoftlineBlock />
            <MissionBlock />
            <TrendsBlock />
            <BenefitsBlock />
            <GalleryBlock />
        </main>
    </section>
</template>

<style scoped lang="scss"></style>
