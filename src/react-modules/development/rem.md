## 适配移动端视口

```js
// main.jsx

// 设置移动端的适配
// 除多少 是口的宽度就是多少rem,现在设置的视口总宽度为750rem
document.documentElement.style.fontSize = 100 / 750 + 'vw'
```

-   使用

```css
.wrap {
    width: 750rem;
    height: 100rem;
    background-color: red;
}
```
