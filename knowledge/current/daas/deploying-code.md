---
title: "Deploying Code"
domain: daas
topic: deploying-code
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.080Z
estimatedTokens: 317
keywords: [Deploying, Code, Ant, Migration, Tool, retired, Spring, ’24, continues, function, future, API, versions, isn’t, updated]
---

# Deploying Code

> The Ant Migration Tool is retired with Spring ’24. The tool continues to
    function for future API versions but isn’t updated with new functionality and isn’t supported.
    To manage metadata changes, switch to Salesforce CLI for a modern, supported developer
    experience.

# Deploying Code

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

You can deploy metadata components and Apex at the same time, but you may find it useful to create separate targets for deploying Apex, so that you can run tests as part of the deployment. A portion of a build.xml file is listed below, with a target named deployCode that deploys the contents of the codepkg package and runs the tests for one class.

```

```

#### See Also

-   [Running a Subset of Tests in a Deployment](atlas.en-us.daas.meta/daas/forcemigrationtool_deploy_run_specific_tests.htm "Test levels enable you to have more control over which tests are run in a deployment. To shorten deployment time to production, run a subset of tests when deploying Apex components. The default test execution behavior in production has also changed. By default, if no test level is specified, no tests are executed, unless your deployment package contains Apex classes or triggers.")

## Code Examples

```
<target name="deployCode">
  <sf:deploy 
      username="${sf.username}"
      password="${sf.password}"
      sessionId="${sf.sessionId}"
      serverurl="${sf.serverurl}"
      deployroot="codepkg">
    <runTest>SampleDeployClass</runTest>
  </sf:deploy>
</target>
```

## Related Topics

- Running a Subset of Tests in a Deployment (atlas.en-us.daas.meta/daas/forcemigrationtool_deploy_run_specific_tests.htm)
