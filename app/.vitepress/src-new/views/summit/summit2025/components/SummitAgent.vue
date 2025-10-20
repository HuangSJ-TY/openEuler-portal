<script setup lang="ts">
import { ref, watch, computed } from 'vue';

import SummitSchedule from './SummitSchedule.vue';

import IconAddress from '~icons/app-new/icon-address.svg';
import IconTime from '~icons/app-new/icon-time.svg';

import { useData } from 'vitepress';

import { useCommon } from '@/stores/common';

interface DateT {
  day: string;
  month: string;
}

interface AgentItemT {
  title: string;
  time: string;
  name: string;
  post: string;
}

interface TabItemT {
  label: string;
  time: string;
  address: string;
  children: AgentItemT[];
}

interface ForumT {
  title: string;
  children: AgentItemT[];
  tab: TabItemT[];
}

const props = defineProps({
  agentData: {
    type: Object,
    required: true,
    default: () => null,
  },
});

const { lang } = useData();

const commonStore = useCommon();
const isDark = computed(() => {
  return commonStore.theme === 'dark' ? true : false;
});

const tabType = ref(0);

// 论坛切换
const activeIndex = ref(0);
const isCardVisible = ref(false);
const dateData = ref<ForumT[]>([]);
const forumData = ref<AgentItemT[]>([]);
const forumTabData = ref<TabItemT[]>([]);

const forumClick = (val: number) => {
  tabType.value = 0;
  activeIndex.value = val;
  forumData.value = dateData.value[val].children;
  forumTabData.value = dateData.value[val].tab;
  isCardVisible.value = (val === 1 || val === 2) && forumTabData.value.some(item => item.children?.length === 0);
}

// 议程日期切换
const dateList = ref<DateT[]>([]);
const dateIndex = ref(0);

const setDateIndex = (index: number) => {
  activeIndex.value = 0;
  dateIndex.value = index;
  dateData.value = props.agentData.list[index].children;
  forumClick(activeIndex.value)
}

watch(
  () => props.agentData,
  (val) => {
    val.list.forEach((item: any) => {
      dateList.value.push({
        day: item.date,
        month: 'NOV',
      })
    });
    setDateIndex(0);
  },
  { immediate: true }
);
</script>

