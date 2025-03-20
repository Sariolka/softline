<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { CITIES_DATA } from '@/constants/constants.ts';
import PopupTemplate from '@/components/PopupTemplate.vue';

const props = defineProps<{
    handleCloseModal: () => void;
    isOpen: boolean;
}>();

const citiesData = CITIES_DATA;

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
</script>

<template>
    <PopupTemplate aria-modal="true" :handleCloseModal="closeModal" :isOpen="isOpen" />
    <div class="modal" :class="{ modal_open: isOpen }">
        <ul class="modal__cities">
            <li class="modal__cities-title" v-for="(cities, region) in citiesData" :key="region">
                <div class="modal__container">
                    {{ region }}
                    <button class="modal__button-show" aria-label="Показать список"></button>
                </div>
                <ul class="modal__cities-list">
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
    }

    &__cities-list {
        padding-left: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 10px;
    }

    &__cities-title {
        @include mixins.base--typography(18px, 24px, 600);
        font-family: 'Proxima Nova', 'Arial', sans-serif;

        @media screen and (max-width: 1279px) {
            font-size: 16px;
            line-height: 1.33;
        }
    }

    &__cities-item {
        @include mixins.base--typography(18px, 20px, 400);
        font-family: 'Proxima Nova', 'Arial', sans-serif;

        @media screen and (max-width: 1279px) {
            font-size: 16px;
            line-height: 1.33;
        }
    }

    &__button-show {
        display: none;

        @media screen and (max-width: 1023px) {
            display: inline-flex;
        }
    }

    &__container {
        display: flex;
        align-items: center;
    }
}
</style>
