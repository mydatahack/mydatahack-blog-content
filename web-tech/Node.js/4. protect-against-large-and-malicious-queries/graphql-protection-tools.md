# Node.js Libraries for Protecting GraphQL APIs

If you want to look beyond authentication and authorisation to protect your GraphQL APIs, there are a few Node.js libraries you can have a look at.
 
1. Implementing Rate-Limiting Protection
 
Rate-limiting will prevent too many requests coming in at once. For this, you can start with looking at <a href="https://www.npmjs.com/package/graphql-rate-limit-directive" target="_blank">graphql-rate-limit-directive</a>. It not only does rate-limiting per query, but also can do rate-limiting per user.
 
2. Implementing Depth-Limiting Protection
 
We can protect our APIs against nested queries by implementing depth-limiting protection. For this, you can check out <a href="https://www.npmjs.com/package/graphql-depth-limit" target="_blank">graphql-depth-limit</a>.
 
3. Calculate query complexity and limit queries by complexity cost.
 
There is a cool library to calculate your query complexity and limit queries by complexity cost. Implementing this is quite simple with the library called, <a href="https://www.npmjs.com/package/graphql-validation-complexity" target="_blank">graphql-validation-complexity</a>.