<template>
  <div class="agent">
    <p class="section-title">{{ agentData.title }}</p>
    <!--  日期切换  -->
    <div class="date">
      <div
        v-for="(item, index) in dateList"
        :key="item.day"
        class="date-item"
        :class="{ active: dateIndex === index }"
        @click="setDateIndex(index)"
      >
        <p class="date-day">{{ item.day }}</p>
        <p class="date-month">{{ item.month }}</p>
      </div>
    </div>
    <!-- 论坛切换 -->
    <div class="forum">
      <div
        v-for="(item, index) of dateData"
        :key="item.title"
        class="forum-title"
        :class="{ active: activeIndex === index }"
        @click="forumClick(index)"
      >
        {{ item.title }}
      </div>
    </div>
    <!-- 议程 -->
    <div v-if="!isCardVisible" class="agent-list" :class="{'agent-list-dark': isDark}">
      <template v-if="forumData?.length">
        <ClientOnly>
          <SummitSchedule :options="forumData" :date-index="dateIndex" />
        </ClientOnly>
      </template>
      <template v-if="forumTabData?.length">
        <OTabs v-model="tabType" class="agenda-tabs">
          <OTabPane
            v-for="(item, i) in forumTabData"
            :key="i"
            :name="i"
            :label="item.label"
          >
            <SummitSchedule :options="item.children" :address="item.address" :date-index="dateIndex" :table-layout="false" />
          </OTabPane>
        </OTabs>
      </template>
    </div>
    <div v-else>
      <div class="agent-list-card">
        <div v-for="(item, i) in forumTabData" :key="i" class="item-card"  :class="{'item-card-layout': forumTabData.length === 2, 'item-card-dark': isDark}">
          <p class="card-title">{{ item.label }}</p>
          <div class="bottom">
            <div v-if="item.address" class="item-bottom">
              <span class="item-date"><IconAddress /><span>{{ item.address }}</span></span>
            </div>
            <div class="item-bottom">
              <span class="item-date"><IconTime /><span>{{ dateIndex === 0 ? '2025/11/14' : '2025/11/15' }}</span></span>
              <span class="time">{{ item.time }}</span>
            </div>
          </div>
        </div>
      </div>
      <p class="tips">{{ agentData.tips }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.agent {
  margin-top: 72px;
  @media screen and (max-width: 768px) {
    margin-top: var(--e-spacing-h4);
  }
}

.date {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  .date-item {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #cbcbcb;
    border-radius: 8px;
    border: 1px solid #cbcbcb;
    transition: all 0.3s ease-out;

    & ~ div {
      margin-left: 40px;
    }
    &.active {
      color: #fff;
      background-color: var(--e-color-brand1);
      border: 1px solid #fff;
    }
    .date-day {
      padding: 13px 17px 3px 15px;
      line-height: 48px;
      font-size: 48px;
      font-weight: 700;
      border-bottom: 1px solid #cbcbcb;
      @media screen and (max-width: 1120px) {
        padding: 6px 16px;
        font-size: 32px;
        line-height: 32px;
      }
    }
    .date-month {
      padding: 6px 0;
      font-size: 24px;
      font-weight: 100;
      line-height: 24px;
      @media screen and (max-width: 1120px) {
        padding: 4px 0;
        font-size: 16px;
      }
    }
  }
}
.forum {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  .forum-title {
    display: inline-block;
    cursor: pointer;
    color: var(--e-color-text1);
    text-align: center;
    background: var(--o-color-fill2);
    padding: 12px 24px;
    @include h3;
    &.active {
      color: #fff;
      background: var(--e-color-brand1);
      border-color: var(--e-color-brand1);
    }
    &:first-of-type {
      border-radius: 4px 0 0 4px;
    }
    &:last-of-type {
      border-radius: 0 4px 4px 0;
    }
  }
}

.agent-list {
  background-color: var(--o-color-fill2);
  margin-top: 24px;
  border-radius: 4px;
  padding: 40px 32px;
  background-image: url('../img/agent-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.agent-list-dark {
  background-image: url('../img/agent-bg-dark.png');
}

.agenda-tabs {
  :deep(.el-tabs__header) {
    border-bottom: 1px solid rgba(#002fa7, 0.1);
    .el-tabs__item {
      @include h3;
      padding-top: 0;
      padding-bottom: 18px;
      font-weight: 500;
      @include respond-to('<=pad_v') {
        padding-bottom: 16px;
      }
    }
  }
}

.agent-list-card {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
.item-card {
  width: calc((100% - 64px) / 3);
  height: 200px;
  background-color: var(--e-color-bg2);
  padding: 32px;
  border-radius: 4px;
  margin: 32px 0 0 32px;
  background-image: url('../img/card-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right bottom;
  &:nth-child(3n + 1) {
    margin-left: 0;
  }
  &:nth-child(-n + 3) {
    margin-top: 0;
  }

  .card-title {
    @include h3;
    color: var(--o-color-info1);
    font-weight: 500;
  }
  .bottom {
    display: flex;
    align-items: center;
    color: var(--o-color-info1);
    font-weight: 400;
    margin-top: var(--o-gap-2);
    @include text1;
    .item-bottom {
      display: flex;
      align-items: center;
    }
    .item-bottom + .item-bottom {
      margin-left: 16px;
    }
    .item-date {
      display: flex;
      align-items: center;
      svg {
        width: 22px;
        height: 22px;
        margin-right: 8px;
      }
    }
    .time {
      margin-left: var(--o-gap-4);
    }
  }
}
.item-card-dark {
  background-image: url('../img/card-bg-dark.png');
}
.item-card-layout {
  width: calc((100% - 32px) / 2);
}
.tips {
  text-align: center;
  color: var(--o-color-info3);
  margin-top: var(--o-gap-4);
  @include text1;
}

@include respond-to('laptop') {
  .agent-list {
    padding: 32px;
  }
  .item-card {
    width: calc((100% - 48px) / 3);
    height: 160px;
    padding: 24px;
    margin: 24px 0 0 24px;
  }
  .item-card-layout {
    width: calc((100% - 24px) / 2);
  }
}
@include respond-to('pad_h') {
  .forum {
    .forum-title {
      padding: 8px 16px;
    }
  }
  .agent-list {
    padding: 24px;
  }
  .item-card {
    width: calc((100% - 32px) / 3);
    height: 128px;
    padding: 16px;
    margin: 16px 0 0 16px;
  }
  .item-card-layout {
    width: calc((100% - 16px) / 2);
  }
}
@include respond-to('<=pad_v') {
  .forum {
    .forum-title {
      padding: 8px 16px;
    }
  }
  .agent-list {
    padding: 16px;
  }
  .item-card {
    width: 100%;
    height: 96px;
    padding: 16px;
    margin: 12px 0 0 0;
    background-image: none;
    &:nth-child(-n + 3) {
      margin-top: 12px;
    }
    .bottom {
      .item-bottom + .item-bottom {
        margin-left: 12px;
      }
      .item-date {
        svg {
          width: 16px;
          height: 16px;
          margin-right: 4px;
        }
      }
      .time {
        margin-left: var(--o-gap-2);
      }
    }
  }
}
</style>
