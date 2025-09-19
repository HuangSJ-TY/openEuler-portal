<script lang="ts" setup>
import { ref } from 'vue';
import { ORow, OCol, OCard, OButton, OLink, OIcon } from '@opensig/opendesign';

import BannerLevel2 from '~@/components/BannerLevel2.vue';
import AppSection from '~@/components/AppSection.vue';

import { projectData } from '~@/data/project';

import banner from '~@/assets/category/mailing/mailing-banner.jpg';

import IconGitee from '~icons/app-new/icon-gitee.svg';
import IconChevronRight from '~icons/app-new/icon-chevron-right.svg';

import { useLocale } from '~@/composables/useLocale';
import { useScreen } from '~@/composables/useScreen';

const { locale, t } = useLocale();
const { lePadV } = useScreen();
</script>

<template>
  <BannerLevel2 v-if="!lePadV" class="project-banner" :title="t('project.title')" :subtitle="t('project.subtitle')" :background-image="banner" />
  <div v-else class="mo-banner">
    <p class="mo-title">{{ t('project.title') }}</p>
    <p class="mo-subtitle">{{ t('project.subtitle') }}</p>
  </div>
  <AppSection :title="t('project.listTitle')" class="project-list">
    <ORow gap="32px 32px" wrap="wrap">
      <OCol v-for="(item, i) in projectData[locale]" :key="i" :flex="lePadV ? '0 0 100%' : '0 0 50%'">
        <OCard :detail-row="2" :detail-max-row="2">
          <template #header>
            <p class="item-title">{{ item.title }}</p>
          </template>
          <template #detail>
            <span :title="item.desc">{{ item.desc }}</span>
          </template>
          <template #footer>
            <OButton color="primary" variant="outline" size="large" :href="`/${locale}${item.url}`" target="_blank">{{ t('project.viewMore') }}</OButton>
            <OLink color="normal" variant="text" :href="item.giteeUrl" target="_blank">
              <OIcon class="gitee-icon"><IconGitee /></OIcon>
              <span class="gitee">{{ t('project.gitee') }}</span>
              <OIcon class="right-icon"><IconChevronRight /></OIcon>
            </OLink>
          </template>
        </OCard>
      </OCol>
    </ORow>
  </AppSection>
  <div class="partake">
    <p class="partake-title">{{ t('project.participate') }}</p>
    <p class="partake-titdescle">{{ t('project.participateDesc') }}</p>
    <div class="btn">
      <OButton color="primary" variant="solid" size="large" :href="`/${locale}/community/contribution/`" target="_blank">{{ t('project.strategy') }}</OButton>
      <OButton color="primary" variant="outline" size="large" :href="`/${locale}/sig/sig-list/`" target="_blank">{{ t('project.viewSig') }}</OButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-banner {
  background-color: transparent;
  :deep(.wrap) {
    .banner-text {
      max-width: 60%;
      .banner-title {
        color: var(--o-color-black);
        @include display2;
      }
      .banner-subtitle {
        color: var(--o-color-black);
        margin-top: var(--o-gap-2);
        @include text2;
      }
    }

    height: 280px;

    @media screen and (max-width: 1680px) {
      height: 220px;

      .banner-text {
        .banner-title {
          font-size: 40px;
          line-height: 56px;
        }
        .banner-subtitle {
          font-size: 16px;
          line-height: 24px;
        }
      }
    }

    @media screen and (max-width: 1200px) {
      height: 180px;

      .banner-text {
        .banner-title {
          @include display2;
        }
        .banner-subtitle {
          @include text2;
        }
      }
    }
  }
}

.mo-banner {
  @include respond-to('<=pad_v') {
    padding: 24px 24px 20px;
    .mo-title {
      font-weight: 500;
      @include display3;
    }
    .mo-subtitle {
      color: var(--o-color-info2);
      margin-top: 8px;
      @include tip1;
    }
  }
  @include respond-to('phone') {
    .mo-title {
      @include display1;
    }
    .mo-subtitle {
      @include text1;
    }
  }
}

:deep(.o-card-footer) {
  display: flex;
  align-items: center;
}
.o-link {
  :deep(.o-link-label) {
    display: flex;
    align-items: center;
  }
  .o-icon {
    --icon-size: 24px;
  }
  .gitee {
    margin: 0 4px 0 8px;
  }
}
.o-btn + .o-link {
  margin-left: 24px;
}

.partake {
  width: 100%;
  background-color: var(--o-color-fill2);
  border-radius: var(--o-radius-xs);
  margin-top: 72px;
  padding: 32px 0;
  text-align: center;
}
.partake-title {
  font-weight: 600;
  color: var(--o-color-info1);
  @include display3;
}
.partake-titdescle {
  margin-top: 16px;
  color: var(--o-color-info1);
  @include text2;
}
.btn {
  margin-top: 24px;
  .o-btn + .o-btn {
    margin-left: 24px;
  }
}
</style>
