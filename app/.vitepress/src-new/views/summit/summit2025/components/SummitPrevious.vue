<script setup lang="ts">
import { OIcon } from '@opensig/opendesign';
import { useData } from 'vitepress';

import IconReview from '~icons/app-new/icon-review.svg';

import { useCommon } from '@/stores/common';

defineProps({
  previousData: {
    type: Object,
    required: true,
    default: () => null,
  },
});

const { lang } = useData();

const commonStore = useCommon();
</script>

<template>
  <div v-if="lang === 'zh'" class="previous">
    <div class="previous-title">
      <h3>{{ previousData.title }}</h3>
      <OIcon><IconReview /></OIcon>
    </div>
    <div class="link-box">
      <a
        v-for="item in previousData.list"
        :key="item.link"
        :href="item.link"
      >
        {{ item.name }}
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.previous {
  margin-top: var(--e-spacing-h1);
  @media screen and (max-width: 768px) {
    margin-top: var(--e-spacing-h4);
  }
  .previous-title {
    display: flex;
    h3 {
      font-size: 26px;
      line-height: 30px;
      color: var(--e-color-text1);
      margin-right: var(--e-spacing-h5);
      @media screen and (max-width: 768px) {
        font-size: var(--e-font-size-text);
        line-height: var(--e-line-height-text);
        margin-right: var(--e-spacing-h7);
      }
    }
  }

  .o-icon {
    --icon-size: 32px;
    @media screen and (max-width: 768px) {
      --icon-size: 16px;
    }
  }

  .link-box {
    margin-top: var(--e-spacing-h3);
    display: inline-flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
      margin-top: var(--e-spacing-h6);
    }
    a {
      font-size: var(--e-font-size-h6);
      line-height: var(--e-line-height-h6);
      @media screen and (max-width: 768px) {
        font-size: var(--e-font-size-tip);
        line-height: var(--e-line-height-tip);
      }
      & + a {
        margin-top: var(--e-spacing-h4);
        @media screen and (max-width: 768px) {
          margin-top: var(--e-spacing-h8);
        }
      }
    }
  }
}
</style>
