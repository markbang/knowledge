---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://txmov2.a.yximgs.com/ufile/atlas/NTE5MTgwNjAzNTM5OTUyNTg1N18xNjY3NTQwNzIxMDUw_9.jpg',
    name: 'Mark Bang',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/markbang' },
    ]
  },
  {
    avatar: 'https://s2.loli.net/2023/11/20/pfyosLlMWNU3Xak.jpg',
    name: 'Hui',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/Hui-hub507' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      我们的团队
    </template>
    <template #lead>
      我们团队是由以下两人组成，也是本站的两位文章编写者
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
<center style="font-size: 14px; color: #666;">
  <a href="https://cnblogs.com/bangwu" target="_blank">
    点击查看大学生期末复习
  </a>
</center>