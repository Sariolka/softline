<script setup lang="ts">
import { ref, watch } from 'vue';
import TabItem from '@/components/TabItem.vue';
import { dataTabs, MAP_DATA } from '@/constants/constants.ts';
import ModalWindow from '@/components/ModalWindow.vue';

const activeTab = ref('all');
const isOfficeListOpen = ref(false);
const currentMap = ref(MAP_DATA[0]);

const handleTabChange = (tabName: string) => {
    activeTab.value = tabName;
};

const handleToggleOfficeList = () => {
    isOfficeListOpen.value = !isOfficeListOpen.value;
};

watch(activeTab, (newTab) => {
    const selectedMap = MAP_DATA.find((item) =>
        item.select.includes(newTab === 'all' ? '' : newTab)
    );
    currentMap.value = selectedMap ? selectedMap : MAP_DATA[0];
});
</script>

<template>
    <section class="map-block">
        <div class="map-block__nav-container">
            <ModalWindow :handle-close-modal="handleToggleOfficeList" :is-open="isOfficeListOpen" />
            <button class="map-block__nav-button"  @click="handleToggleOfficeList">
                Офисы Softline<span
                class="map-block__icon-arrow"
                :class="{ 'map-block__icon-arrow_rotate': isOfficeListOpen }"
            ></span>
            </button>
            <ul class="map-block__nav-tabs">
                <TabItem
                    v-for="tab in dataTabs"
                    :key="tab.id"
                    :text="tab.text"
                    :status="activeTab === tab.id ? 'active' : 'default'"
                    @click="handleTabChange(tab.id)"
                />
            </ul>
        </div>
        <div class="map-block__content">
            <img :src="currentMap.image" :alt="currentMap.text" class="map-block__image" />
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '@/assets/constants';
@use '@/assets/mixins';

.map-block {
    margin-bottom: 104px;

    @media screen and (max-width: 1279px) {
        margin-bottom: 5%;
    }

    @media screen and (max-width: 719px) {
        margin-bottom: 23px;
    }

    &__nav-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 0 40px 0 #0000000f;
        padding: 30px 70px 1px 64px;
        position: relative;

        @media screen and (max-width: 1279px) {
            padding-left: 20px;
            padding-right: 20px;
            flex-direction: column;
            align-items: start;
            gap: 17px;
        }

        @media screen and (max-width: 719px) {
            padding-top: 13px;
            padding-left: 0;
        }
    }

    &__nav-tabs {
        display: flex;
        align-items: center;
        gap: 30.5px;
        padding-left: 0;

        @media screen and (max-width: 1279px) {
            gap: 20px;
        }

        @media screen and (max-width: 719px) {
            margin-left: 5px;
            gap: 16.5px;
            overflow-x: auto;
            max-width: 100%;
        }
    }

    &__nav-button {
        display: flex;
        align-items: center;
        gap: 16px;
        border: none;
        background-color: transparent;
        @include mixins.base--typography(24px, 100%, 600);
        white-space: nowrap;
        cursor: pointer;
        position: relative;
        z-index: 11;
        align-self: start;
        color: var(--black-text-color);
        
        @media screen and (max-width: 719px) {
            font-size: 20px;
            gap: 7px;
        }
    }

    &__icon-arrow {
        @include mixins.image-cover('@/assets/images/icons/dropdown.svg', 24px, 24px, contain);
        transition: transform 0.3s ease-in-out;

        @media screen and (max-width: 719px) {
            background-image: url('@/assets/images/icons/dropdown-thin.svg');
            width: 22px;
            height: 20px;
            transform: rotate(180deg);
        }

        &_rotate {
            transform: rotate(180deg);

            @media screen and (max-width: 719px) {
                transform: rotate(0);
            }
        }
    }

    &__content {
        display: flex;
        padding-top: 91px;
        padding-left: 30px;
        padding-right: 30px;
        position: relative;
        height: 691.5px;
        overflow-y: hidden;
        overflow-x: auto;

        @media screen and (max-width: 1190px) {
            height: 650px;
        }

        @media screen and (max-width: 1043px) {
            height: 600px;
        }

        @media screen and (max-width: 950px) {
            height: 540px;
        }

        @media screen and (max-width: 869px) {
            height: 480px;
        }

        @media screen and (max-width: 719px) {
            height: 400px;
            padding-top: 10px;
        }
    }

    &__image {
        position: absolute;
        z-index: 1;
        max-width: 1190px;
        object-fit: contain;
        object-position: center;
        width: 100%;

        @media screen and (max-width: 1279px) {
            min-width: 670px;
            width: 90%;
        }

        @media screen and (max-width: 719px) {
            min-width: 700px;
            width: calc(100vw - 40px);
            left: -5px;
        }
    }
}
</style>