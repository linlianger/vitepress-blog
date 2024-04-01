## Fragment 使用

-   Fragment 是一个专门用来作为父容器的组件, 它只会将里边的子元素直接返回,不会创建任何多余的元素

```js
import { Fragment } from 'react'
```

```js
...
return (
    <Fragment>
        <div>fragment</div>
    </Fragment>
)
// <> </> 是react的语法糖, 同Fragment
// 如果配合key, 必须使用Fragment
```
