# Idea

# Using webpack alias

Update webpack.config.js

https://github.com/estimateone/frontend-components/pull/142/files

```js
alias: {
  '~entrypoint': path.resolve('./index.ts'),
  '~components': path.resolve('src/components/'),
  '~enums': path.resolve('src/enums/'),
  '~types': path.resolve('src/types/'),
  '~utils': path.resolve('src/utils/'),
}
```

maybe need to update tsconfig?

```
"esModuleInterop": true,
        "baseUrl": ".",
        "paths": {
            "~entrypoint": ["./index.ts"],
            "~components": ["./src/components/index.ts"],
            "~enums": ["./src/enums/index.ts"],
            "~types": ["./src/types/index.ts"],
            "~utils": ["./src/utils/index.ts"]
        }
    }
}
```
