# JavaScript Reference

## (1) Using array.length to evaluate falsy with && and ternary operator

&& is a logical and operator and evaluate the first one and if the first condition is true, moves onto the next one.

this returns 0

```js
array.length && console.log('hello')
```

In this case we need to use

```js
array.length > 0 && console.log('hello')
```

This is not an issue with ternary operator

```js
array.length ? console.log('true'): console.log('false')
```
