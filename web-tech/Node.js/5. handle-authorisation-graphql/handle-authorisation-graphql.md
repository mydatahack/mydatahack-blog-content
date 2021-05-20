# Handling Authorisation With Apollo

There are many ways to handle authorisation with Apollo. Authorisation is the process to determine if the authenticated user has access rights for the particular resources while authentication is to confirm the user's identity.

In short, my recommendation is (5), by using graphql-shield. You can also check the code example for handling authorisation with graphql-shield <a href="https://github.com/mydatahack/javascript-projects/tree/master/Apollo-Auth-Ts" target="_blank">here</a>.

<strong>(1) Implementing Authorisation in a Resolver</strong>

This is the simplest way, but not very scalable. As an example, we can pass a user object in the context. By using the information about the user's role, we can write an if-else condition.

<pre>
movie: (parent, arg, { user, dataSources }, info) => {
  if (user && user.role === 'ADMIN') {
    return dataSources.getMovies();
  }
}
</pre>

<strong>(2) Implementing Authorisation in a Model</strong>

Create a model and control data access. The below example is to check the user role and can query any user if the role is set to ADMIN and can only query their own data if the role is set to USER. It's cool, but convoluted in my opinion.

<pre>
import { getUserById } from '../datasources/user';

const userModel = ({ user }) => {
  return (
    getById: (id) => {
      if (user) {
        if (user.role === 'ADMIN') {
          return getUserById(id);
        }
        if (user.role === 'USER') {
          return getUserById(user.id);
        }
      }
    }
  )
}
</pre>

Then, we can pass this in the context's return value where you do new ApolloServer(). This can be used in the repository method.

<pre>
return (
  user,
  otherThings,
  models: {
    User: generateUserModel({ user })
  }
)
</pre>

<strong>(3) Using Schema Directive</strong>

We can create a custom schema directive as in the documentation <a href="https://www.apollographql.com/docs/apollo-server/schema/directives/" target="_blank">here</a>.

<strong>(4) Wrap a resolver function with graphql-auth</strong>

We can use the node module, <a href="https://www.npmjs.com/package/graphql-auth" target="_blank">graphql-auth</a>, to wrap the resolver function as below. It's pretty nice.

<pre>
import withAuth from 'graphql-auth';
 
const resolvers = {
  Query: {
    users: withAuth(['users:view'], (root, args, context) => { ... }),
    ...
  }
}
</pre>

<strong>(5) Use graphql-shield</strong>

This is the recommended way to handle authorisation with Apollo. <a href="https://www.npmjs.com/package/graphql-shield" target="_blank">graphql-shield</a> can completely abstract the authentication from the resolver. It is the cleanest and easiest way to handle authorisation. Because the permission rules are abstracted, it is easy to manage when the app starts scaling up. It works well with <a href="https://www.apollographql.com/docs/federation/" target="_blank">Apollo Federation</a>, too.

See my code example of using graphql-shield to handle authorisation <a href="https://github.com/mydatahack/javascript-projects/tree/master/Apollo-Auth-Ts" target="_blank">here</a>.

