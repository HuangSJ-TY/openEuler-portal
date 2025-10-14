<script setup lang="ts">
import { computed, ref } from 'vue';
import { useData } from 'vitepress';

import AppContext from '@/components/AppContent.vue';
import SummitBanner from './components/SummitBanner.vue';
import SummitIntroduce from './components/SummitIntroduce.vue';
import SummitCall from './components/SummitCall.vue';
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
    <SummitCall :call-data="summitData.callList" />
    <SummitPrevious :previous-data="summitData.previous" />
  </AppContext>
</template>

<style scoped lang="scss"></style>
