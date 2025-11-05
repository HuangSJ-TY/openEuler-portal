<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';

import AppContext from '@/components/AppContent.vue';
import SummitBanner from './components/SummitBanner.vue';
import SummitIntroduce from './components/SummitIntroduce.vue';
import SummitAgent from './components/SummitAgent.vue';
import SummitGuest from './components/SummitGuest.vue';
import SummitPartner from './components/SummitPartner.vue';
import SummitPrevious from './components/SummitPrevious.vue';

import data_zh from './data/data_zh';
import data_en from './data/data_en';

const { lang } = useData();

const summitData = computed(() => {
  return lang.value === 'zh' ? data_zh : data_en;
});
</script>

<template>
  <SummitBanner :banner-data="summitData.banner" />
  <AppContext>
    <SummitIntroduce :introduce-data="summitData.introduce" />
    <SummitAgent :agent-data="summitData.agent" />
    <SummitGuest v-if="summitData.guest.title" :guest-data="summitData.guest" />
    <SummitPartner :partner-data="summitData.partner" />
    <SummitPrevious :previous-data="summitData.previous" />
  </AppContext>
</template>

<style scoped lang="scss">
:deep(.section-title) {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  line-height: 56px;
  color: var(--e-color-text1);
  font-weight: 500;
  .o-icon {
    --icon-size: 32px;
    margin-left: var(--e-spacing-h5);
    @media screen and (max-width: 768px) {
      --icon-size: 16px;
      margin-left: var(--e-spacing-h7);
    }
  }
  @media screen and (max-width: 1440px) {
    font-size: var(--e-font-size-h3);
    line-height: var(--e-line-height-h3);
  }
  @media screen and (max-width: 1200px) {
    font-size: var(--e-font-size-h5);
    line-height: var(--e-line-height-h5);
  }
  @media screen and (max-width: 768px) {
    font-size: var(--e-font-size-h7);
    line-height: var(--e-line-height-h7);
  }
}
</style>
