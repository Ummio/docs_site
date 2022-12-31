import{_ as s,c as n,o as a,e as l}from"./app.002570c5.js";const A=JSON.parse('{"title":"Webp优化随机图说明","description":"","frontmatter":{"title":"Webp优化随机图说明"},"headers":[{"level":2,"title":"目录及文件说明","slug":"目录及文件说明","link":"#目录及文件说明","children":[]},{"level":2,"title":"食用方法：","slug":"食用方法","link":"#食用方法","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"运行","slug":"运行","link":"#运行","children":[]}]}],"relativePath":"Sakurairo/Webp/index.md"}'),e={name:"Sakurairo/Webp/index.md"},p=l(`<h1 id="webp-随机图" tabindex="-1">Webp 随机图 <a class="header-anchor" href="#webp-随机图" aria-hidden="true">#</a></h1><p>主题内置manifest生成工具，使用python3实现，可生成封面图所需文件，详见这里</p><h2 id="目录及文件说明" tabindex="-1">目录及文件说明 <a class="header-anchor" href="#目录及文件说明" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├── manifest</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── gallary           // 存放原图片</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── jpeg              // 存放生成的缩略图</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── webp              // 存放转换后的封面图</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── manifest.json     // 生成的manifest数据</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── manifest.py       // manifest主程序</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── qt.py             // manifest GUI程序（开发中）</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├─── __init__.py      // GUI程序初始化文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── icon.*            // GUI素材文件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="食用方法" tabindex="-1">食用方法： <a class="header-anchor" href="#食用方法" aria-hidden="true">#</a></h2><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h3><p>安装依赖</p><p>安装 Python： <a href="https://docs.python.org/zh-cn/3.7/using/index.html" target="_blank" rel="noreferrer">https://docs.python.org/zh-cn/3.7/using/index.html</a></p><p>安装 PIL：</p><div class="language-Sh"><button title="Copy Code" class="copy"></button><span class="lang">Sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Linux/Mac Terminal</span></span>
<span class="line"><span style="color:#FFCB6B;">pip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Pillow</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如果也安装了 Python 2，需要指定 pip 版本：</span></span>
<span class="line"><span style="color:#FFCB6B;">pip3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Pillow</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Windows Powershell 或者 CMD</span></span>
<span class="line"><span style="color:#FFCB6B;">pip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Pillow</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如果也安装了 Python 2，需要指定 pip 版本：</span></span>
<span class="line"><span style="color:#FFCB6B;">pip3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Pillow</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如果提示权限不足（[WinError 5] Access is denied），请运行：</span></span>
<span class="line"><span style="color:#FFCB6B;">pip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Pillow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--user</span></span>
<span class="line"></span></code></pre></div><h3 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-hidden="true">#</a></h3><p>把图片文件放到 gallary 目录，Windows 可直接双击 <a href="http://manifest.py" target="_blank" rel="noreferrer">manifest.py</a>，或者和其他操作系统一样，在 Terminal、Powershell、CMD 中运行：</p><div class="language-Sh"><button title="Copy Code" class="copy"></button><span class="lang">Sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 切换到 manifest.py 所在目录：</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/path/to/manifest/</span></span>
<span class="line"><span style="color:#FFCB6B;">python</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">manifest.py</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如果也安装了 Python 2，需要指定 Python 版本：</span></span>
<span class="line"><span style="color:#FFCB6B;">python3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">manifest.py</span></span>
<span class="line"></span></code></pre></div><p>之后根据提示操作即可，程序会生成封面图，本主题为后端获取<code>manifest.json</code>，在<code>iro主题设置</code>中的<code>主页设置-封面随机图片选项</code>中 处填写url并保存好后，点击更新会将<code>manifest.json</code> 存入WordPress数据库</p><p>将 <code>manifest</code> 整个文件夹上传至你的cdn，并 在<code>iro主题设置</code>中的<code>主页设置-封面随机图片选项</code>中 处填写url并保存，最后<strong>不用</strong>加斜杠（注：留空则使用本地的manifest路径）</p>`,15),o=[p];function t(c,i,r,y,d,C){return a(),n("div",null,o)}const D=s(e,[["render",t]]);export{A as __pageData,D as default};
