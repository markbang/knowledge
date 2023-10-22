# My Page

<button @click="loadEditor">打开编辑器</button>

<div v-if="editorLoaded" ref="editorContainer"></div>

<script setup>
const { ref } = Vue;

const editorLoaded = ref(false);

const loadEditor = () => {
  const iframe = document.createElement('iframe');
  iframe.src = "https://markbang.github.io/my-custom-deployment/repl/?kernel=python&toolbar=1";
  iframe.width = '100%';
  iframe.height = '500px';
  editorContainer.value.appendChild(iframe);
  editorLoaded.value = true;
}
</script>
