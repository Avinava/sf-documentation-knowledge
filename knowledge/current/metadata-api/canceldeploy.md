---
title: "cancelDeploy()"
domain: metadata-api
topic: canceldeploy
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:37.302Z
estimatedTokens: 1244
keywords: [cancelDeploy, Cancels, deployment, hasn’t, completed, yet, Usage, Version, Permissions, Arguments, Sample, Code—Java]
---

# cancelDeploy()

> Cancels a deployment that hasn’t completed yet.

# cancelDeploy()

Cancels a deployment that hasn’t completed yet.

## Syntax

```

```

## Usage

Use the cancelDeploy() operation to cancel a deployment in your org started by the [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.") operation, which includes deployments started by the Lightning Platform Migration Tool and the Lightning Platform IDE. The deployment can be in a queue waiting to get started, or can be in progress. For API versions 65.0 and higher, deployments with a status of Finalizing Deploy, can't be cancelled. For API versions below 65.0, attempts to cancel a deployment may fail if the deployment has started committing data. Alternatively, it's possible that the cancellation will succeed, but data from the deployment is also committed.

This operation takes the ID of the deployment you want to cancel and returns a [CancelDeployResult](atlas.en-us.api_meta.meta/api_meta/meta_canceldeployresult.htm "Contains information about a deployment cancellation—whether the cancellation completed and the deployment ID.") object. When the deployment is in the queue and hasn’t started yet, calling cancelDeploy() cancels the deployment immediately. When the deployment has started and is in progress, sometimes it doesn’t get canceled immediately, so call [checkDeployStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm "Checks the status of declarative metadata call deploy().") to check the status of the cancellation.

Cancel a deployment using these steps.

1.  Obtain the ID of the deployment you want to cancel. For example, you can obtain the ID from the [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.") call in the AsyncResult object [id](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#async_result_id) field. Alternatively, you can obtain the ID in the Salesforce user interface from Setup by entering Deployment Status in the Quick Find box, selecting **Deployment Status**, and then noting the ID of a deployment started by the API.
2.  Issue a cancelDeploy() call to start the cancellation process. This call returns a CancelDeployResult object.
3.  Check the value in the done field of the returned CancelDeployResult. If the done field value is true, the deployment has been canceled and you’re done. If the done field value is false, the cancellation is in progress. To check the cancellation status, follow these steps.
    1.  Call [checkDeployStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm "Checks the status of declarative metadata call deploy().") using the deployment ID you obtained earlier.
    2.  In the returned [DeployResult](atlas.en-us.api_meta.meta/api_meta/meta_deployresult.htm "Contains information about the success or failure of the associated deploy() call.") object, check the status field. If the status is Canceling, the cancellation is still in progress, and repeat steps a and b. Otherwise, if the status is Canceled, the deployment has been canceled and you’re done.

The deploy() operation throws these API faults.

INVALID\_ID\_FIELD with the message Invalid deploy ID

The specified ID argument doesn't correspond to a valid deployment.

INVALID\_ID\_FIELD with the message Deployment already completed

The specified deployment has already completed.

INVALID\_ID\_FIELD with the message You cannot cancel the deployment while finalizing is in progress

The specified deployment can't be canceled. Applies to API version 65.0 and later.

## Version

Available in API version 30.0 and later.

## Permissions

Your client application must be logged in with the Modify Metadata Through Metadata API Functions or Modify All Data permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

If a user requires access to metadata but not to data, enable the [Modify Metadata Through Metadata API Functions](atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm "To use Metadata API, a user must have these things.") permission. Otherwise, enable the Modify All Data permission.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| id | string | The ID of the deployment to cancel. |

## Response

[CancelDeployResult](atlas.en-us.api_meta.meta/api_meta/meta_canceldeployresult.htm "Contains information about a deployment cancellation—whether the cancellation completed and the deployment ID.")

## Sample Code—Java

This sample shows how to cancel a deployment. The sample calls cancelDeploy() by passing it a given deployment ID. Next, it checks whether the cancellation has completed, and if not, calls checkDeployStatus in a loop.

```

```

-   [← Previous](atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm "checkDeployStatus()")

## Code Examples

```
CancelDeployResult = metadatabinding.cancelDeploy(string id)
```

```apex
public void cancelDeploy(String asyncId) throws Exception {
    // Issue the deployment cancellation request  
    CancelDeployResult result = metadataConnection.cancelDeploy(asyncId);
    
    // If the deployment cancellation completed, write a message to the output.
    if (result.isDone()) {
        System.out.println("Your deployment was canceled successfully!");
    }
    else {
        // The deployment cancellation is still in progress, so get a new status 
        DeployResult deployResult = metadataConnection.checkDeployStatus(asyncId, false);
    
        // Check whether the deployment is done. If not done, this means 
        // that the cancellation is still in progress and the status is Canceling.        
        while (!deployResult.isDone()) {
            // Assert that the deployment status is Canceling
            assert deployResult.getStatus() == DeployStatus.Canceling;
            // Wait 2 seconds
            Thread.sleep(2000);
            // Get the deployment status again
            deployResult = metadataConnection.checkDeployStatus(asyncId, false);
        }
        
        // The deployment is done. Write the status to the output.
        // (When the deployment is done, the cancellation should have completed
        // and the status should be Canceled. However, in very rare cases,  
        // the deployment can complete before it is canceled.) 
        System.out.println("Final deploy status = >" + deployResult.getStatus());
    }
}
```

## Related Topics

- deploy() (atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm)
- CancelDeployResult (atlas.en-us.api_meta.meta/api_meta/meta_canceldeployresult.htm)
- checkDeployStatus() (atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm)
- DeployResult (atlas.en-us.api_meta.meta/api_meta/meta_deployresult.htm)
- Modify
                    Metadata Through Metadata API Functions (atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm)
- ← Previous (atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm)
