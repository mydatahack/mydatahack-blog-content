## Introduction

We use Serverless Framework ([https://www.serverless.com/](https://www.serverless.com/)) for Lambda Development and Deployment.

## Comparison to SAM CLI

Compare to SAM CLI, Serverless Framework gives us better developer experience, more flexible configuration and richer set of support plugins.

**Local Development Experience**

- Serverless 👍

Serverless plugin, serverless-local, makes it easy to develop by supporting hot loading out of the box for TypeScript. It integrates well with webpack. This makes local development and debugging easy.

- SAM 👎

We can spin up API gateway and lambda function locally with both Serverless and SAM. However, hot loading is not supported out of the box. TS compilation and spinning up lambda containers are separate workflow, therefore we need two separate terminal sessions to do `webpack --watch` and `sam local start-api`

**Documentation**

- Serverless 👍

Serverless has easier to understand documentation. 

- SAM 👎

Sam documentations are too convoluted as in the typical fashion of AWS documentation. For example, try to find out how to configure multiple paths with different methods with Sam from AWS documentation. With serverless, we can find answer easily. You can't even find how to do it with Sam.

**Template**

- Serverless 👍

Syntax is easy to understand and simpler than SAM template processor.

In the serverless framework another template file can be referenced from the main serverless.yml, like this: `${file(./file.yml)}`

This makes the template everything so much cleaner, readable, organised, and maintainable

- SAM👎

Syntax is more like CloudFormation YAML and hard to understand. CloudFormation is difficult to write and that's why we use an abstraction language like Terraform. 

Neither CloudFormation YAML templates nor the SAM template processor supports inclusions the way serverless does. It means we have to add all the configuration in a single file, which makes template less cleaner, readable, organised and maintainable.

**Output**

- Serverless 👍

Output of the function is nice and comes out of the box. We can straight away see the endpoints and methods.

- SAM👎

Output of the function needs to be configured. It is not dynamic so, takes a bit of effort to configure. It doesn't even look as nice as Serverless output.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9d9d6f57-772c-448d-8eec-9c84f7a7b329/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9d9d6f57-772c-448d-8eec-9c84f7a7b329/Untitled.png)

**Step Functions**

- Serverless 👍

Creating step functions with Serverless is easy, flexible and well-documented

- SAM 👎

As SAM template is complex and doesn't allow code split, creating step functions is much harder.

**Issues with SAM**

We cannot push only dist folder. We have to push everything without configuring s3 copy step in CI... ([https://github.com/aws/aws-sam-cli/issues/2179](https://github.com/aws/aws-sam-cli/issues/2179))

## There are still reasons why we may want to use SAM

- It is the tools supported by AWS
- We already have a pipeline for lambda using SAM and BuildKite (Although it needs to be updated for profile and it will take a long time (probably the same amount of time as implementing serverless) to set up for profile which uses API gateway.
-
