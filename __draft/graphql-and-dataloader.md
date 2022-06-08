# About Dataloader (JS lib)

GraphQL can be costly if it is not implemented correctly. It may make many unnecessary database calls.

### Referecen

GraphQL data loader pattern: https://medium.com/@__xuorig__/the-graphql-dataloader-pattern-visualized-3064a00f319f
dataloader for js: https://github.com/graphql/dataloader

### Notes

#### Terminologies

GraphQL schema
- it allows clients to know what are exposed by the server
- the server validates incoming client queries against its interface

Resolver
- A simple function that returns the data for a certain exposed GraphQL field.
- Usually a function of a field's parent object
- Sometimes carry an context (additional arguments), which carries contextual and global info about a query that can be used during execution.