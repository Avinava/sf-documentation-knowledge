---
title: "deployRecentValidation()"
domain: metadata-api
topic: deployrecentvalidation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.838Z
keywords: [deployRecentValidation, Syntax, Usage, Version, Arguments, Response, Sample, Code—Java]
---

# deployRecentValidation()

# deployRecentValidation()

Deploys a recently validated component set without running Apex tests.

## Syntax

```

```

## Usage

Use deployRecentValidation() to deploy your components to production in less time by skipping the execution of Apex tests. Ensure that the following requirements are met before deploying a recent validation.

-   The components have been validated successfully for the target environment within the last 10 days.
-   As part of the validation, Apex tests in the target org have passed.
-   Code coverage requirements are met.
    -   If all tests in the org or all local tests are run, overall code coverage is at least 75%, and Apex triggers have some coverage.
    -   If specific tests are run with the RunSpecifiedTests test level, each class and trigger that was deployed is covered by at least 75% individually.

This call is equivalent to performing a quick deployment of a recent validation on the Deployment Status page in the Salesforce user interface.

Before you call deployRecentValidation(), your organization must have a validation that was recently run. You can run a validation on a set of components by calling [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.") with the checkOnly property of the deployOptions parameter set to true. Note the ID that you obtained from the deploy() call. You’ll use this ID for the deployRecentValidation() call in the next step.

After you’ve run a validation successfully, use these steps to quick-deploy the validation to the same target environment.

1.  To start an asynchronous quick deployment, call deployRecentValidation() and pass it the ID of a recent validation. This ID is obtained from the previous [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.") call. The deployRecentValidation() call returns the ID of the quick deployment. Note this value. You’ll use it in the next step.
2.  Check for the completion of the call. This process is similar to that of [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org."). Issue a [checkDeployStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm "Checks the status of declarative metadata call deploy().") call in a loop until the [done](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#done) field of the returned [DeployResult](atlas.en-us.api_meta.meta/api_meta/meta_deployresult.htm "Contains information about the success or failure of the associated deploy() call.") contains true, which means that the call is completed. The [DeployResult](atlas.en-us.api_meta.meta/api_meta/meta_deployresult.htm "Contains information about the success or failure of the associated deploy() call.") object contains information about an in-progress or completed deployment that was started by using the deployRecentValidation() call. When calling [checkDeployStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm "Checks the status of declarative metadata call deploy()."), pass in the ID value that you obtained in the first step.

## Version

Available in API version 33.0 and later.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| validationID | string | The ID of a recent validation. |

## Response

Type: string

The ID of the quick deployment.

## Sample Code—Java

```

```