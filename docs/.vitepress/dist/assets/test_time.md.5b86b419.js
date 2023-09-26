import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.33544f09.js";const d=JSON.parse('{"title":"Dates and times","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"test/time.md","filePath":"test/time.md"}'),p={name:"test/time.md"},o=l(`<h1 id="dates-and-times" tabindex="-1">Dates and times <a class="header-anchor" href="#dates-and-times" aria-label="Permalink to &quot;Dates and times&quot;">​</a></h1><p><code>bun:test</code> 允许您在测试中更改时间。</p><p>这适用于以下任何内容：</p><ul><li><code>Date.now</code></li><li><code>new Date()</code></li><li><code>new Intl.DateTimeFormat().format()</code></li></ul><p>定时器目前尚未受到影响，但在将来的 Bun 发布中可能会受到影响。</p><h2 id="setsystemtime" tabindex="-1"><code>setSystemTime</code> <a class="header-anchor" href="#setsystemtime" aria-label="Permalink to &quot;\`setSystemTime\`&quot;">​</a></h2><p>要更改系统时间，请使用 <code>setSystemTime</code>：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { setSystemTime, beforeAll, test, expect } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;bun:test&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">beforeAll</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setSystemTime</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;2020-01-01T00:00:00.000Z&quot;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;现在是2020年&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getFullYear</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2020</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { setSystemTime, beforeAll, test, expect } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;bun:test&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">beforeAll</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setSystemTime</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;2020-01-01T00:00:00.000Z&quot;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;现在是2020年&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getFullYear</span><span style="color:#24292E;">()).</span><span style="color:#6F42C1;">toBe</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2020</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p>为了支持使用 Jest 的 <code>useFakeTimers</code> 和 <code>useRealTimers</code> 的现有测试，您可以使用 <code>useFakeTimers</code> 和 <code>useRealTimers</code>：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;就像在 Jest 中一样&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  jest.</span><span style="color:#B392F0;">useFakeTimers</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  jest.</span><span style="color:#B392F0;">setSystemTime</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;2020-01-01T00:00:00.000Z&quot;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getFullYear</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2020</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  jest.</span><span style="color:#B392F0;">useRealTimers</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getFullYear</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">toBeGreaterThan</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2020</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;与 Jest 不同&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">OriginalDate</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Date;</span></span>
<span class="line"><span style="color:#E1E4E8;">  jest.</span><span style="color:#B392F0;">useFakeTimers</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> Bun </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;undefined&quot;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 在 Jest 中，Date 构造函数会发生变化</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 这可能会导致各种各样的错误，因为突然之间 Date !== 在测试之前的 Date。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(Date).not.</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(OriginalDate);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(Date.now).not.</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(OriginalDate.now);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 在 bun:test 中，使用 useFakeTimers 时 Date 构造函数不会发生变化</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(Date).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(OriginalDate);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(Date.now).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(OriginalDate.now);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;就像在 Jest 中一样&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  jest.</span><span style="color:#6F42C1;">useFakeTimers</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  jest.</span><span style="color:#6F42C1;">setSystemTime</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;2020-01-01T00:00:00.000Z&quot;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getFullYear</span><span style="color:#24292E;">()).</span><span style="color:#6F42C1;">toBe</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2020</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  jest.</span><span style="color:#6F42C1;">useRealTimers</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getFullYear</span><span style="color:#24292E;">()).</span><span style="color:#6F42C1;">toBeGreaterThan</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2020</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;与 Jest 不同&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">OriginalDate</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Date;</span></span>
<span class="line"><span style="color:#24292E;">  jest.</span><span style="color:#6F42C1;">useFakeTimers</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> Bun </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;undefined&quot;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 在 Jest 中，Date 构造函数会发生变化</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 这可能会导致各种各样的错误，因为突然之间 Date !== 在测试之前的 Date。</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(Date).not.</span><span style="color:#6F42C1;">toBe</span><span style="color:#24292E;">(OriginalDate);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(Date.now).not.</span><span style="color:#6F42C1;">toBe</span><span style="color:#24292E;">(OriginalDate.now);</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 在 bun:test 中，使用 useFakeTimers 时 Date 构造函数不会发生变化</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(Date).</span><span style="color:#6F42C1;">toBe</span><span style="color:#24292E;">(OriginalDate);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(Date.now).</span><span style="color:#6F42C1;">toBe</span><span style="color:#24292E;">(OriginalDate.now);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><blockquote><p><strong>定时器</strong> — 请注意，我们尚未实现内置支持以模拟定时器，但这已经在路线图上了。</p></blockquote><h3 id="重置系统时间" tabindex="-1">重置系统时间 <a class="header-anchor" href="#重置系统时间" aria-label="Permalink to &quot;重置系统时间&quot;">​</a></h3><p>要重置系统时间，请在 <code>setSystemTime</code> 中不传递任何参数：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { setSystemTime, beforeAll } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;bun:test&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;那时是2020年，短暂的一刻。&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置它为某个值！</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setSystemTime</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;2020-01-01T00:00:00.000Z&quot;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getFullYear</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2020</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 重置它！</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setSystemTime</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getFullYear</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">toBeGreaterThan</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2020</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { setSystemTime, beforeAll } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;bun:test&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;那时是2020年，短暂的一刻。&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置它为某个值！</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setSystemTime</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;2020-01-01T00:00:00.000Z&quot;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getFullYear</span><span style="color:#24292E;">()).</span><span style="color:#6F42C1;">toBe</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2020</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 重置它！</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setSystemTime</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getFullYear</span><span style="color:#24292E;">()).</span><span style="color:#6F42C1;">toBeGreaterThan</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2020</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h2 id="设置时区" tabindex="-1">设置时区 <a class="header-anchor" href="#设置时区" aria-label="Permalink to &quot;设置时区&quot;">​</a></h2><p>要更改时区，可以要么将 <code>$TZ</code> 环境变量传递给 <code>bun test</code>。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">TZ</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">America/Los_Angeles</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">TZ</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">America/Los_Angeles</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span></span></code></pre></div><p>要么在运行时设置 <code>p<wbr>rocess.env.TZ</code>：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { test, expect } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;bun:test&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;欢迎来到加利福尼亚！&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  p<wbr>rocess.env.</span><span style="color:#79B8FF;">TZ</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;America/Los_Angeles&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getTimezoneOffset</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">420</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Intl.</span><span style="color:#B392F0;">DateTimeFormat</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">resolvedOptions</span><span style="color:#E1E4E8;">().timeZone).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;America/Los_Angeles&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;欢迎来到纽约！&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 与 Jest 不同，您可以在运行时多次设置时区，它将正常工作。</span></span>
<span class="line"><span style="color:#E1E4E8;">  p<wbr>rocess.env.</span><span style="color:#79B8FF;">TZ</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;America/New_York&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getTimezoneOffset</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">240</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Intl.</span><span style="color:#B392F0;">DateTimeFormat</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">resolvedOptions</span><span style="color:#E1E4E8;">().timeZone).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;America/New_York&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { test, expect } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;bun:test&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;欢迎来到加利福尼亚！&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  p<wbr>rocess.env.</span><span style="color:#005CC5;">TZ</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;America/Los_Angeles&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getTimezoneOffset</span><span style="color:#24292E;">()).</span><span style="color:#6F42C1;">toBe</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">420</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Intl.</span><span style="color:#6F42C1;">DateTimeFormat</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">resolvedOptions</span><span style="color:#24292E;">().timeZone).</span><span style="color:#6F42C1;">toBe</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;America/Los_Angeles&quot;</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;欢迎来到纽约！&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 与 Jest 不同，您可以在运行时多次设置时区，它将正常工作。</span></span>
<span class="line"><span style="color:#24292E;">  p<wbr>rocess.env.</span><span style="color:#005CC5;">TZ</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;America/New_York&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getTimezoneOffset</span><span style="color:#24292E;">()).</span><span style="color:#6F42C1;">toBe</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">240</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Intl.</span><span style="color:#6F42C1;">DateTimeFormat</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">resolvedOptions</span><span style="color:#24292E;">().timeZone).</span><span style="color:#6F42C1;">toBe</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;America/New_York&quot;</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,19),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const B=s(p,[["render",t]]);export{d as __pageData,B as default};
