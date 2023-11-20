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
    avatar: 'https://s2.loli.net/2023/11/20/LIjPU1eO2iH9Wvm.png',
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
