import download_pc from '~@/assets/category/home/banner/download/pc.jpg';
import download_pad from '~@/assets/category/home/banner/download/pad.jpg';
import download_mb_zh from '~@/assets/category/home/banner/download/banner-mb-zh.jpg';
import download_mb_en from '~@/assets/category/home/banner/download/banner-mb-en.jpg';

import release_pc from '~@/assets/category/home/banner/release/pc.jpg';
import release_pad from '~@/assets/category/home/banner/release/pad.jpg';
import release_mb_zh from '~@/assets/category/home/banner/release/mb.jpg';

import minisite_pc from '~@/assets/category/home/banner/summit2025/pc.jpg';
import minisite_pad from '~@/assets/category/home/banner/summit2025/pad.jpg';
import minisite_mb from '~@/assets/category/home/banner/summit2025/mb.jpg';
import minisite_pc_dark from '~@/assets/category/home/banner/summit2025/pc_dark.jpg';
import minisite_pad_dark from '~@/assets/category/home/banner/summit2025/pad_dark.jpg';
import minisite_mb_dark from '~@/assets/category/home/banner/summit2025/mb_dark.jpg';
import minisite_text from '~@/assets/category/home/banner/summit2025/textImg-pc-light.png';
import minisite_text_dark from '~@/assets/category/home/banner/summit2025/textImg-pc-dark.png';

export default {
  zh: [
    {
      light: {
        bg_pc: minisite_pc,
        bg_pad: minisite_pad,
        bg_mb: minisite_mb,
        bg_text: minisite_text,
        bg_theme: 'light',
      },
      dark: {
        bg_pc: minisite_pc_dark,
        bg_pad: minisite_pad_dark,
        bg_mb: minisite_mb_dark,
        bg_text: minisite_text_dark,
        bg_theme: 'dark',
      },
      href: '/zh/interaction/summit-list/summit2025/',
      isBlank: true,
      btn: '查看详情',
      pc_text_width: '658px',
      pc_text_height: '158px',
      pad_text_width: '395px',
      pad_text_height: '95px',
      pad_offset: '80%',
    },
    {
      bg_pc: release_pc,
      bg_pad: release_pad,
      bg_mb: release_mb_zh,
      bg_text: '',
      bg_theme: 'light',
      title: 'openEuler 25.09 创新版正式发布',
      btn: '下载',
      href: '/zh/download/#openEuler%2025.09',
      isBlank: true,
    },
    {
      bg_pc: download_pc,
      bg_pad: download_pad,
      bg_mb: download_mb_zh,
      bg_text: '',
      bg_theme: 'light',
      title: '获取openEuler',
      subtitle: '一站式资源下载获取，欢迎使用',
      btn: '查看详情',
      href: '/zh/download',
      isBlank: true,
      pc_text_width: '658px',
      pc_text_height: '158px',
      pad_text_width: '395px',
      pad_text_height: '95px',
    },
  ],
  en: [
    {
      light: {
        bg_pc: minisite_pc,
        bg_pad: minisite_pad,
        bg_mb: minisite_mb,
        bg_text: minisite_text,
        bg_theme: 'light',
      },
      dark: {
        bg_pc: minisite_pc_dark,
        bg_pad: minisite_pad_dark,
        bg_mb: minisite_mb_dark,
        bg_text: minisite_text_dark,
        bg_theme: 'dark',
      },
      href: '/en/interaction/summit-list/summit2025/',
      isBlank: true,
      btn: 'View More',
      pc_text_width: '658px',
      pc_text_height: '158px',
      pad_text_width: '395px',
      pad_text_height: '95px',
      pad_offset: '80%',
    },
    {
      bg_pc: download_pc,
      bg_pad: download_pad,
      bg_mb: download_mb_en,
      bg_text: '',
      bg_theme: 'light',
      title: 'Get openEuler',
      subtitle: 'Find all resources in one place',
      btn: 'View More',
      href: '/en/download',
      isBlank: true,
      pc_text_width: '658px',
      pc_text_height: '158px',
      pad_text_width: '395px',
      pad_text_height: '95px',
    },
  ],
};
