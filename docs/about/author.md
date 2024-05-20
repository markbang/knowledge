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
    avatar: 'https://p0.meituan.net/csc/05feb33b6fd287de69b7ad8f68c9bec3122241.jpg',
    name: 'Mark Bang',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/markbang' },
    ]
  },
]
const partners = []
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>站点作者</template>
    <template #lead>本人本科大二，开本站一方面为了方便自己查找自己学过的知识和分享给大家，另一方面是督促自己学习，任务驱动型吧（差不多。。。。）</template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
  <VPTeamPageSection>
    <template #title>贡献者</template>
    <template #lead>通过提评论或者Pull优化本站内容即可以申请进入贡献者名单哦</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>