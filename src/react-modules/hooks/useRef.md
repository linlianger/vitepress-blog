## useRef 注意事项

> 直接从 React 获取 DOM 对象

-   创建一个存储 DOM 对象的容器
    使用 useRef()钩子函数 1. React 中钩子函数只能用于函数组件或自定义钩子 2. 钩子函数只能直接在函数组件中调用
-   将容器设置为想要获取 DOM 对象元素的 ref 属性

```js
const h1Ref = useRef()

<div ref={ h1Ref }>
    <span>{ counter }</span>
    <button onClick={ addHandle }>增加</button>
</div>
```
