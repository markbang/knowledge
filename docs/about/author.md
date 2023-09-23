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
    avatar: 'https://bangwu.oss-cn-shanghai.aliyuncs.com/img/202305102251074.jpg',
    name: 'Mark Bang',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/markbang' },
    ]
  },
  {
    avatar: 'https://bangwu.oss-cn-shanghai.aliyuncs.com/img/202305102251074.jpg',
    name: 'Hui',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/markbang' },
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


由于我们是大学生，正常来说也会面临死亡期末周，所以每学期都会挣扎捏