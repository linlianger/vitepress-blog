## useState 注意事项

> state

-   state 实际就是一个被 React 管理的变量
    当我们通过 setState()修改变量的值时,会触发组件的自动重新渲染
-   只有 satte 值发生变化时,组件才会重新渲染
-   当 state 值是一个对象时,修改时是使用新的对象去替换已有对象
-   当通过 setState 修改一个 state 时,并不表示修改当前的 state
    它修改的是组件下一次渲染时的 state 值
-   setState 是异步的, 可以通过传递回调函数的形式来修改 state

```js
const [counter, setCounter] = useState(1)

const addHandle = () => {
    // 回调函数执行时,React会将最新的state值作为参数传递
    setCounter(value => value + 1)
}
```
