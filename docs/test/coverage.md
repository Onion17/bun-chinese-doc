---
outline: "deep"
---

# Code coverage

Bun 的测试运行器现在支持内置的代码覆盖率报告功能。这使得很容易查看代码库有多少被测试覆盖了，以及找到当前没有得到很好测试的地方。

## 启用覆盖率

`bun:test`支持查看哪些代码行被测试覆盖。要使用此功能，将`--coverage`传递给 CLI。它将在控制台上打印出覆盖率报告：

```js
$ bun test --coverage
-------------|---------|---------|-------------------
File         | % Funcs | % Lines | Uncovered Line #s
-------------|---------|---------|-------------------
All files    |   38.89 |   42.11 |
 index-0.ts  |   33.33 |   36.84 | 10-15,19-24
 index-1.ts  |   33.33 |   36.84 | 10-15,19-24
 index-10.ts |   33.33 |   36.84 | 10-15,19-24
 index-2.ts  |   33.33 |   36.84 | 10-15,19-24
 index-3.ts  |   33.33 |   36.84 | 10-15,19-24
 index-4.ts  |   33.33 |   36.84 | 10-15,19-24
 index-5.ts  |   33.33 |   36.84 | 10-15,19-24
 index-6.ts  |   33.33 |   36.84 | 10-15,19-24
 index-7.ts  |   33.33 |   36.84 | 10-15,19-24
 index-8.ts  |   33.33 |   36.84 | 10-15,19-24
 index-9.ts  |   33.33 |   36.84 | 10-15,19-24
 index.ts    |  100.00 |  100.00 |
-------------|---------|---------|-------------------
```

要始终默认启用覆盖率报告，请将以下行添加到您的`bunfig.toml`：

```toml
[test]

# 总是启用覆盖率
coverage = true
```

默认情况下，覆盖率报告将包括测试文件，并排除源映射。这通常是您想要的，但可以在`bunfig.toml`中进行其他配置。

```toml
[test]
coverageSkipTestFiles = true       # 默认为false
```

### 覆盖率阈值

可以在`bunfig.toml`中指定覆盖率阈值。如果您的测试套件未达到或未达到此阈值，`bun test`将以非零退出代码退出，以指示失败。

```toml
[test]

# 要求90%的行级和函数级覆盖率
coverageThreshold = 0.9

# 为行和函数设置不同的阈值
coverageThreshold = { line = 0.9, function = 0.9 }
```

### 源映射

在内部，默认情况下，Bun 会转译所有文件，因此 Bun 会自动生成将原始源代码的行映射到 Bun 的内部表示的内部[源映射](https://web.dev/source-maps/)。如果出于任何原因要禁用此功能，请将`test.coverageIgnoreSourcemaps`设置为`false`；这在高级用例之外很少需要。

```toml
[test]
coverageIgnoreSourcemaps = true   # 默认为false
```
