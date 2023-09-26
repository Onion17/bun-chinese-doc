import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.33544f09.js";const l="/buntest.jpeg",F=JSON.parse('{"title":"bun test","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"cli/test.md","filePath":"cli/test.md"}'),o={name:"cli/test.md"},e=p(`<h1 id="bun-test" tabindex="-1"><code>bun test</code> <a class="header-anchor" href="#bun-test" aria-label="Permalink to &quot;\`bun test\`&quot;">​</a></h1><p>Bun 附带了一个快速的、内置的、与 Jest 兼容的测试运行器。测试使用 Bun 运行时执行，并支持以下功能：</p><ul><li>TypeScript 和 JSX</li><li>生命周期钩子</li><li>快照测试</li><li>UI 和 DOM 测试</li><li>使用<code>--watch</code>进行观察模式</li><li>使用<code>--preload</code>进行脚本预加载</li></ul><blockquote><p>Bun 旨在与 Jest 兼容，但并非所有功能都已实现。要跟踪兼容性，请参阅<a href="https://github.com/oven-sh/bun/issues/1825" target="_blank" rel="noreferrer">此跟踪问题</a>。</p></blockquote><h2 id="运行测试" tabindex="-1">运行测试 <a class="header-anchor" href="#运行测试" aria-label="Permalink to &quot;运行测试&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span></span></code></pre></div><p>测试以 JavaScript 或 TypeScript 编写，具有类似于 Jest 的 API。有关完整文档，请参阅<a href="/test/writing.html">编写测试</a>。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">#math.test.ts</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { expect, test } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;bun:test&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;2 + 2&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">#math.test.ts</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { expect, test } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;bun:test&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;2 + 2&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">toBe</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p>运行器递归搜索工作目录以查找与以下模式匹配的文件：</p><ul><li><code>*.test.{js|jsx|ts|tsx}</code></li><li><code>*_test.{js|jsx|ts|tsx}</code></li><li><code>*.spec.{js|jsx|ts|tsx}</code></li><li><code>*_spec.{js|jsx|ts|tsx}</code></li></ul><p>您可以通过向<code>bun test</code>传递额外的位置参数来筛选要运行的测试文件集。通常，这些筛选器将是文件或目录名称；尚不支持通配符模式。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">filte</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">filte</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">filte</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">filte</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">...</span></span></code></pre></div><p>要按测试名称筛选，请使用<code>-t</code>/<code>--test-name-pattern</code>标志。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 运行所有名称中包含“addition”的测试或测试套件</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--test-name-pattern</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">addition</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 运行所有名称中包含“addition”的测试或测试套件</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--test-name-pattern</span><span style="color:#24292E;"> </span><span style="color:#032F62;">addition</span></span></code></pre></div><p>测试运行器在单个进程中运行所有测试。它加载所有<code>--preload</code>脚本（有关详细信息，请参阅<a href="/test/lifecycle.html">生命周期</a>），然后运行所有测试。如果测试失败，测试运行器将以非零退出代码退出。</p><h2 id="超时" tabindex="-1">超时 <a class="header-anchor" href="#超时" aria-label="Permalink to &quot;超时&quot;">​</a></h2><p>使用<code>--timeout</code>标志指定以毫秒为单位的每个测试的超时时间。如果测试超时，它将被标记为失败。默认值为<code>5000</code>。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 默认值为5000</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--timeout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">20</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 默认值为5000</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--timeout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20</span></span></code></pre></div><h2 id="使用-rerun-each重新运行测试" tabindex="-1">使用<code>--rerun-each</code>重新运行测试 <a class="header-anchor" href="#使用-rerun-each重新运行测试" aria-label="Permalink to &quot;使用\`--rerun-each\`重新运行测试&quot;">​</a></h2><p>使用<code>--rerun-each</code>标志多次运行每个测试。这对于检测不稳定或非确定性的测试失败非常有用。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--rerun-each</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--rerun-each</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span></span></code></pre></div><h2 id="使用-bail退出" tabindex="-1">使用<code>--bail</code>退出 <a class="header-anchor" href="#使用-bail退出" aria-label="Permalink to &quot;使用\`--bail\`退出&quot;">​</a></h2><p>使用<code>--bail</code>标志可以在预定的测试失败次数后提前中止测试运行。默认情况下，Bun 会运行所有测试并报告所有失败，但在 CI 环境中，有时更希望更早地终止以减少 CPU 使用率。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 在1次失败后中止</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--bail</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 在10次失败后中止</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--bail</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 在1次失败后中止</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--bail</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 在10次失败后中止</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--bail</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span></span></code></pre></div><h2 id="观察模式" tabindex="-1">观察模式 <a class="header-anchor" href="#观察模式" aria-label="Permalink to &quot;观察模式&quot;">​</a></h2><p>与<code>bun run</code>类似，您可以在<code>bun test</code>中传递<code>--watch</code>标志以监视更改并重新运行测试。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--watch</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--watch</span></span></code></pre></div><h2 id="生命周期钩子" tabindex="-1">生命周期钩子 <a class="header-anchor" href="#生命周期钩子" aria-label="Permalink to &quot;生命周期钩子&quot;">​</a></h2><p>Bun 支持以下生命周期钩子：</p><table><thead><tr><th>钩子</th><th>描述</th></tr></thead><tbody><tr><td><code>beforeAll</code></td><td>在所有测试之前运行一次。</td></tr><tr><td><code>beforeEach</code></td><td>在每个测试之前运行。</td></tr><tr><td><code>afterEach</code></td><td>在每个测试之后运行。</td></tr><tr><td><code>afterAll</code></td><td>在所有测试之后运行一次。</td></tr></tbody></table><p>这些钩子可以在测试文件中定义，也可以在使用<code>--preload</code>标志预加载的单独文件中定义。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$ bun test </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">preload .</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">setup.ts</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$ bun test </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">preload .</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">setup.ts</span></span></code></pre></div><p>有关完整文档，请参阅<a href="/test/lifecycle.html">Test &gt; 生命周期</a>。</p><h2 id="模拟" tabindex="-1">模拟 <a class="header-anchor" href="#模拟" aria-label="Permalink to &quot;模拟&quot;">​</a></h2><blockquote><p>尚不支持模块模拟（<code>jest.mock()</code>）。跟踪其支持情况<a href="https://github.com/oven-sh/bun/issues/5394" target="_blank" rel="noreferrer">在这里</a>。</p></blockquote><p>使用<code>mock</code>函数创建模拟函数。模拟函数在测试之间自动重置。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { test, expect, mock } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;bun:test&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">random</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mock</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;random&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">val</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(val).</span><span style="color:#B392F0;">toBeGreaterThan</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(random).</span><span style="color:#B392F0;">toHaveBeenCalled</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(random).</span><span style="color:#B392F0;">toHaveBeenCalledTimes</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { test, expect, mock } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;bun:test&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">random</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mock</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">random</span><span style="color:#24292E;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;random&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">val</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">random</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(val).</span><span style="color:#6F42C1;">toBeGreaterThan</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(random).</span><span style="color:#6F42C1;">toHaveBeenCalled</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(random).</span><span style="color:#6F42C1;">toHaveBeenCalledTimes</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p>或者，您可以使用<code>jest.fn()</code>，它的行为完全相同。</p><div class="language-ts-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts-diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">- import { test, expect, mock } from &quot;bun:test&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">+ import { test, expect, jest } from &quot;bun:test&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- const random = mock(() =&gt; Math.random());</span></span>
<span class="line"><span style="color:#e1e4e8;">+ const random = jest.fn(() =&gt; Math.random());</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">- import { test, expect, mock } from &quot;bun:test&quot;;</span></span>
<span class="line"><span style="color:#24292e;">+ import { test, expect, jest } from &quot;bun:test&quot;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- const random = mock(() =&gt; Math.random());</span></span>
<span class="line"><span style="color:#24292e;">+ const random = jest.fn(() =&gt; Math.random());</span></span></code></pre></div><p>有关完整文档，请参阅<a href="/test/mocks.html">Test &gt; 模拟</a>。</p><h2 id="快照测试" tabindex="-1">快照测试 <a class="header-anchor" href="#快照测试" aria-label="Permalink to &quot;快照测试&quot;">​</a></h2><p><code>bun test</code>支持快照。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 使用toMatchSnapshot的示例用法</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { test, expect } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;bun:test&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;snapshot&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">({ a: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }).</span><span style="color:#B392F0;">toMatchSnapshot</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 使用toMatchSnapshot的示例用法</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { test, expect } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;bun:test&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;snapshot&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">({ a: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> }).</span><span style="color:#6F42C1;">toMatchSnapshot</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p>要更新快照，请使用<code>--update-snapshots</code>标志</p><p>。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--update-snapshots</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--update-snapshots</span></span></code></pre></div><p>有关完整文档，请参阅<a href="/test/snapshots.html">Test &gt; 快照</a>。</p><h2 id="ui-和-dom-测试" tabindex="-1">UI 和 DOM 测试 <a class="header-anchor" href="#ui-和-dom-测试" aria-label="Permalink to &quot;UI 和 DOM 测试&quot;">​</a></h2><p>Bun 与流行的 UI 测试库兼容：</p><ul><li><a href="https://github.com/capricorn86/happy-dom" target="_blank" rel="noreferrer">HappyDOM</a></li><li><a href="https://testing-library.com/docs/dom-testing-library/intro/" target="_blank" rel="noreferrer">DOM Testing Library</a></li><li><a href="https://testing-library.com/docs/react-testing-library/intro" target="_blank" rel="noreferrer">React Testing Library</a></li></ul><p>有关完整文档，请参阅<a href="/test/dom.html">Test &gt; DOM 测试</a>。</p><h2 id="性能" tabindex="-1">性能 <a class="header-anchor" href="#性能" aria-label="Permalink to &quot;性能&quot;">​</a></h2><p>Bun 的测试运行器非常快。</p><p><img src="`+l+'" alt="Running 266 React SSR tests faster than Jest can print its version number."></p>',54),t=[e];function c(r,y,E,i,d,h){return a(),n("div",null,t)}const b=s(o,[["render",c]]);export{F as __pageData,b as default};
