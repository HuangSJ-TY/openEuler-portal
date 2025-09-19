<script lang="ts" setup>
import { OFigure, ORow, OCol, OLink } from '@opensig/opendesign';

import BannerLevel2 from '~@/components/BannerLevel2.vue';
import AppSection from '~@/components/AppSection.vue';

import { entranceList } from '~@/data/project';

import banner from '~@/assets/category/mailing/mailing-banner.jpg';

import IconLowCode from '~icons/intelligence/icon-low-code.svg';
import IconAvailability from '~icons/intelligence/icon-availability.svg';
import IconLightweight from '~icons/intelligence/icon-lightweight.svg';
import IconOutLink from '~icons/app-new/icon-outlink.svg';

import frameworkImgZh from '~@/assets/category/intelligence/framework-img-zh-mb.png';

import { useLocale } from '~@/composables/useLocale';
import { useScreen } from '~@/composables/useScreen';

const { locale, t } = useLocale();
const { lePadV } = useScreen();

const frameworkList = [
  {
    icon: IconLowCode,
    title: t('yuanrong.multilingual'),
    desc: t('yuanrong.multilingualDesc'),
  },
  {
    icon: IconAvailability,
    title: t('yuanrong.functionSystem'),
    desc: t('yuanrong.functionSystemDesc'),
  },
  {
    icon: IconLightweight,
    title: t('yuanrong.dataSystem'),
    desc: t('yuanrong.dataSystemDesc'),
  }
]
</script>

<template>
  <BannerLevel2 v-if="!lePadV" class="yuanrong-banner" :title="t('yuanrong.title')" :subtitle="t('yuanrong.subtitle')" :background-image="banner" />
  <div v-else class="mo-banner">
    <p class="mo-title">{{ t('yuanrong.title') }}</p>
    <p class="mo-subtitle">{{ t('yuanrong.subtitle') }}</p>
  </div>
  <AppSection :title="t('yuanrong.introTitle')" class="introduction">
    <div class="intro-desc">{{ t('yuanrong.introDesc') }}</div>
  </AppSection>
  <AppSection :title="t('yuanrong.frameworkTitle')" :subtitle="t('yuanrong.frameworkDesc')" class="framework">
    <div class="framework-content">
      <div class="framework-left">
        <div v-for="(item, i) in frameworkList" :key="i" class="item">
          <OIcon><component :is="item.icon"></component></OIcon>
          <div class="item-content">
            <p class="item-title">{{ item.title }}</p>
            <p class="item-desc">{{ item.desc }}</p>
          </div>
        </div>
        <p class="function-desc">*{{ t('yuanrong.functionDesc') }}</p>
      </div>
      <OFigure :src="frameworkImgZh" class="framework-img"></OFigure>
    </div>
  </AppSection>
  <AppSection :title="t('yuanrong.entranceTitle')" class="entrance">
    <ORow :gap="lePadV ? '0 12px' : '32px 0'" wrap="wrap">
      <OCol v-for="(item, i) in entranceList" :key="i" :flex="lePadV ? '0 0 100%' : '0 0 50%'">
        <OLink :icon="item.icon" class="item-info">
          <p class="info-title">{{ item.title }}</p>
          <OIcon class="outlink-icon"><IconOutLink /></OIcon>
        </OLink>
      </OCol>
    </ORow>
  </AppSection>
</template>

<style scoped lang="scss">
.yuanrong-banner {
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

.introduction {
  :deep(.section-body) {
    margin-top: 40px;
  }
}
.intro-desc {
  width: 100%;
  background-color: var(--o-color-fill2);
  border-radius: var(--o-radius-xs);
  padding: 32px;
  color: var(--o-color-info1);
  @include text2;
}

.framework {
  :deep(.section-subtitle) {
    margin-top: 16px;
    color: var(--o-color-info1);
    @include text2;
  }
}
.framework-content {
  width: 100%;
  background-color: var(--o-color-fill2);
  border-radius: var(--o-radius-xs);
  padding: 32px;
  display: flex;
  color: var(--o-color-info3);
}
.item {
  display: flex;
  align-items: flex-start;
  .o-icon {
    flex-shrink: 0;
    --icon-size: 24px;
  }
}
.item + .item {
  margin-top: 24px;
}
.item-content {
  margin-left: 12px;
}
.item-title {
  font-weight: 500;
  color: var(--o-color-info1);
  @include h3;
}
.item-desc {
  margin-top: 12px;
  @include text1;
}
.function-desc {
  margin-top: 24px;
  @include text1;
}
.framework-img {
  margin-left: 48px;
  width: 770px;
}

.item-info {
  width: 100%;
  align-items: center;
  background-color: var(--o-color-fill2);
  border-radius: var(--o-radius-xs);
  padding: 32px 24px;
  --link-gap: 12px;
}
.o-link {
  :deep(.o-link-label) {
    display: flex;
    align-items: center;
  }
  .o-icon {
    --icon-size: 24px;
  }
}
.info-title {
  font-weight: 500;
  color: var(--o-color-info1);
  margin-right: 8px;
  @include h3;
}

@include respond-to('<=pad_v') {
  .framework-content {
    flex-direction: column;
  }
  .framework-img {
    width: 100%;
    margin-left: 0;
    margin-top: 8px;
  }
}
</style>
