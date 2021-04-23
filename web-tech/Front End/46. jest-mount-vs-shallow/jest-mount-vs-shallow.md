# What You May Not Know About Jest's Mount Method

If you are a React developer, you probably know the difference between mount and shallow when you are unit testing react components with jest. Mount renders full DOM. We use it when the component interacts with DOM Api or require a full lifecycle to fully test the component. On the other hand, shallow renders only the component you are testing to avoid asserting on the behaviours of child components indirectly. Ok, these are pretty well know facts.

Ok, so if you have a component without a child, do you think both shallow and mount render html the same? The answer is no. They actually render differently. In short, mount renders html wrapped with the component tag while shallow just renders as you expect. 

We have a simple component like this.

<script src="https://gist.github.com/mydatahack/0ae72a19c61ddfe71126a20f3c772e85.js"></script>

```ts
import React from 'react';

const Wrapper: React.FC = ({children})
  => <div className='wrapper'>{children}</div>
export default Wrapper;
```

When we use mount, the div will be rendered as below. This can be console-logged by using .debug().

<script src="https://gist.github.com/mydatahack/c23ec9919e1cf4289be9c126f545e10f.js"></script>

```html
<Wrapper>
  <div className="wrapper">
    Children here
  </div>
</Wrapper>
```

On the other hand, shallow will render the component as below.

<script src="https://gist.github.com/mydatahack/3f80d5c3562b15e0295f99bccaab18b5.js"></script>

```html
<div className="wrapper">
  Children here
</div>
```

When you assert with mount, you cannot assert without finding the div first. Of course, the correct thing to do here is to use shallow. Mount is not the right method to use for a simple component like this.

<script src="https://gist.github.com/mydatahack/667158d2f2e3178bbfe24b78a7e201ff.js"></script>

```typescript
import React from 'react';
import { mount, shallow } from 'enzyme';
import Wrapper from '.';

describe('<Wrapper />', () => {
  test('renders with correct className with mount', () => {
    const wrapper = mount(<Wrapper>Children here</Wrapper>);
    console.log(wrapper.debug());
    expect(wrapper.find('div').hasClass('wrapper')).toBeTruthy();
  });

  test('renders with correct className with shallow', () => {
    const wrapper = shallow(<Wrapper>Children here</Wrapper>);
    console.log(wrapper.debug());
    expect(wrapper.hasClass('wrapper')).toBeTruthy();
  });
});
```

There you go. Another minor detail about jest...
