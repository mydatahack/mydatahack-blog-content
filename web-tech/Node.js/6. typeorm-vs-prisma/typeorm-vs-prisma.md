# TyoeORM vs Prisma to build GraphQL APIs with TypeScript

If you are building GraphQL APIs with TypeScript and have a relational database, there are two main ORM libraries we can use: <a href="https://www.prisma.io/" target="_blank">Prisma</a> and <a href="https://typeorm.io/#/" target="_blank">TypeORM</a>. Both of them are similar. They both use models to define database tables, have query APIs, handle db connection well, have good documentations and community support so on. However, if you want to know which one to use, I recommend typeorm for the reasons below.

Here are the example projects.
<ul>
  <li>
    <a href="https://github.com/mydatahack/javascript-projects/tree/master/TypeORM-MySQL-Ts" target="_blank">GraphQL with TypeORM, TypeScript and MySQL</a>
  </li>
  <li>
    <a href="https://github.com/mydatahack/javascript-projects/tree/master/Prisma-MySQL-Ts" target="_blank">GraphQL with Prisma, TypeScript and MySQL</a>
  </li>
</ul>

<strong>(1) Better integration with type-graphql</strong>

This is probably the biggest point I want to make. If you want to pick and choose which database fields to expose, you need to write two different models (the one defines table and another one to define graphql schema) with Prisma. This is because Prisma uses its own prisma.schema file to define the model.

Tables are defined in the prisma.schema file.

<pre>
model book {
  id       Int    @id @default(autoincrement())
  title    String
  field    String
  authorId Int
  author   author @relation(fields: [authorId], references: [id])
}
</pre>

If we are going to expose the same field as database we can just use <a href="https://www.npmjs.com/package/typegraphql-prisma" target="_blank">typegraphql-prisma</a> to generate the schema from the model in prisma.schema file. However, if we want to customise which fields to expose or expose a calculated field, we need to create a separate model with type-graphql decorators.

<pre>
@ObjectType()
export class Book {
  @Field()
  id: number

  @Field()
  title: string

  @Field()
  authorId: number

  @Field(type => Author)
  author: Author
}
</pre>

On the other hand, TypeORM uses regular classes and decorators for a database model. This means a class file can contain decorators for TypeORM as well as for type-graphql.

<pre>

@ObjectType()
@Entity()
export class Book {

  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  title: string

  @Column()
  fieldNotExposingToTheGraph: string 
  
  @Field(type => [Author])
  @ManyToMany(() => Author, author => author.books, {
    onDelete: 'CASCADE'
  })
  @JoinTable()
  authors: Author[]
}
</pre>

<strong>(2) Easier to handle many to many relationship</strong>

I think it is easier to handle many to many relationships with TypeORM. We can just add @ManyToMany decorator. See <a href="https://github.com/mydatahack/javascript-projects/tree/master/TypeORM-MySQL-Ts" target="_blank">my TypeORM project example</a> where I handle many to many relationship. It's not easy with Prisma as far as I understand. Actually, TypeORM is more intuitive when it comes to defining relationships in my opinion.

<strong>(3) More flexible</strong>

TypeORM is more flexible and provides more options. It supports both Active Record and DataMapper patterns (see doc <a href="https://typeorm.io/#/" target="_blank">here</a>). It has its own query APIs like find() as well as query builder support. Writing code for database queries is more flexible with TypeORM. It's similar to Hibernate, Doctrin and Entity Framework. If you have worked with one of those, the transition is easier. 

In conclusion, if you are not really sure which one to use for your GraphQL API project, I recommend TypeORM. Having said that, both tools are very similar and Prisma is also very easy to use. If you want to investigate more, check out the projects that use Prisma and TypeORM and you can make up your own mind.

<ul>
  <li>
    TypeORM project <a href="https://github.com/mydatahack/javascript-projects/tree/master/TypeORM-MySQL-Ts" target="_blank">here</a>.
  </li>
  <li>
    Prisma project <a href="https://github.com/mydatahack/javascript-projects/tree/master/Prisma-MySQL-Ts" target="_blank">here</a>.
  </li>
</ul>
