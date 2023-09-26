import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.33544f09.js";const u=JSON.parse('{"title":"Templates","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"templates.md","filePath":"templates.md"}'),l={name:"templates.md"},p=o(`<h1 id="templates" tabindex="-1">Templates <a class="header-anchor" href="#templates" aria-label="Permalink to &quot;Templates&quot;">​</a></h1><h2 id="bun-init" tabindex="-1"><code>bun init</code> <a class="header-anchor" href="#bun-init" aria-label="Permalink to &quot;\`bun init\`&quot;">​</a></h2><p>使用交互式的 <code>bun init</code> 命令来创建一个空白项目。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span>
<span class="line"><span style="color:#B392F0;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">helps</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">you</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">started</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">with</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">minimal</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">project</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tries</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span></span>
<span class="line"><span style="color:#B392F0;">guess</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sensible</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">defaults.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Press</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">^C</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">anytime</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">quit.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">name</span><span style="color:#E1E4E8;"> (quickstart):</span></span>
<span class="line"><span style="color:#B392F0;">entry</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">point</span><span style="color:#E1E4E8;"> (index.ts):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Done!</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">A</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">package.json</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">was</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">saved</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">current</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">directory.</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.ts</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.gitignore</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tsconfig.json</span><span style="color:#E1E4E8;"> (for </span><span style="color:#9ECBFF;">editor</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">auto-complete</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">README.md</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">To</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">started,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.ts</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span>
<span class="line"><span style="color:#6F42C1;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#032F62;">helps</span><span style="color:#24292E;"> </span><span style="color:#032F62;">you</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">started</span><span style="color:#24292E;"> </span><span style="color:#032F62;">with</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a</span><span style="color:#24292E;"> </span><span style="color:#032F62;">minimal</span><span style="color:#24292E;"> </span><span style="color:#032F62;">project</span><span style="color:#24292E;"> </span><span style="color:#032F62;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tries</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span></span>
<span class="line"><span style="color:#6F42C1;">guess</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sensible</span><span style="color:#24292E;"> </span><span style="color:#032F62;">defaults.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Press</span><span style="color:#24292E;"> </span><span style="color:#032F62;">^C</span><span style="color:#24292E;"> </span><span style="color:#032F62;">anytime</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">quit.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">package</span><span style="color:#24292E;"> </span><span style="color:#032F62;">name</span><span style="color:#24292E;"> (quickstart):</span></span>
<span class="line"><span style="color:#6F42C1;">entry</span><span style="color:#24292E;"> </span><span style="color:#032F62;">point</span><span style="color:#24292E;"> (index.ts):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Done!</span><span style="color:#24292E;"> </span><span style="color:#032F62;">A</span><span style="color:#24292E;"> </span><span style="color:#032F62;">package.json</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file</span><span style="color:#24292E;"> </span><span style="color:#032F62;">was</span><span style="color:#24292E;"> </span><span style="color:#032F62;">saved</span><span style="color:#24292E;"> </span><span style="color:#032F62;">in</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">current</span><span style="color:#24292E;"> </span><span style="color:#032F62;">directory.</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.ts</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.gitignore</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tsconfig.json</span><span style="color:#24292E;"> (for </span><span style="color:#032F62;">editor</span><span style="color:#24292E;"> </span><span style="color:#032F62;">auto-complete</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">README.md</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">To</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">started,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.ts</span></span></code></pre></div><p>按 <code>enter</code> 键接受每个提示的默认答案，或者使用 <code>-y</code> 标志自动接受默认设置。</p><h2 id="bun-create" tabindex="-1"><code>bun create</code> <a class="header-anchor" href="#bun-create" aria-label="Permalink to &quot;\`bun create\`&quot;">​</a></h2><p><strong>注意</strong> — 您不需要使用 <code>bun create</code> 来使用 Bun。您根本不需要任何配置。这个命令存在是为了使入门更加快速和简便。</p><p>使用 <code>bun create</code> 来创建一个新的 Bun 项目。这是一个灵活的命令，可以用来创建一个新项目，使用 <code>create-&lt;template&gt;</code> npm 包、GitHub 仓库或本地模板。</p><h3 id="从-npm-安装" tabindex="-1">从 <code>npm</code> 安装 <a class="header-anchor" href="#从-npm-安装" aria-label="Permalink to &quot;从 \`npm\` 安装&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">templat</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> [&lt;destination&gt;]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">templat</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> [&lt;destination&gt;]</span></span></code></pre></div><p>假设您没有与相同名称的<a href="#从本地模板创建">本地模板</a>，此命令将下载并执行来自 npm 的<code>create-&lt;template&gt;</code>包。以下两个命令将表现相同：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remix</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bunx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create-remix</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remix</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bunx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create-remix</span></span></code></pre></div><p>请参阅相关的<code>create-&lt;template&gt;</code>包的文档以获取完整的文档和使用说明。</p><h3 id="从-github-下载" tabindex="-1">从 GitHub 下载 <a class="header-anchor" href="#从-github-下载" aria-label="Permalink to &quot;从 GitHub 下载&quot;">​</a></h3><p>这将下载 GitHub 存储库的内容到磁盘上。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">use</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">github.com/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">use</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">use</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">github.com/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">use</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>可选择为目标文件夹指定名称。如果未指定目标文件夹，则将使用存储库名称。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">use</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mydir</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">github.com/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">use</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mydir</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">use</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mydir</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">github.com/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">use</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mydir</span></span></code></pre></div><p>Bun 将执行以下步骤：</p><ul><li>下载模板</li><li>将所有模板文件复制到目标文件夹</li><li>使用 <code>bun install</code> 安装依赖项。</li><li>初始化一个新的 Git 仓库。使用 <code>--no-git</code> 标志来退出此步骤。</li><li>运行模板的配置的 <code>start</code> 脚本（如果定义了）。</li></ul><p>默认情况下，Bun 不会覆盖任何现有文件。使用 <code>--force</code> 标志来覆盖现有文件。</p><h3 id="从本地模板创建" tabindex="-1">从本地模板创建 <a class="header-anchor" href="#从本地模板创建" aria-label="Permalink to &quot;从本地模板创建&quot;">​</a></h3><p><strong>⚠️ 警告</strong> — 与远程模板不同，使用本地模板运行 <code>bun create</code> 将删除整个目标文件夹，如果它已经存在！请谨慎使用。</p><p>Bun 的模板化工具可以扩展以支持在本地文件系统上定义的自定义模板。这些模板应该位于以下目录之一：</p><ul><li><code>$HOME/.bun-create/&lt;name&gt;</code>：全局模板</li><li><code>&lt;项目根目录&gt;/.bun-create/&lt;name&gt;</code>：项目特定的模板</li></ul><p><strong>注意</strong> — 您可以通过设置 <code>BUN_CREATE_DIR</code> 环境变量来自定义全局模板路径。</p><p>要创建一个本地模板，导航到 <code>$HOME/.bun-create</code> 并创建一个具有所需模板名称的新目录。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cd</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.bun-create</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">foo</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">foo</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cd</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.bun-create</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">foo</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">foo</span></span></code></pre></div><p>然后，在该目录中创建一个包含以下内容的 <code>package.json</code> 文件：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;foo&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;foo&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>您可以在文件系统的其他位置运行 <code>bun create foo</code> 以验证 Bun 是否正确找到了您的本地模板。</p><h4 id="设置逻辑" tabindex="-1">设置逻辑 <a class="header-anchor" href="#设置逻辑" aria-label="Permalink to &quot;设置逻辑&quot;">​</a></h4><p>您可以在本地模板的 <code>package.json</code> 的 <code>&quot;bun-create&quot;</code> 部分中指定预安装和后安装的设置脚本。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;@bun-examples/simplereact&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0.0.1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;main&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;index.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;dependencies&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;react&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^17.0.2&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;react-dom&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^17.0.2&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;bun-create&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;preinstall&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;echo &#39;Installing...&#39;&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// a single command</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;postinstall&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;echo &#39;Done!&#39;&quot;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// an array of commands</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;start&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;bun run echo &#39;Hello world!&#39;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;@bun-examples/simplereact&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;version&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0.0.1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;main&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;index.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;dependencies&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;react&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;^17.0.2&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;react-dom&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;^17.0.2&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;bun-create&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;preinstall&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;echo &#39;Installing...&#39;&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// a single command</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;postinstall&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;echo &#39;Done!&#39;&quot;</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// an array of commands</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;start&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;bun run echo &#39;Hello world!&#39;&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>以下字段受支持。每个字段可以对应一个字符串或字符串数组。字符串数组将按顺序执行。</p><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td><code>postinstall</code></td><td>在安装依赖项后运行</td></tr><tr><td><code>preinstall</code></td><td>在安装依赖项之前运行</td></tr></tbody></table><p>在克隆模板后，<code>bun create</code> 将自动从 <code>package.json</code> 中删除 <code>&quot;bun-create&quot;</code> 部分，然后将其写入目标文件夹。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><h3 id="cli-标志" tabindex="-1">CLI 标志 <a class="header-anchor" href="#cli-标志" aria-label="Permalink to &quot;CLI 标志&quot;">​</a></h3><table><thead><tr><th>标志</th><th>描述</th></tr></thead><tbody><tr><td><code>--force</code></td><td>覆盖现有文件</td></tr><tr><td><code>--no-install</code></td><td>跳过安装 <code>node_modules</code> 和任务</td></tr><tr><td><code>--no-git</code></td><td>不要初始化 Git 仓库</td></tr><tr><td><code>--open</code></td><td>在完成后启动并在浏览器中打开</td></tr></tbody></table><h3 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h3><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td><code>GITHUB_API_DOMAIN</code></td><td>如果您使用的是 GitHub 企业版或代理，可以自定义 Bun 获取下载的 GitHub 域</td></tr><tr><td><code>GITHUB_API_TOKEN</code></td><td>这使得 <code>bun create</code> 可以与私有仓库一起使用，或者如果您被限制了速率</td></tr></tbody></table><blockquote><p><code>bun create</code> 的工作原理</p></blockquote><p>当您运行 <code>bun create \${template} \${destination}</code> 时，以下情况会发生：</p><p>如果是远程模板</p><ol><li><p>获取 <code>registry.npmjs.org/@bun-examples/\${template}/latest</code> 并解析它</p></li><li><p>获取 <code>registry.npmjs.org/@bun-examples/\${template}/-/\${template}-\${latestVersion}.tgz</code></p></li><li><p>解压缩并提取 <code>\${template}-\${latestVersion}.tgz</code> 到 <code>\${destination}</code></p><ul><li>如果有文件将被覆盖，除非传递了 <code>--force</code>，否则会警告并退出</li></ul></li></ol><p>如果是 GitHub 仓库</p><ol><li><p>从 GitHub 的 API 下载 tarball</p></li><li><p>解压缩并提取到 <code>\${destination}</code></p><ul><li>如果有文件将被覆盖，除非传递了 <code>--force</code>，否则会警告并退出</li></ul></li></ol><p>否则如果是本地模板</p><ol><li><p>打开本地模板文件夹</p></li><li><p>递归删除目标目录</p></li><li><p>递归复制文件，使用可用的最快系统调用（在 macOS 上是 <code>fcopyfile</code>，在 Linux 上是 <code>copy_file_range</code>）。不要复制或遍历 <code>node_modules</code> 文件夹（这个操作使其比 <code>cp</code> 更快）</p></li><li><p>解析 <code>package.json</code>（再次！），将 <code>name</code> 更新为 <code>\${basename(destination)}</code>，然后从 <code>package.json</code> 中删除 <code>&quot;bun-create&quot;</code> 部分，然后保存更新后的 <code>package.json</code> 到磁盘。</p><ul><li>如果检测到 Next.js，则将 <code>bun-framework-next</code> 添加到依赖项列表</li><li>如果检测到 Create React App，则将入口点添加到 /src/index.{js,jsx,ts,tsx} 到 <code>public/index.html</code></li><li>如果检测到 Relay，则添加 <code>bun-macro-relay</code> 以使 Relay 正常工作</li></ul></li><li><p>自动检测 npm 客户端，首选 <code>pnpm</code>、<code>yarn</code>（v1），最后是 <code>npm</code></p></li><li><p>使用 npm 客户端运行任何在 <code>&quot;bun-create&quot;: { &quot;preinstall&quot; }</code> 中定义的任务</p></li><li><p>运行 <code>\${npmClient} install</code>，除非传递了 <code>--no-install</code> 或 package.json 中没有依赖项</p></li><li><p>使用 npm 客户端运行在 <code>&quot;bun-create&quot;: { &quot;preinstall&quot; }</code> 中定义的任何任务</p></li><li><p>运行以下命令： <code>git init; git add -A .; git commit -am &quot;Initial Commit&quot;;</code></p><ul><li>将 <code>gitignore</code> 重命名为 <code>.gitignore</code>。NPM 会自动删除包中的 <code>.gitignore</code> 文件。</li><li>如果有依赖项，这将在单独的线程中并发运行，同时正在安装 <code>node_modules</code></li><li>使用可用的 libgit2 进行测试，性能在微型基准测试中表现出 3 倍的速度较慢。</li></ul></li></ol>`,50),e=[p];function t(c,r,E,y,i,d){return a(),n("div",null,e)}const h=s(l,[["render",t]]);export{u as __pageData,h as default};
