# (1) Design System

## 1. Design System approach Airbnb

React conf 2019 - Building (And Re-building) the Airbnb Desing System: https://conf.reactjs.org/event.html?majapw

The video talks about the base approach for design system. For example, it uses the base component called button and any style variation will be a new component that extends the base component.

- Airbun
  - using react-with-style lib (https://github.com/airbnb/react-with-styles)

Trade offs with this approach

- Performance remains consistently strong because each component does not carry extra code
- Complexity remains consistently low
- End up with more files which become a burden to the user of the system

Example

* BaseButton.jsx

```jsx

const BaseButton = {{ .., styles }} =>  (
  <button
    {...css(styles.button)}
    onClick={onClick}
    ...
  >
    {children}
  </button>
)

export default extendable (BaseButton,
  () => ({
    button: {
      background: 'grey',
      color: 'white',
    }
  })
)

// can be used as this
<BaseButton
  onClick = {() => { ... }}
  onHover = {() => { ... }}
  onFocus = {() => { ... }}
  renderLeading = {() => { ... }}
  renderTrailing = {() => { ... }}
  >
    Hello
  </BaseButton>
```

* PrimaryButton.jsx

It will isolate the design and encapsulate it in a single file.

```jsx
export default extend (BaseButton,
  () => ({
    button: {
      background: '#222222',
      color: '#ffffff'
    }
  })
)
```

* Usage

Import button with each variation. Each variation is an independent component
```jsx
import Button from './PrimaryButton';
```


# Design System Examples

Uber open sourced its design system Base Web (https://baseweb.design/)

