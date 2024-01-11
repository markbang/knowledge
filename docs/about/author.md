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
    avatar: 'https://3vj-maxzip.oss-accelerate.aliyuncs.com/modelfile/20240122/9nfcc5le5j6jq9m208c24p39lblq8y19.zip',
    name: 'Mark Bang',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/markbang' },
    ]
  },
  {
    avatar: 'https://3vj-maxzip.oss-accelerate.aliyuncs.com/modelfile/20240117/20kk7i8gmu4u5e85c07oxqq0bgxdfklj.zip',
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