# Tauri

Rust 跨端 app，虽然比较新的框架，但是已经有较为成熟的产品，例如：[ChatWise](https://chatwise.app)、[HuLa](https://hulaspark.com/)，学习这种跨端框架当然是要跨端才好，
一次编写可以构建多个平台的 app

## 使用 github action 自动发布 release

> .github/workflows/auto-push.yml

```yml
name: 'publish'

on:
  push:
    tags:
      - 'v*'

jobs:
  publish-tauri:
    permissions:
      contents: write
    strategy:
      fail-fast: false
      matrix:
        include:
          - platform: 'macos-latest' # for Arm based macs (M1 and above).
            args: '--target aarch64-apple-darwin'
          - platform: 'macos-latest' # for Intel based macs.
            args: '--target x86_64-apple-darwin --bundles app'
          - platform: 'ubuntu-22.04' # for Tauri v1 you could replace this with ubuntu-20.04.
            args: ''
          - platform: 'windows-latest'
            args: ''

    runs-on: ${{ matrix.platform }}
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Install pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 10
      - name: setup node
        uses: actions/setup-node@v4
        with:
          node-version: lts/*
          cache: 'pnpm'
      - name: install Rust stable
        uses: dtolnay/rust-toolchain@stable
        with:
          # Those targets are only used on macos runners so it's in an `if` to slightly speed up windows and linux builds.
          targets: ${{ matrix.platform == 'macos-latest' && 'aarch64-apple-darwin,x86_64-apple-darwin' || '' }}

      - name: install dependencies (ubuntu only)
        if: matrix.platform == 'ubuntu-22.04' # This must match the platform value defined above.
        run: |
          sudo apt-get update
          sudo apt-get install -y libwebkit2gtk-4.0-dev libwebkit2gtk-4.1-dev libappindicator3-dev librsvg2-dev patchelf
        # webkitgtk 4.0 is for Tauri v1 - webkitgtk 4.1 is for Tauri v2.
        # You can remove the one that doesn't apply to your app to speed up the workflow a bit.

      - name: install frontend dependencies
        run: pnpm install # change this to npm, pnpm or bun depending on which one you use.

      - uses: tauri-apps/tauri-action@v0
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tagName: v__VERSION__ # the action automatically replaces \_\_VERSION\_\_ with the app version.
          releaseName: 'OnlyWrite v__VERSION__'
          releaseBody: 'See the assets to download this version and install.'
          releaseDraft: false
          prerelease: false
          args: ${{ matrix.args }}
          updaterJsonPreferNsis: true
          updaterJsonKeepUniversal: true
      - run: npx changelogithub
        env:
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

> .github/workflows/test-build.yml

```yml
name: 'test-build'

on:
  pull_request:
    branches:
      - main
  push:
    branches:
      - main
      - dev
  workflow_dispatch:

jobs:
  test-tauri:
    strategy:
      fail-fast: false
      matrix:
        include:
          - platform: 'macos-latest' # for Arm based macs (M1 and above).
            args: '--target aarch64-apple-darwin'
          - platform: 'macos-latest' # for Intel based macs.
            args: '--target x86_64-apple-darwin'
          - platform: 'ubuntu-22.04' # for Tauri v1 you could replace this with ubuntu-20.04.
            args: ''
          - platform: 'windows-latest'
            args: ''

    runs-on: ${{ matrix.platform }}
    steps:
      - uses: actions/checkout@v4
      - name: Install pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 10
      - name: setup node
        uses: actions/setup-node@v4
        with:
          node-version: lts/*
          cache: 'pnpm'
      - name: install Rust stable
        uses: dtolnay/rust-toolchain@stable
        with:
          # Those targets are only used on macos runners so it's in an `if` to slightly speed up windows and linux builds.
          targets: ${{ matrix.platform == 'macos-latest' && 'aarch64-apple-darwin,x86_64-apple-darwin' || '' }}

      - name: install dependencies (ubuntu only)
        if: matrix.platform == 'ubuntu-22.04' # This must match the platform value defined above.
        run: |
          sudo apt-get update
          sudo apt-get install -y libwebkit2gtk-4.0-dev libwebkit2gtk-4.1-dev libappindicator3-dev librsvg2-dev patchelf
        # webkitgtk 4.0 is for Tauri v1 - webkitgtk 4.1 is for Tauri v2.
        # You can remove the one that doesn't apply to your app to speed up the workflow a bit.

      - name: install frontend dependencies
        run: pnpm install # change this to npm, pnpm or bun depending on which one you use.

      # If tagName and releaseId are omitted tauri-action will only build the app and won't try to upload any assets.
      - uses: tauri-apps/tauri-action@v0
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          args: ${{ matrix.args }}
```

不熟悉[Github Action](https://github.com/features/actions)的可以去看我写的[入门介绍](../env/github-workflow.md)

使用上面的工作流可以在 push tag v\*的时候自动构建并发布 Release 和生成 changelog

changelog 生成使用的是[Antfu changelogithub](https://github.com/antfu/changelogithub)采用的是[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)语法，可以使用这种语法来提交`git message`生成好看的、易懂的 changelog

![changelog_example](https://cdn.bangwu.top/img/o85kd-yqbangwu20250405111742.webp)

### [Tauri-action](https://github.com/tauri-apps/tauri-action)

应用签名

如何配置 latest.json

如何构建移动端 app

如何自动发布到平台

### Github Action Release 仓库允许读写权限

这样才能发布 Release 不然会有报错`Error permisson`

## 解决 使用 Nextjs SSR window is not defined

## 解决 Error: Cannot read properties of undefined (reading 'xxxxxx')

这个报错很有可能是使用插件未加载导致的，在 main.rs 中初始化插件
