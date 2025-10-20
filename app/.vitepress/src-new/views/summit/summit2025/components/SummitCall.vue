<script lang="ts" setup>
import { computed } from 'vue';
import { useData } from 'vitepress';

import useWindowResize from '@/components/hooks/useWindowResize';
import { useCommon } from '@/stores/common';

import callForLight from '../img/call-for-pc-light.jpg';
import callForDark from '../img/call-for-pc-dark.jpg';
import callForMbLight from '../img/call-for-mb-light.jpg';
import callForMbDark from '../img/call-for-mb-dark.jpg';

defineProps({
  callData: {
    type: Object,
    required: true,
    default: () => null,
  },
});

interface Item {
  [key: string]: string;
}

const { lang } = useData();

const isMobile = computed(() =>
  useWindowResize().value <= 768 ? true : false
);

const commonStore = useCommon();

const img = {
  light: callForLight,
  dark: callForDark,
} as Item;
const imgMb = {
  light: callForMbLight,
  dark: callForMbDark,
} as Item;
const cardBg = computed(() => {
  return isMobile.value ? imgMb[commonStore.theme] : img[commonStore.theme];
});
</script>

<template>
  <div class="call-for">
    <p class="section-title">CALL FOR</p>
    <div class="call-content">
      <a
        v-for="item in callData"
        :key="item.link"
        class="content-item"
        :class="{ 'content-item-en': lang === 'en' }"
        :href="item.link"
        target="_blank"
      >
        <div class="card-bg" :style="{ backgroundImage: `url(${cardBg})` }"></div>
        <div v-if="lang === 'zh'" class="cn-title call-title">
          {{ item.name }}
        </div>
        <div
          class="en-title call-title"
          :class="{ 'in-en-lang': lang === 'en' }"
        >
          {{ item.name_en || item.name }}
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.call-for {
  margin-top: 72px;
  @media screen and (max-width: 768px) {
    margin-top: var(--e-spacing-h4);
  }
}
.call-content {
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  .content-item {
    position: relative;
    width: calc((100% - 64px) / 3);
    height: 352px;
    text-align: center;
    margin: 32px 32px 0 0;
    transition: box-shadow cubic-bezier(.2, 0, 0, 1) .3s;
    &:nth-child(3n) {
      margin-right: 0;
    }
    &:hover {
      box-shadow: var(--e-shadow-l2_hover);
      @media screen and (max-width: 1100px) {
        box-shadow: var(--e-shadow-l2);
      }
    }
    .card-bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      border-radius: var(--e-spacing-h10);
      @media screen and (max-width: 768px) {
        background-position: center bottom;
      }
    }
    .call-title {
      width: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      color: var(--e-color-text1);
    }
    .cn-title {
      top: 24px;
      font-weight: 500;
      @include display3;
    }
    .en-title {
      top: 96px;
      @include h2;
      @include respond-to('<=laptop') {
        top: 84px;
      }
    }

    .in-en-lang {
      top: 54px;
      @include display3;
    }

    @include respond-to('<=pad') {
      width: calc((100% - 24px) / 2);
      margin: 24px 24px 0 0;
      &:nth-child(3n) {
        margin-right: 24px;
      }
      &:nth-child(2n) {
        margin-right: 0;
      }

      .cn-title {
        @include display2;
      }
      .en-title {
        top: 84px;
        @include h1;
      }

      .in-en-lang {
        top: 54px;
        @include display2;
      }
    }

    @include respond-to('<=pad_v') {
      width: calc((100% - 16px) / 2);
      margin: 16px 16px 0 0;
      &:nth-child(3n) {
        margin-right: 16px;
      }
      &:nth-child(2n) {
        margin-right: 0;
      }

      .cn-title {
        @include display3;
      }
      .en-title {
        top: 70px;
        @include h2;
      }

      .in-en-lang {
        @include display3;
      }
    }

    @include respond-to('phone') {
      width: 100%;
      margin: 16px 0 0;
      .card-bg {
        border-radius: var(--e-spacing-h8);
      }

      &.content-item-en {
        height: 280px;
      }

      &:nth-child(3n) {
        margin-right: 0;
      }

      .cn-title {
        top: 32px;
        font-size: 28px;
        line-height: 42px;
        letter-spacing: 6px;
      }
      .en-title {
        top: 90px;
        letter-spacing: 4px;
        @include display2;
      }
      .in-en-lang {
        top: 32px;
        @include display2;
        letter-spacing: 4px;
      }
    }
  }
}
</style>
