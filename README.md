# HOW TO RUN
```
yarn
yarn dev
```

# ABOUT PROJECT
- vite + ts + yarn + element-plus + vue-router + bootstrap
- 配置文件是vite.config.ts,里面配置了element和跨域的解决方案  
- main.ts里面是全局的引入,包括引入的element组件,路由,还有入口Vue文件:Index.vue
- index.html里是项目的基本设置,以及引入里main.ts,即项目的入口
- router.ts是路由配置,本来是想实现像nuxt那样依据文件结构自动生成路由的,但是没有找到好的方案

# DOCKER STUff
```
yarn build
docker build -t [image name] ./
docker run -d -p [port num]:80 [image num]
```