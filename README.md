TypeScript React Clear Selected Option Demo
===========================================

之前发现一个问题：一个select中的某个option选中以后，再切换options，结果发现有还是有一个option被选中。

原因是：之前使用的是`<select value={???}`，应该使用`<select defaultValue={???}`

```
npm install
npm run demo
```
