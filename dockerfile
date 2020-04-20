# build stage
# 拉取最小node环境镜像
FROM node as build-stage
# 全局安装cnpm环境，然后安装相关依赖
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install
# 配置容器的app目录，然后拷贝本地根目录 到 容器工作目录，然后构建整个项目
WORKDIR /app
COPY . .
RUN npm run build

#  production stage
#  拉取最小nginx环境镜像，然后通过nginx部署build出来的前端项目
FROM nginx AS production-stage
#  将前端项目复制到nginx相应目录中
COPY nginx.conf /etc/nginx/nginx.conf
#  将前端项目的dist目录复制到nginx的html目录
COPY --from=build-stage /app/dist /user/share/nginx/html
EXPOSE 80
#  docker启动时，默认将pid=1的进程作为docker容器是否运行的标志
#  当有CMD指令时，nginx在后台运行，bash脚本的pid成为1了
CMD ["nginx","-g","daemon off;"]