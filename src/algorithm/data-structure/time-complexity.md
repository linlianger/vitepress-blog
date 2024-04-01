## 算法

1. 复杂度
2. 双指针
3. 滑动窗口
4. 二叉树

### 复杂度

时间复杂度 空间复杂度

更短时间 更少空间

O(n) 算法执行的所有时间 规模

O(1) // 常数 O(logN) O(N) O(NlogN) O(N^2)

### 时间复杂度

不是代码真正的执行时间 而是随着数据规模的增长所表达的趋势

```js
// O(1)例子
function a() {
    console.log('hello world')
    return 1
}

// O(N)例子
function b() {
    for (let i = 0; i < n; i++) {
        console.log(`${i}xxx`)
    }
}

// O(N^2)例子
function c() {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(`${i}${j}xxx`)
        }
    }
}

// O(logN)例子
function d() {
    let i = 1
    while (i <= n) {
        i = i * 2 // log2^n
    }
}
```

# 关于 cmd 配置

`pnpm install` 报错

> GET https://registry.npm.taobao.org/create-vite error (CERT_HAS_EXPIRED). Will retry in 10 seconds.

1. 取消 ssl 验证：

```powershell
npm config set strict-ssl false
```

2. 更换 npm 镜像源：

```powershell
npm config set registry http://registry.cnpmjs.org

npm config set registry http://registry.npm.taobao.org
```

3. 更换 DNS 地址：

`主地址`: 114.114.114.114

`副地址`: 8.8.8.8
