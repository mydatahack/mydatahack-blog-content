# How to Avoid Async Try-Catch Hell

This post is based on this excellent short <a href="https://www.youtube.com/watch?v=ITogH7lJTyE" target="_blank">youtube video.</a>.

Let's see async try-catch hell. If we do try-catch on every single async function, it creates a tower of terror. Welcome to try-catch hell.

<pre>
async function towerOfTerror() {
  let a;
  let b;
  let c;

  try {
    a = await step1();
  } catch (e) {
    handle(e);
  }

  try {
    b = await step2();
  } catch (e) {
    handle(e);
  }

  try {
    c = await step3();
  } catch (e) {
    handle(e);
  }
}
</pre>

There are two ways we can avoid this.

First of all, we can just catch the error by chaining it.

<pre>
async function useCatch() {
  const a = await step1().catch(e => handle(e));
  const b = await step1().catch(e => handle(e));
  const c = await step1().catch(e => handle(e));

  return a + b + c;
}
</pre>

Alternatively, in the async function we use, we can return an array of data and error.

<pre>
async function handleTryCatch() {
  try {
    const data = await promise;
    return [data, null];
  } catch (e) {
    console.error(e);
    return [null, e];
  }
}

async function handleTryCatch2() {
  try {
    const data = await promise;
    return [data, null];
  } catch (e) {
    console.error(e);
    return [null, e];
  }
}

async function main() {
  const [data, error] = await handleTryCatch();

  if (error) {
    // can do action here.
  }

  const [data2, error2] = await handleTryCatch2();
  const [data3, error3] = await handleTryCatch3();
}
</pre>

Amazing!

# Note

This is the note from [this video](https://www.youtube.com/watch?v=ITogH7lJTyE).

## Pyramid of Doom

```js
function doom() {
  step1((a) => {
    step2((b) => {
      step3((c) => {
        ...
      })
    })
  })
}
```

# Tower of terror

```js
async function towerOfTerror() {
  let a;
  let b;
  let c;

  try {
    a = await step1();
  } catch (e) {
    handle(e);
  }

  try {
    b = await step2();
  } catch (e) {
    handle(e);
  }

  try {
    c = await step3();
  } catch (e) {
    handle(e);
  }
}
```

## Solution 1 - Just catch it

```js
async function useCatch() {
  const a = await step1().catch(e => handle(e));
  const b = await step1().catch(e => handle(e));
  const c = await step1().catch(e => handle(e));

  return a + b + c;
}
```

# Solution 2 - Create a custom function and handle it

In the async function we use, we can return an array of data and error.

```js
async function handleTryCatch() {
  try {
    const data = await promise;
    return [data, null];
  } catch (e) {
    console.error(e);
    return [null, e];
  }
}

async function handleTryCatch2() {
  try {
    const data = await promise;
    return [data, null];
  } catch (e) {
    console.error(e);
    return [null, e];
  }
}
```

Then we can just use them as below:

```js
async function main() {
  const [data, error] = await handleTryCatch();

  if (error) {
    // can do action here.
  }

  const [data2, error2] = await handleTryCatch2();
  const [data3, error3] = await handleTryCatch3();
}

```
