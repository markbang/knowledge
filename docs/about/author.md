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

<style>
  body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .course-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .course-container h1 {
      margin-bottom: 20px;
  }
  a.course-link {
      display: inline-block;
      padding: 10px 20px;
      margin: 10px 0;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s, transform 0.3s;
  }
  a.course-link:hover {
      background-color: gray;
      transform: translateY(-2px);
  }
  a.course-link:active {
      background-color: #1ecaca;
      transform: translateY(0);
  }
</style>

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
<div class="course-container">
    <a href="./学科期末复习/数据挖掘" class="course-link">数据挖掘</a>
    <a href="./学科期末复习/数据结构与算法" class="course-link">数据结构与算法</a>
    <a href="./学科期末复习/信息检索" class="course-link">信息检索</a>
</div>