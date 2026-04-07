---
title: "Execute"
domain: mc-apis
topic: execute
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:16.915Z
estimatedTokens: 565
keywords: [Execute, individual, batches, helper, requests, functions, provide, functionality, tedious, build, order, they, added, ExecuteRequest, array]
---

> Use the Execute method to get access to and execute individual or batches of helper requests. The helper functions provide access to functionality that would be tedious to build using other methods. Requests execute in the order they are added to the ExecuteRequest array.

# Execute

Use the Execute method to get access to and execute individual or batches of helper requests. The helper functions provide access to functionality that would be tedious to build using other methods. Requests execute in the order they are added to the ExecuteRequest array.

An ExecuteRequest accepts any number of request parameters. Each request type has a set number of request parameters that are required to make the request work or to configure the request.

## C# Syntax

```apex
System.String execute = Execute(Requests, RequestID, Results)
```

## Parameters

This method has the following parameters.

| Name | Data Type | Description |
| --- | --- | --- |
| RequestID | String | Marketing Cloud's unique identifier for every request. This parameter requires a null RequestId string. By default, this value is a Marketing Cloud-generated GUID. |
| Requests | ExecuteRequest | An array of ExecuteRequest objects that specify the execution properties for a method. The objects are acted on in the order they have been added. This array can hold different ExecuteRequest types, which allows you to execute complex interactions in one call. |
| Results | ExecuteResponse[]& | The results of a method execution returned as an output parameter. |

## Request Types

-   [GetFolderHierarchy](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_the_email_folder_hierarchy.htm "Retrieve the Email Folder Hierarchy") - This method retrieves the email folder hierarchy for an account.
-   MasterUnsub - Deprecated: Please use the Subscriber Object to unsubscribe a subscriber.

## Output

| Name | Data Type | Description |
| --- | --- | --- |
| ExecuteResponse | array | This output contains an array of objects holding a list of return values. The objects are returned in the order they are executed. This array contains one ExecuteResponse object per input ExecuteRequest. |
| OverallStatus | String | A string value containing the overall status of the request. Valid status values include:OK - All requests were successfully executed.Has Error - When executing multiple APIObject requests, this status code states that some of the operations failed, while some succeeded.Error - All execute operations failed during validation or processing. |

## Related Topics

- ExecuteRequest (atlas.en-us.noversion.mc-apis.meta/mc-apis/executerequest.htm)
- GetFolderHierarchy (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_the_email_folder_hierarchy.htm)
- ExecuteResponse (atlas.en-us.noversion.mc-apis.meta/mc-apis/executeresponse.htm)
