# Using act() in Jest Unit Tests with React-Dom

<span class="code">react-dom/test-utils</span> provides a helper, <span class="code">act()</span> to make sure all the tasks like rendering, user events, and data fetching (these are considered as units of interaction with a user interface) to be processed and applied to the DOM before making an assertion.

We use <span class="code">act()</span> when we are using jest with react-dom. If you are using React Testing Library, the <span class="code">render</span> function is already wrapped in <span class="code">act()</span>. So we don't need to use it.

Let's write a test to assert both async and window.open functions get called if the button component below is clicked. This is a good place to use <span class="code">act()</span>. 

<script src="https://gist.github.com/mydatahack/2a7980752b0c6e547e5706f7b80d85b9.js"></script>

Without using <span class="code">act()</span>, we cannot assert <span class="code">window.open</span> to be called because the assertion happens before the async function gets executed.

<script src="https://gist.github.com/mydatahack/8d40cc97f912dfc0cc60a606747e9a4a.js"></script>

#### REFERENCE ####

<span class="code">act()</span>

Suppose we have `handleClick()` as below. This will be trigged on a button component

```tsx
const MyButton = () => {
  const { someAsyncFunc } = someHook();

  const handleClick = () => {
    await someAsyncFunc();
    window.open(link, '_blank');
  }

  return (
    <button role="link" onClick={handleClick}>
      click me!
    </button>
  );
}
```

## Pattern 1

```ts
// mock async function first
const someAsyncFunc = jest.fn().mockResolvedValue({ success: true });
jest.spyOn(hooks, 'someHook').mockImplementation(() => ({ someAsyncFunc }));

...

await act(async() => {
  wrapper
    .findWhere((node) => node.text() === 'Elenberg Fraser')
    .find('button')
    .simulate('click');
});

// This one is not necessary unless we are asserting the change in UI
// wrapper.update();

expect(someAsyncFunc).toHaveBeenCalledTimes(1);
// Add window.open = jest.fn(); in setup.js file for jest global config
expect(window.open).toHaveBeenCalledTimes(1);
```
