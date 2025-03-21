<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { CITIES_DATA } from '@/constants/constants.ts';
import PopupTemplate from '@/components/PopupTemplate.vue';

const props = defineProps<{
    handleCloseModal: () => void;
    isOpen: boolean;
}>();

const citiesData = CITIES_DATA;
const openRegions = ref<Record<string, boolean>>({});

onMounted(() => {
    for (const region in citiesData) {
        openRegions.value[region] = false;
    }
});
// слушатель для закрытия по esc
onMounted(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            props.handleCloseModal();
        }
    };
    document.addEventListener('keydown', handleKeyDown);

    onUnmounted(() => {
        document.removeEventListener('keydown', handleKeyDown);
    });
});

const closeModal = () => {
    props.handleCloseModal();
};

const handleToggleOpen = (region: string) => {
    openRegions.value[region] = !openRegions.value[region];
};
</script>

<template>
    <PopupTemplate aria-modal="true" :handleCloseModal="closeModal" :isOpen="isOpen" />
    <div class="modal" :class="{ modal_open: isOpen }">
        <ul class="modal__cities">
            <li class="modal__cities-title" v-for="(cities, region) in citiesData" :key="region">
                <div
                    class="modal__container"
                    @click="handleToggleOpen(region)"
                    :class="{ modal__container_disable: !cities.length }"
                >
                    {{ region }}
                    <button
                        class="modal__button-show"
                        :class="{ 'modal__button-show_disable': !cities.length }"
                        aria-label="Показать список"
                    ></button>
                </div>
                <ul
                    class="modal__cities-list"
                    :class="{ 'modal__cities-list_open': openRegions[region] }"
                >
                    <li v-for="city in cities" :key="city" class="modal__cities-item">
                        {{ city }}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use '@/assets/constants';
@use '@/assets/mixins';
.modal {
    position: absolute;
    z-index: 11;
    opacity: 0;
    visibility: hidden;
    top: 100px;
    overflow: hidden;
    left: 0;
    width: 1250px;
    max-height: 0;
    padding: 28px 70.5px;
    background-color: var(--base-white);
    display: flex;
    justify-content: space-between;
    box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.06);
    transition:
        visibility 0.3s ease-in,
        opacity 0.3s ease-in,
        max-height 0.3s ease-in;

    @media screen and (max-width: 1279px) {
        padding-left: 20px;
        padding-right: 20px;
        width: 100%;
    }

    @media screen and (max-width: 719px) {
        top: 0;
        padding-top: 45px;
        padding-right: 15px;
    }

    &_open {
        max-height: 272px;
        opacity: 1;
        visibility: visible;
    }

    &__cities {
        padding-left: 0;
        list-style: none;
        display: flex;
        width: 100%;
        justify-content: space-between;

        @media screen and (max-width: 1023px) {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
            gap: 13px 27px;

            justify-content: start;
        }
    }

    &__cities-list {
        padding-left: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 10px;

        @media screen and (max-width: 1023px) {
            display: none;
        }

        &_open {
            @media screen and (max-width: 1023px) {
                display: flex;
            }
        }
    }

    &__cities-item {
        @include mixins.base--typography(18px, 20px, 400);
        font-family: 'Proxima Nova', 'Arial', sans-serif;

        @media screen and (max-width: 1279px) {
            font-size: 16px;
            line-height: 1.33;
        }

        @media screen and (max-width: 719px) {
            font-size: 14px;
            line-height: 14px;
        }
    }

    &__button-show {
        display: none;

        @media screen and (max-width: 1023px) {
            display: inline-flex;
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            background-image: url('@/images/icons/arrow-fill.svg');
            border: none;
            background-color: transparent;
            width: 5px;
            height: 4px;
        }

        &_disable {
            display: none;
        }
    }

    &__container {
        display: flex;
        align-items: baseline;
        gap: 3px;
        @include mixins.base--typography(18px, 24px, 600);
        font-family: 'Proxima Nova', 'Arial', sans-serif;

        @media screen and (max-width: 1279px) {
            font-size: 16px;
            line-height: 1.33;
        }

        @media screen and (max-width: 1023px) {
            cursor: pointer;
        }

        @media screen and (max-width: 719px) {
            font-size: 14px;
            line-height: 14px;
            gap: 2px;
        }

        &_disable {
            pointer-events: none;
            cursor: default;
        }
    }
}
</style>
