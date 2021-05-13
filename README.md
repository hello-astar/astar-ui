# Astar-UI
ui components based on vue

# To-Do-List
- [ ] 项目初始化、完善项目结构
- [ ] storybook
- [ ] typeScript
- [ ] webpack打包
- [ ] 集成单元测试
- [ ] 多语言

## 问题解决
1. storkbook使用webpack4，但是想用webpack5
https://gist.github.com/shilman/8856ea1786dcd247139b47b270912324
```
npx sb@next init --builder webpack5
```
2. [npx sb init does not work with NPM v7](https://github.com/storybookjs/storybook/issues/12983)
在新版的NPM(v7)中。默认情况下，npm install遇到冲突的peerDependencies时将失败。
https://github.blog/2021-02-02-npm-7-is-now-generally-available/#peer-dependencies
他们之间的差异--legacy-peer-deps:安装时忽略所有peerDependencies，其样式为npm版本4到版本6。
--strict-peer-deps:遇到任何冲突的peerDependencies时，失败并中止安装过程。默认情况下，npm仅会因根项目的直接依赖关系而导致的peerDependencies冲突而崩溃。
```
npm install --legacy-peer-deps
```
降低npm版本
3. 打包出错
https://juejin.cn/post/6844904122613760007