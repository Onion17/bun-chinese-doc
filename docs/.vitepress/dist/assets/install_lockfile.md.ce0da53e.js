import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.33544f09.js";const h=JSON.parse('{"title":"Lockfile","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"install/lockfile.md","filePath":"install/lockfile.md"}'),o={name:"install/lockfile.md"},p=l(`<h1 id="lockfile" tabindex="-1">Lockfile <a class="header-anchor" href="#lockfile" aria-label="Permalink to &quot;Lockfile&quot;">​</a></h1><p>运行 <code>bun install</code> 会创建一个名为 <code>bun.lockb</code> 的二进制锁定文件。</p><h4 id="为什么是二进制的" tabindex="-1">为什么是二进制的？ <a class="header-anchor" href="#为什么是二进制的" aria-label="Permalink to &quot;为什么是二进制的？&quot;">​</a></h4><p>简而言之：性能。Bun 的锁定文件保存和加载非常快速，并保存了比通常在锁定文件中包含的数据要多得多。</p><h4 id="如何检查-bun-的锁定文件" tabindex="-1">如何检查 Bun 的锁定文件？ <a class="header-anchor" href="#如何检查-bun-的锁定文件" aria-label="Permalink to &quot;如何检查 Bun 的锁定文件？&quot;">​</a></h4><p>运行 <code>bun install -y</code> 以生成一个更容易检查的与 Yarn 兼容的 <code>yarn.lock</code>（v1）文件。</p><h4 id="如何使用-git-diff-查看-bun-的锁定文件" tabindex="-1">如何使用 <code>git diff</code> 查看 Bun 的锁定文件？ <a class="header-anchor" href="#如何使用-git-diff-查看-bun-的锁定文件" aria-label="Permalink to &quot;如何使用 \`git diff\` 查看 Bun 的锁定文件？&quot;">​</a></h4><p>将以下内容添加到您的本地或全局 <code>.gitattributes</code> 文件中：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">*.lockb binary diff=lockb</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;">*.lockb binary diff=lockb</span></span></code></pre></div><p>然后使用以下命令将以下内容添加到您的本地 git 配置中：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff.lockb.textconv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff.lockb.binary</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff.lockb.textconv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff.lockb.binary</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span></code></pre></div><p>或者使用 <code>--global</code> 选项将以下内容添加到您的全局 git 配置（系统范围）中：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff.lockb.textconv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff.lockb.binary</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff.lockb.textconv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff.lockb.binary</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span></code></pre></div><p><strong>为什么这样做有效：</strong></p><ul><li><code>textconv</code> 告诉 Git 在比较之前在文件上运行 <code>bun</code></li><li><code>binary</code> 告诉 Git 将文件视为二进制文件（以防尝试逐行比较文件）</li></ul><p>运行 <code>bun</code> 在锁定文件上将打印出易于阅读的差异。因此，我们只需要告诉 <code>git</code> 在比较之前在锁定文件上运行 <code>bun</code>。</p><h4 id="平台特定的依赖关系" tabindex="-1">平台特定的依赖关系？ <a class="header-anchor" href="#平台特定的依赖关系" aria-label="Permalink to &quot;平台特定的依赖关系？&quot;">​</a></h4><p>Bun 在锁定文件中存储了来自 npm 的标准化 <code>cpu</code> 和 <code>os</code> 值，以及已解析的包。它会跳过在运行时为当前目标禁用的下载、提取和安装的包。这意味着即使最终安装的包发生变化，锁定文件也不会在平台/架构之间发生更改。</p><h4 id="bun-的锁定文件存储了什么" tabindex="-1">Bun 的锁定文件存储了什么？ <a class="header-anchor" href="#bun-的锁定文件存储了什么" aria-label="Permalink to &quot;Bun 的锁定文件存储了什么？&quot;">​</a></h4><p>包、这些包的元数据、提升的安装顺序、每个包的依赖关系、这些依赖关系解析到的包、完整性哈希（如果可用）、每个包的解析以及版本（或等效版本）。</p><h4 id="为什么-bun-的锁定文件速度快" tabindex="-1">为什么 Bun 的锁定文件速度快？ <a class="header-anchor" href="#为什么-bun-的锁定文件速度快" aria-label="Permalink to &quot;为什么 Bun 的锁定文件速度快？&quot;">​</a></h4><p>它对所有数据使用线性数组。包是通过自增的整数 ID 或包名称的哈希引用的。长于 8 个字符的字符串会被去重。在保存到磁盘之前，锁定文件会进行垃圾回收，并通过遍历包树并按依赖关系顺序克隆包来使其确定性。</p><h4 id="我可以选择退出吗" tabindex="-1">我可以选择退出吗？ <a class="header-anchor" href="#我可以选择退出吗" aria-label="Permalink to &quot;我可以选择退出吗？&quot;">​</a></h4><p>要在安装时不创建锁定文件：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--no-save</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--no-save</span></span></code></pre></div><p>要额外安装 Yarn 锁定文件以补充 <code>bun.lockb</code>：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#CLI flag</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--yarn</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#CLI flag</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--yarn</span></span></code></pre></div><div class="language-toml#bunfig.toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml#bunfig.toml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[install.lockfile]</span></span>
<span class="line"><span style="color:#e1e4e8;"># 是否保存一个非-Bun 锁定文件与 bun.lockb 一起</span></span>
<span class="line"><span style="color:#e1e4e8;"># 仅支持 &quot;yarn&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">print = &quot;yarn&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[install.lockfile]</span></span>
<span class="line"><span style="color:#24292e;"># 是否保存一个非-Bun 锁定文件与 bun.lockb 一起</span></span>
<span class="line"><span style="color:#24292e;"># 仅支持 &quot;yarn&quot;</span></span>
<span class="line"><span style="color:#24292e;">print = &quot;yarn&quot;</span></span></code></pre></div>`,28),e=[p];function c(t,r,i,d,y,E){return a(),n("div",null,e)}const b=s(o,[["render",c]]);export{h as __pageData,b as default};