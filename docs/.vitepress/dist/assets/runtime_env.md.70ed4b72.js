import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.33544f09.js";const h=JSON.parse('{"title":"Environment variables","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"runtime/env.md","filePath":"runtime/env.md"}'),o={name:"runtime/env.md"},l=e(`<h1 id="environment-variables" tabindex="-1">Environment variables <a class="header-anchor" href="#environment-variables" aria-label="Permalink to &quot;Environment variables&quot;">​</a></h1><p>Bun 会自动读取您的<code>.env</code>文件，并提供以编程方式读取和写入环境变量的惯用方法。此外，Bun 特定的环境变量还可以配置 Bun 的运行时行为的某些方面。</p><h2 id="设置环境变量" tabindex="-1">设置环境变量 <a class="header-anchor" href="#设置环境变量" aria-label="Permalink to &quot;设置环境变量&quot;">​</a></h2><p>Bun 会自动读取以下文件（按优先级递增的顺序列出）。</p><ul><li><code>.env</code></li><li><code>.env.production</code>、<code>.env.development</code>、<code>.env.test</code>（根据<code>NODE_ENV</code>的值而定）</li><li><code>.env.local</code></li></ul><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#.env</span></span>
<span class="line"><span style="color:#e1e4e8;">FOO=hello</span></span>
<span class="line"><span style="color:#e1e4e8;">BAR=world</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#.env</span></span>
<span class="line"><span style="color:#24292e;">FOO=hello</span></span>
<span class="line"><span style="color:#24292e;">BAR=world</span></span></code></pre></div><p>变量还可以通过命令行进行设置。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">FOO=helloworld</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">FOO=helloworld</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span></span></code></pre></div><p>或者通过将属性分配给<code>p<wbr>rocess.env</code>来以编程方式设置。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">p<wbr>rocess.env.</span><span style="color:#79B8FF;">FOO</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;hello&quot;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">p<wbr>rocess.env.</span><span style="color:#005CC5;">FOO</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;hello&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div><h3 id="dotenv" tabindex="-1"><code>dotenv</code> <a class="header-anchor" href="#dotenv" aria-label="Permalink to &quot;\`dotenv\`&quot;">​</a></h3><p>一般来说，您将不再需要使用<code>dotenv</code>，因为 Bun 会自动读取<code>.env</code>文件。</p><h2 id="读取环境变量" tabindex="-1">读取环境变量 <a class="header-anchor" href="#读取环境变量" aria-label="Permalink to &quot;读取环境变量&quot;">​</a></h2><p>当前环境变量可以通过<code>p<wbr>rocess.env</code>访问。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">p<wbr>rocess.env.</span><span style="color:#79B8FF;">API_TOKEN</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// =&gt; &quot;secret&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">p<wbr>rocess.env.</span><span style="color:#005CC5;">API_TOKEN</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// =&gt; &quot;secret&quot;</span></span></code></pre></div><p>Bun 还通过<code>Bun.env</code>公开这些变量，这是<code>p<wbr>rocess.env</code>的简单别名。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Bun.env.</span><span style="color:#79B8FF;">API_TOKEN</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// =&gt; &quot;secret&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Bun.env.</span><span style="color:#005CC5;">API_TOKEN</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// =&gt; &quot;secret&quot;</span></span></code></pre></div><p>要将当前设置的所有环境变量打印到命令行，请运行<code>bun run env</code>。这对于调试很有用。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">env</span></span>
<span class="line"><span style="color:#E1E4E8;">BAZ</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">stuff</span></span>
<span class="line"><span style="color:#E1E4E8;">FOOBAR</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">aaaaaa</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">lots more lines</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">env</span></span>
<span class="line"><span style="color:#24292E;">BAZ</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">stuff</span></span>
<span class="line"><span style="color:#24292E;">FOOBAR</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">aaaaaa</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">lots more lines</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="typescript" tabindex="-1">TypeScript <a class="header-anchor" href="#typescript" aria-label="Permalink to &quot;TypeScript&quot;">​</a></h2><p>在 TypeScript 中，<code>p<wbr>rocess.env</code>的所有属性都被类型化为<code>string | undefined</code>。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Bun.env.whatever;</span></span>
<span class="line"><span style="color:#6A737D;">// string | undefined</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Bun.env.whatever;</span></span>
<span class="line"><span style="color:#6A737D;">// string | undefined</span></span></code></pre></div><p>要获得自动完成并告诉 TypeScript 将变量视为非可选字符串，我们将使用<a href="https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces" target="_blank" rel="noreferrer">接口合并</a>。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">module</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;bun&quot;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Env</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">AWESOME</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">module</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;bun&quot;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Env</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">AWESOME</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>将此行添加到项目中的任何文件中。它将全局添加<code>p<wbr>rocess.env</code>和<code>Bun.env</code>的<code>AWESOME</code>属性。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">p<wbr>rocess.env.</span><span style="color:#79B8FF;">AWESOME</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// =&gt; string</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">p<wbr>rocess.env.</span><span style="color:#005CC5;">AWESOME</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// =&gt; string</span></span></code></pre></div><h2 id="配置-bun" tabindex="-1">配置 Bun <a class="header-anchor" href="#配置-bun" aria-label="Permalink to &quot;配置 Bun&quot;">​</a></h2><p>这些环境变量由 Bun 读取，并配置其行为的各个方面。</p><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td><code>TMPDIR</code></td><td>Bun 在打包或其他操作期间偶尔需要一个目录来存储中间资源。如果未设置，默认为特定于平台的临时目录：Linux 上为 <code>/tmp</code>，macOS 上为 <code>/private/tmp</code>。</td></tr><tr><td><code>NO_COLOR</code></td><td>如果 <code>NO_COLOR=1</code>，则 <a href="https://no-color.org/" target="_blank" rel="noreferrer">禁用</a> ANSI 颜色输出。</td></tr><tr><td><code>FORCE_COLOR</code></td><td>如果 <code>FORCE_COLOR=1</code>，则即使设置了 <code>NO_COLOR</code>，也会强制启用 ANSI 颜色输出。</td></tr><tr><td><code>DO_NOT_TRACK</code></td><td>如果 <code>DO_NOT_TRACK=1</code>，则 <a href="https://do-not-track.dev/" target="_blank" rel="noreferrer">禁用</a> 分析。Bun 记录捆绑时间（以便我们可以用数据回答问题，&quot;Bun 是否越来越快？&quot;）和功能使用情况（例如，&quot;人们是否真正使用宏？&quot;）。请求主体大小约为 60 字节，因此数据量不大。相当于 <code>bunfig</code> 中的 <code>telemetry=false</code>。</td></tr></tbody></table>`,29),p=[l];function t(c,r,d,i,E,y){return a(),n("div",null,p)}const v=s(o,[["render",t]]);export{h as __pageData,v as default};
