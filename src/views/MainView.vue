<script setup lang="ts">
import MissionBlock from '@/blocks/MissionBlock.vue';
import TrendsCard from '@/components/TrendsCard.vue';
import img from '@/images/transform.png';
</script>

<template>
    <MissionBlock />
    <TrendsCard
        :image="`url(${img})`"
        title="Кибербезопасность"
        description="ГК Softline предлагает клиентам собственную линейку оборудования (ПК, серверы, торговое оборудование и проч.), разработку программных продуктов, облачных решений, решений в области информационной безопасности."
    />
</template>

<style scoped lang="scss"></style>
