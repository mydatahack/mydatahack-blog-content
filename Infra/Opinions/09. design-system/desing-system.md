# Tips for building a frontend component

Keyword: Design first approach

## ...this one is on going...

1. Don't add mergin and padding to the component.

2. Avoid to include hard-coded values.

Try not to include hard-coded values like a text string. It should be passed as a prop. Otherwise, the component becomes less flexible.

3. Let the component use all the native html attributes by inheriting HTMLElement.

We should let components to include any native html attributes. Otherwise, they become too rigid and you might find it hard to make the component accessible.
