1. 去github官网注册一个账号
用户名： 邮箱号
密码： zzm&9位数

2.进入https://github.com/界面
创建一个新的项目， 然后复制 项目路径  https://github.com/boycell01/TestMongodb.git

3.下载github安装包，window系统的：Git-2.31.1-64-bit.ext

4.安装git软件

5.安装完成后在需要上传的目录中打开 右击 - Git Bash Here

配置Git
首先在本地创建ssh key；
$ ssh-keygen -t rsa -C "your_email@youremail.com"
为了验证是否成功，在git bash下输入：
$ ssh -T git@github.com

6.输入以下指令
git config  --global  user.name "用户名"
git config  --global  user,email  "注册的邮箱号"
配置ok之后，我们用如下命令来看看是否配置成功
git config --list

进入要上传的仓库，右键git bash，添加远程地址：
$ git remote add origin  https://github.com/boycell01/TestMongodb.git

（创建一个本地仓库的克隆版 测试可用）
git clone https://github.com/boycell01/TestMongodb.git
（如果是远端服务器上的仓库，你的命令会是这个样子  测试）
git clone username@host:/path/to/repository

添加单个项目
git add  "项目名称"

添加所有项目：
git add *

提交改动的信息
git commit -m  "代码提交信息"

执行如下命令以将这些改动提交到远端仓库：
git push origin master

git status（查看状态）

从版本库中删除该文件，那就用命令git rm 删掉，并且git commit;
git rm  "文件名";
git commit;


----------------------------------
tips

git init                    //初始化本地git仓库

git add <file>         //添加文件

git status                //查看状态  作用：检查刚刚所创建的文件，提示没有被检查到的文件

git commit             //提交（一般会用 git commit -m '******' 来省略修改介绍的步骤）

git push                 //推送到仓库

git pull                   //从远程仓库拉取数据

git clone                 //从远程仓库拷贝数据

git log                    //日志 另一种写法：git log --pretty=oneline命令，作用：可以简洁日志的输出

git checkout          // 文件夹名命令，作用：通过这样的命令可以撤销对文件夹的 改变

git reset HEAD文件夹名            //当改完文件夹后执行git add，git会提示执行git reset HEAD 文件名的形式撤销对暂存区的修改

git reset --hard HEAD^命令      //可以退回到上一个版本

