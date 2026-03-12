---
title: "Running a Subset of Tests in a Deployment"
domain: metadata-api
topic: running-a-subset-of-tests-in-a-deployment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:38.712Z
estimatedTokens: 549
keywords: [Running, Subset, Tests, Deployment, Test, levels, enable, control, over, which, tests, run, deployment., shorten, deployment, time, production, subset, deploying, Apex]
---

# Running a Subset of Tests in a Deployment

> Test levels enable you to have more control over which tests are run in a deployment. To
  shorten deployment time to production, run a subset of tests when deploying Apex components. The
  default test execution behavior in production has also changed. By default, if no test level is
  specified, no tests are executed, unless your deployment package contains Apex classes or
  triggers.

# Running a Subset of Tests in a Deployment

Test levels enable you to have more control over which tests are run in a deployment. To shorten deployment time to production, run a subset of tests when deploying Apex components. The default test execution behavior in production has also changed. By default, if no test level is specified, no tests are executed, unless your deployment package contains Apex classes or triggers.

If the code coverage of an Apex component in the deployment is less than 75%, the deployment fails. If one of the specified tests fails, the deployment also fails. We recommend that you test your deployment in sandbox first to ensure that the specified tests cover each component sufficiently. Even if your organization’s overall code coverage is 75% or more, the individual coverage of the Apex components being deployed can be less. If the code coverage requirement isn’t met, write more tests and include them in the deployment.

To run a subset of tests, set the RunSpecifiedTests test level on the DeployOptions object. Next, specify each test class to run in DeployOptions. Finally, pass DeployOptions as an argument to the deploy() call. The following example performs those steps to run only the specified test classes.

```

```

## Notes About Running Specific Tests

-   You can specify only test classes. You can’t specify individual test methods.
-   We recommend that you refactor test classes to include the minimum number of tests that meet code coverage requirements. Refactoring your test classes can contribute to shorter test execution times, and as a result, shorter deployment times.
-   You can deactivate a trigger in the target organization by deploying it with an inactive state. However, the trigger must have been previously deployed with an active state.

#### See Also

-   [Run Relevant Apex Tests in a Deployment (Beta)](atlas.en-us.api_meta.meta/api_meta/meta_deploy_run_relevant_tests.htm "Use the RunRelevantTests (beta) test level to run only the Apex tests that are relevant to your deployment. Salesforce automatically identifies the relevant tests based on an analysis of the deployment payload and the payload dependencies.")

## Code Examples

```
// Create the DeployOptions object.
DeployOptions deployOptions = new DeployOptions();

// Set the appropriate test level.
deployOptions.setTestLevel(TestLevel.RunSpecifiedTests);

// Specify the test classes to run.
// String array contains test class names.
String[] tests = {"TestClass1", "TestClass2", "TestClass3"};
// Add the test class names array to the deployment options.
deployOptions.setRunTests(tests);

// Call deploy() by passing the deployment options object as an argument. 
AsyncResult asyncResult = metadatabinding.deploy(zipBytes,deployOptions);
```

## Related Topics

- Run Relevant Apex Tests in a Deployment (Beta) (atlas.en-us.api_meta.meta/api_meta/meta_deploy_run_relevant_tests.htm)
