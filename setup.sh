# 镜像的编译，以及程序的部署
image_version='date +%Y%m%d%H%M';
echo $image_version;

# 从git下载项目最新的源代码(源代码)
git pull --weeklog origin master
# 停止并删除旧实例
docker stop weeklog_instance;
docker rm weeklog_instance;
# 通过新代码构建新镜像weeklog_image:$image_version
docker build -t weeklog_image:$image_version .;
docker images;
# 通过新镜像构建新实例weeklog
docker run -p 9002:80 -d --name weeklog weeklog_image:$image_version;
# 查看容器日志
docker logs weeklog;
# 删除build过程中产生的镜像
docker rmi $(docker images -f "dangling=true" -q)