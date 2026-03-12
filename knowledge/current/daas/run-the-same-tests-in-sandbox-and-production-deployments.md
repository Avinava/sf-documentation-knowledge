---
title: "Run the Same Tests in Sandbox and Production Deployments"
domain: daas
topic: run-the-same-tests-in-sandbox-and-production-deployments
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.085Z
estimatedTokens: 394
keywords: [Run, Tests, Sandbox, Production, Deployments, Starting, API, version, 34.0, choose, development, environment, local, match, earlier]
---

# Run the Same Tests in Sandbox and Production Deployments

> Starting in API version 34.0, you can choose which tests to run in your development
    environment, such as only local tests, to match the tests run in production. In earlier
    versions, if you enabled tests in your sandbox deployment, you couldn’t exclude managed package
    tests.

# Run the Same Tests in Sandbox and Production Deployments

Starting in API version 34.0, you can choose which tests to run in your development environment, such as only local tests, to match the tests run in production. In earlier versions, if you enabled tests in your sandbox deployment, you couldn’t exclude managed package tests.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

By default, no tests are run in a deployment to a non-production organization, such as a sandbox or a Developer Edition organization. To specify tests to run in your development environment, set a [testLevel deployment option](atlas.en-us.daas.meta/daas/forcemigrationtool_deploy.htm#ant_deploy_testLevel). For example, to run local tests in a deployment and to exclude managed package tests, add the testLevel="RunLocalTests" parameter to the deploy target as shown in this example.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The RunLocalTests test level is enforced regardless of the contents of the deployment package. In contrast, tests are executed by default in production only if your deployment package contains Apex classes or triggers. You can use RunLocalTests for sandbox and production deployments.

## Code Examples

```
<target name="deployCode">
    <sf:deploy username="${sf.username}" password="${sf.password}" 
           sessionId="${sf.sessionId}" serverurl="${sf.serverurl}"
           deployroot="codepkg" testLevel="RunLocalTests">
    </sf:deploy>
</target>
```

## Related Topics

- testLevel deployment
        option (atlas.en-us.daas.meta/daas/forcemigrationtool_deploy.htm)
