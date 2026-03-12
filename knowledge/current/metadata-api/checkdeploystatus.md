---
title: "checkDeployStatus()"
domain: metadata-api
topic: checkdeploystatus
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:37.437Z
estimatedTokens: 751
keywords: [checkDeployStatus, Checks, status, declarative, metadata, call, deploy, Usage, Sample, Code—Java, Arguments]
---

# checkDeployStatus()

> Checks the status of declarative metadata call deploy().

# checkDeployStatus()

Checks the status of declarative metadata call deploy().

## Syntax

```

```

## Usage

checkDeployStatus is used as part of the process for deploying packaged or unpackaged components to an organization:

1.  Issue a deploy() call to start the asynchronous deployment. An [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object is returned. Note the value in the [id](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#async_result_id) field, and use it for the next step.
2.  Issue a [checkDeployStatus()](# "Checks the status of declarative metadata call deploy().") call in a loop until the [done](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#done) field of the returned [DeployResult](atlas.en-us.api_meta.meta/api_meta/meta_deployresult.htm "Contains information about the success or failure of the associated deploy() call.") contains true, which means that the call is completed. The [DeployResult](atlas.en-us.api_meta.meta/api_meta/meta_deployresult.htm "Contains information about the success or failure of the associated deploy() call.") object contains information about an in-progress or completed deployment started using the deploy() call. When calling [checkDeployStatus()](# "Checks the status of declarative metadata call deploy()."), pass in the [id](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#async_result_id) value from the [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object from the first step.

In API version 29.0, Salesforce improved the deployment status properties and removed the requirement to use checkStatus() after a deploy() call to get information about deployments. Salesforce continues to support the use of checkStatus() when using deploy() with API version 28.0 or earlier.

## Sample Code—Java

See the [deploy() sample code](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm#sample_java_deploy) for sample usage of this call.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| id | ID | ID obtained from an AsyncResult object returned by deploy() or a subsequent checkStatus() call. |
| includeDetails | boolean | Sets the DeployResult object to include DeployDetails information ((true) or not (false). The default is false. Available in API version 29.0 and later. |

## Response

[DeployResult](atlas.en-us.api_meta.meta/api_meta/meta_deployresult.htm "Contains information about the success or failure of the associated deploy() call.")

-   [← Previous](atlas.en-us.api_meta.meta/api_meta/meta_deploy_deleting_files.htm "Deleting Components from an Organization")
-   [Next →](atlas.en-us.api_meta.meta/api_meta/meta_canceldeploy.htm "cancelDeploy()")

## Code Examples

```
DeployResult = metadatabinding.checkDeployStatus(ID id, includeDetails boolean);
```

## Related Topics

- DeployResult (atlas.en-us.api_meta.meta/api_meta/meta_deployresult.htm)
- AsyncResult (atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm)
- done (atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm)
- deploy() sample code (atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm)
- deploy() (atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm)
- checkStatus() (atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm)
- DeployDetails (atlas.en-us.api_meta.meta/api_meta/meta_deployresult.htm)
- ← Previous (atlas.en-us.api_meta.meta/api_meta/meta_deploy_deleting_files.htm)
- Next → (atlas.en-us.api_meta.meta/api_meta/meta_canceldeploy.htm)
