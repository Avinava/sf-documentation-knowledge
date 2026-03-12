---
title: "AsyncResult"
domain: metadata-api
topic: asyncresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:37.075Z
estimatedTokens: 2688
keywords: [AsyncResult, Contains, deployment, retrieval., API, version, 28.0, earlier, contains, status, information, any, asynchronous, metadata, call., Version, 31.0, Later, Versions, 29.0]
---

# AsyncResult

> Contains the ID of a deployment or retrieval. In API version 28.0 and earlier,
        contains status information of any asynchronous metadata call.

# AsyncResult

Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.

## API Version 31.0 and Later

In API version 31.0, the process of retrieving metadata has been simplified and retrieval properties have been moved to [RetrieveResult](atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm "The retrieve() call returns an array of RetrieveResult objects."). Also, the asynchronous [create()](atlas.en-us.api_meta.meta/api_meta/meta_create.htm#meta_create "Deprecated. Adds one or more new metadata components to your organization asynchronously. This call is removed as of API version 31.0 and is available in earlier versions only. Use createMetadata() instead."), [update()](atlas.en-us.api_meta.meta/api_meta/meta_update.htm#meta_update "Deprecated. Updates one or more components in your organization asynchronously. This call is removed as of API version 31.0 and is available in earlier versions only. Use updateMetadata() or renameMetadata() instead."), and [delete()](atlas.en-us.api_meta.meta/api_meta/meta_delete.htm#meta_delete "Deprecated. Deletes one or more components from your organization asynchronously. This call is removed as of API version 31.0 and is available in earlier versions only. Use deleteMetadata() instead.") calls have been removed. Therefore, only the id field in AsyncResult is used. The id field is the ID of a deployment or retrieval.

These asynchronous calls can return AsyncResult.

-   [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.")
-   [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization.")

AsyncResult has this field that’s in use.

| Name | Type | Description |
| --- | --- | --- |
| id | ID | Required. The ID of the component that's being deployed or retrieved. |

All fields in AsyncResult other than id are deprecated as of API version 31.0. These fields exist but are no longer in use.

-   done
-   message
-   state
-   statusCode

## API Versions 29.0 and 30.0

In API version 29.0, Salesforce moved several properties from the AsyncResult object to the [DeployResult](atlas.en-us.api_meta.meta/api_meta/meta_deployresult.htm "Contains information about the success or failure of the associated deploy() call.") object and added several new ones, to improve the process for getting information about deployments. For more information about these changes, see [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.").

In API versions 29.0 and 30.0, AsyncResult is returned by the same asynchronous calls as in API version 28.0 and earlier, but it has different fields.

| Name | Type | Description |
| --- | --- | --- |
| done | boolean | Required. Indicates whether the call has been completed (true) or not (false). |
| id | ID | Required. The ID of the component that's being created, updated, deleted, deployed, or retrieved. |
| message | string | The message that corresponds to the returned statusCode field, if any. |
| state | AsyncRequestState (enumeration of type string) | Required. The AsyncRequestState object has one of four possible values.Queued: This call hasn’t started. It’s waiting in a queue.InProgress: This call has started but hasn’t been completed.Completed: This call has been completed.Error: An error occurred. See the statusCode for more information. |
| statusCode | StatusCode (enumeration of type string) | If an error occurred during the create(), update(), or delete() call, a status code is returned, and the message that corresponds to the status code is returned in the message field.For a description of each StatusCode value, see StatusCode in the SOAP API Developer Guide. |

## API Version 28.0 and Earlier

In API version 28.0 and earlier, these asynchronous calls can return AsyncResult.

-   [create()](atlas.en-us.api_meta.meta/api_meta/meta_create.htm "Deprecated. Adds one or more new metadata components to your organization asynchronously. This call is removed as of API version 31.0 and is available in earlier versions only. Use createMetadata() instead.")
-   [delete()](atlas.en-us.api_meta.meta/api_meta/meta_delete.htm "Deprecated. Deletes one or more components from your organization asynchronously. This call is removed as of API version 31.0 and is available in earlier versions only. Use deleteMetadata() instead.")
-   [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.")
-   [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization.")
-   [update()](atlas.en-us.api_meta.meta/api_meta/meta_update.htm "Deprecated. Updates one or more components in your organization asynchronously. This call is removed as of API version 31.0 and is available in earlier versions only. Use updateMetadata() or renameMetadata() instead.")

Use the [checkStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.") call against each object to discover when the call is completed for that object. Salesforce updates each AsyncResult object as the call is completed or when errors occur.

Similarly, the [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.") and [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization.") calls use AsyncResult, though you must subsequently use [checkDeployStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm "Checks the status of declarative metadata call deploy().") or [checkRetrieveStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkretrievestatus.htm "Checks the status of the declarative metadata call checkRetrieveStatus() and returns the zip file contents.") respectively to get more status information for the deployment or retrieval.

AsyncResult has the following fields.

| Name | Type | Description |
| --- | --- | --- |
| checkOnly | boolean | Indicates whether this deployment is used to check the validity of the deployed files without changing the organization (true) or not (false). A check-only deployment doesn’t deploy any components or change the organization in any way. This field is available in API version 16.0 and later and is relevant only for the deploy() call. |
| done | boolean | Required. Indicates whether the call has been completed (true) or not (false). |
| id | ID | Required. The ID of the component that's being created, updated, deleted, deployed, or retrieved. |
| message | string | The message that corresponds to the returned statusCode field, if any. |
| numberComponentErrors | int | The number of components that generated errors during this deployment. This field is available in API version 16.0 and later and is relevant only for the deploy() call. |
| numberComponentsDeployed | int | The number of components that have been deployed for this deployment. This field in conjunction with the numberComponentsTotal field gives you an indication of the progress of the deployment. This field is available in API version 16.0 and later and is relevant only for the deploy() call. |
| numberComponentsTotal | int | The total number of components in the deployment. This field in conjunction with the numberComponentsDeployed field gives you an indication of the progress of the deployment. This field is available in API version 16.0 and later and is relevant only for the deploy() call. |
| numberTestErrors | int | The number of Apex tests that generated errors during this deployment. This field is available in API version 16.0 and later and is relevant only for the deploy() call. |
| numberTestsCompleted | int | The number of Apex tests that have been completed for this deployment. This field in conjunction with the numberTestsTotal field gives you an indication of the progress of tests for the deployment. This field is available in API version 16.0 and later and is relevant only for the deploy() call. |
| numberTestsTotal | int | The total number of Apex tests in the deployment. This field in conjunction with the numberTestsCompleted field gives you an indication of the progress of tests for the deployment. The value in this field isn’t accurate until the deployment has started running tests for the components that are being deployed. This field is available in API version 16.0 and later and is relevant only for the deploy() call. |
| secondsToWait | int | This field is no longer supported for API version 13.0 and later and is provided only for backward compatibility. The field was removed in API version 17.0.Indicates the number of seconds before the call is likely to be completed. This number is an estimate only. A reasonable approach is to wait one second before calling to see if the operation is complete. Double your wait time for each successive iteration of calls until the operation is complete. |
| state | AsyncRequestState (enumeration of type string) | Required. The AsyncRequestState object has one of four possible values.Queued: This call hasn’t started. It’s waiting in a queue.InProgress: This call has started but hasn’t been completed.Completed: This call has been completed.Error: An error occurred. See the statusCode for more information. |
| stateDetail | string | Indicates which component is being deployed or which Apex test class is running. This field is available in API version 16.0 and later and is relevant only for the deploy() call. |
| stateDetailLastModifiedDate | dateTime | The date and time when the stateDetail field was last modified. This field is available in API version 16.0 and later and is relevant only for the deploy() call. |
| statusCode | StatusCode (enumeration of type string) | If an error occurred during the create(), update(), delete(), or deploy() call, a status code is returned, and the message that corresponds to the status code is returned in the message field.For a description of each StatusCode value, see StatusCode in the SOAP API Developer Guide. |

## Related Topics

- RetrieveResult (atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm)
- create() (atlas.en-us.api_meta.meta/api_meta/meta_create.htm)
- update() (atlas.en-us.api_meta.meta/api_meta/meta_update.htm)
- delete() (atlas.en-us.api_meta.meta/api_meta/meta_delete.htm)
- deploy() (atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm)
- retrieve() (atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm)
- DeployResult (atlas.en-us.api_meta.meta/api_meta/meta_deployresult.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- checkStatus() (atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm)
- checkDeployStatus() (atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm)
