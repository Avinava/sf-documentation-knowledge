---
title: "Run the Same Tests in Sandbox and Production Deployments"
domain: metadata-api
topic: run-the-same-tests-in-sandbox-and-production-deployments
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:38.704Z
estimatedTokens: 314
keywords: [Run, Same, Tests, Sandbox, Production, Deployments, Starting, API, version, 34.0, choose, which, tests, run, development, environment, such, only, local, match]
---

# Run the Same Tests in Sandbox and Production Deployments

> Starting in API version 34.0, you can choose which tests to run in your development
  environment, such as only local tests, to match the tests run in production. In earlier versions,
  if you enabled tests in your sandbox deployment, you couldn’t exclude managed package
  tests.

# Run the Same Tests in Sandbox and Production Deployments

Starting in API version 34.0, you can choose which tests to run in your development environment, such as only local tests, to match the tests run in production. In earlier versions, if you enabled tests in your sandbox deployment, you couldn’t exclude managed package tests.

By default, no tests are run in a deployment to a non-production organization, such as a sandbox or a Developer Edition organization. To specify tests to run in your development environment, set a [testLevel deployment option](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm#deploy_testlevels). For example, to run local tests in a deployment and to exclude managed package tests, set testLevel on the DeployOptions object to TestLevel.RunLocalTests. Next, pass this object as an argument to the deploy() call as follows.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

The RunLocalTests test level is enforced regardless of the contents of the deployment package. In contrast, tests are executed by default in production only if your deployment package contains Apex classes or triggers. You can use RunLocalTests for sandbox and production deployments.

## Code Examples

```
// Create the DeployOptions object.
DeployOptions deployOptions = new DeployOptions();

// Set the appropriate test level.
deployOptions.setTestLevel(TestLevel.RunLocalTests);

// Call deploy() by passing the deployment options object as an argument. 
AsyncResult asyncResult = metadatabinding.deploy(zipBytes,deployOptions);
```

## Related Topics

- testLevel deployment
    option (atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm)
