---
title: "Running a Subset of Tests in a Deployment"
domain: daas
topic: running-a-subset-of-tests-in-a-deployment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.089Z
estimatedTokens: 762
namespace: MyNamespace
keywords: [Running, Subset, Tests, Deployment, Test, levels, enable, control, over, run, shorten, time, production, deploying, Apex]
---

# Running a Subset of Tests in a Deployment

> Test levels enable you to have more control over which tests are run in a deployment.
    To shorten deployment time to production, run a subset of tests when deploying Apex components.
    The default test execution behavior in production has also changed. By default, if no test level
    is specified, no tests are executed, unless your deployment package contains Apex classes or
    triggers.

**Namespace:** `MyNamespace`

# Running a Subset of Tests in a Deployment

Test levels enable you to have more control over which tests are run in a deployment. To shorten deployment time to production, run a subset of tests when deploying Apex components. The default test execution behavior in production has also changed. By default, if no test level is specified, no tests are executed, unless your deployment package contains Apex classes or triggers.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

If the code coverage of an Apex component in the deployment is less than 75%, the deployment fails. If one of the specified tests fails, the deployment also fails. We recommend that you test your deployment in sandbox first to ensure that the specified tests cover each component sufficiently. Even if your organization’s overall code coverage is 75% or more, the individual coverage of the Apex components being deployed can be less. If the code coverage requirement isn’t met, write more tests and include them in the deployment.

To run a subset of tests, add the testLevel="RunSpecifiedTests" parameter to the deploy target. Specify each test class to run for a deploy target in a <runTest> </runTest> child element within the sf:deploy element. Add the test class name within the <runTest> </runTest> tags. Add as many runTest tags as you need, one for each test class.

This deploy target example shows three test classes. Salesforce runs these test classes when deploying this package.

```

```

The test class name can include a namespace prefix. Add a namespace prefix if your organization has a namespace defined or if the test class belongs to a managed package. For example, if the namespace is MyNamespace, specify the test class as MyNamespace.TestClass1.

If you don’t specify a test class to run in the target, the default deployment behavior applies when deploying to production. The default is all tests in your organization run on deployment except the tests that originate from installed managed packages. The default code coverage requirements are also enforced. The requirements are a minimum overall percentage of 75% for all classes and triggers, and no trigger can have 0% coverage.

## Notes About Running Specific Tests

-   You can specify only test classes. You can’t specify individual test methods.
-   We recommend that you refactor test classes to include the minimum number of tests that meet code coverage requirements. Refactoring your test classes can contribute to shorter test execution times, and as a result, shorter deployment times.
-   You can deactivate a trigger in the target organization by deploying it with an inactive state. However, the trigger must have been previously deployed with an active state.

## Code Examples

```
<target name="deployCode">
    <sf:deploy username="${sf.username}" password="${sf.password}" 
           sessionId="${sf.sessionId}" serverurl="${sf.serverurl}"
           deployroot="codepkg" testLevel="RunSpecifiedTests">
        <runTest>TestClass1</runTest>
        <runTest>TestClass2</runTest>
        <runTest>TestClass3</runTest>
    </sf:deploy>
</target>
```
