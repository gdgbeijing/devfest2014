如何让这堆代码变成可以浏览的网站？

1. 下载

 如果你正在GitHub上读这段文字，你可以用下面的git命令下载源代码（请将git clone后面的地址替换成你在浏览器地址栏中看到的实际地址）

 git clone https://github.com/renfeng/devfest2014

 如果你不用git，也可以找到“Download ZIP”按钮，点一下，将原文件打包下载。

2. 安装

 不需要安装特殊的服务器软件。所有文件都是静态的（相对服务器端而言）。但是，需要安装一个特殊的目录，bower_components。

 而安装这个目录，需要执行下面的一行命令（先别急着执行，请继续向下读）

 bower install

 要执行上一行命令，需要先执行

 npm install -g bower

 要执行上一行命令，需要先安装nodejs。见http://nodejs.org

 代码是从https://github.com/gdgbeijing/devfest2014复制来的。下面是原作者的readme

3. 为了用Google Map，需要为你的域名设置专用的api key。

4. 将代码放在任何网站服务器下面，例如Apache HTTPd。

devfest2014
===========

2014 GDG Beijing DevFest Website.

This is a polymer web app, it follow Google material design and responsive web design rule.

At the project root directory, use <code>bower install</code> command to install dependences. About bower see http://bower.io/ .

When you deploy polymer project to product environment, you could use <code>vulcanize</code> tool to merge small files, see http://www.polymer-project.org/articles/concatenating-web-components.html .
