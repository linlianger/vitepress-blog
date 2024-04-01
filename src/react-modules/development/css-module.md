## CSS Modules 使用

-   创建 xxx.module.scss
-   import classes from 'xxx.module.scss'
-   在 Vite 项目中，CSS Modules 是默认启用的，所以你无需额外的配置

```js
const [isChangeColor, setIsChangeColor] = useState(false)
const changedColor = () => {
    setIsChangeColor(value => !value)
}
```

```js
<div className={classes.scss_demo}>
    <div className={classes.title}>scss测试</div>
    <div className={`${classes.describe} ${isChangeColor ? classes.changed : classes.default}`}>我是样式描述</div>
    <button onClick={changedColor}>修改样式</button>
</div>
```

#### 如果在 ts 中报错了 找不到模块“./index.module.scss”或其相应的类型声明

-   在根目录和 src 平级目录新建 typings.d.ts 文件

```ts
//typings.d.ts
declare module '*.module.scss' {
    const classes: { [key: string]: string }
    export default classes
}
```

-   在 tsconfig.json 中的 include 中添加该文件

```ts
"include": ["src","./typings.d.ts"],
```
