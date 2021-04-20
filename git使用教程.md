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

进入要上传的仓库，右键git bash，添加远程地址：
$ git remote add origin  创建的项目服务器地址



