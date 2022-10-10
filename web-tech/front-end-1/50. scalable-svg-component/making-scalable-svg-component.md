# How to Make Scalable SVG React Components

SVG stands for Scalable Vector Graphic. The svg image can scale up and down according the size of the outer container as long as the image width is set to 100%. Let's explore how we can make a React illustration component that supports multiple size by scaling up and down.

Firstly, we create an illustration container component that is used for all the svg illustration components. This wrapper component has three sizes, small, medium, large according to the design spec.

<script src="https://gist.github.com/mydatahack/c70016569cc056137449d4d2e32efe66.js"></script>

styles.scss defines the size variation.

<script src="https://gist.github.com/mydatahack/873204e4e7d901ebecc16ece637d3fac.js"></script>

By using this wrapper, we can add any svg that scales according to the design size spec in the container component.

<script src="https://gist.github.com/mydatahack/4a08b1cd385f92e403e8f4b310d2b4a2.js"></script>

To make svg scalable, the key is to set width 100% with a block display. Then, the image will scale according to the outer container.

<script src="https://gist.github.com/mydatahack/d9cc26e49b93f8a7ff16d6c44160b520.js"></script>





#### REFERENCE ####

- IllustrationContainer.jsx

```tsx
import React from 'react';
import styles from './styles.scss';

export enum IllustrationSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export type IllustrationContainerProps = {
  size?: IllustrationSize;
};

export const IllustrationContainer: React.FC<IllustrationContainerProps> = ({
  children,
  size = IllustrationSize.Small,
}) => <div className={styles[size]}>{children}</div>;

```

- IllustrationContainer.scss

```scss
.small {
  width: 57px;
  height: 57px;
}

.medium {
  width: 114px;
  height: 114px;
}

.large {
  width: 177px;
  height: 177px;
}
```

- MyIllustration.jsx

```tsx
import React, { SVGAttributes } from 'react';
import { IllustrationContainer, IllustrationContainerProps } from '../IllustrationContainer';
import styles from './styles.scss';

export type MyllustrationProps = SVGAttributes<SVGElement> &
  Omit<IllustrationContainerProps, 'children'> & {
    title?: string;
    desc?: string;
  };

export const MyIllustration: React.VFC<MyllustrationProps> = ({
  title,
  desc,
  className,
  ...props
}) => (
  <IllustrationContainer {...props}>
    <svg
      className={styles.scalableSvg}
      role="img"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="61"
      height="61"
      viewBox="0 0 61 61"
    >
      {title && <title>{title}</title>}
      {desc && <desc>{desc}</desc>}
      <path
        ... />

    </svg>
  </IllustrationContainer>
);

RocketIllustration.displayName = 'RocketIllustration';
```

```scss
.scalableSvg {
  width: 100%;
  height: auto;
  display: block;
}
```
