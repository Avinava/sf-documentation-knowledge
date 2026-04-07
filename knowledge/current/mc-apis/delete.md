---
title: "Delete"
domain: mc-apis
topic: delete
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:16.474Z
estimatedTokens: 469
keywords: [individually, batches, Multiple, deleted, call, order, they, added, APIObject, array]
---

> Use the Delete method to delete objects individually or in batches. Multiple object types can be deleted with one call. Objects are deleted in the order they are added to the APIObject array.

# Delete

Use the Delete method to delete objects individually or in batches. Multiple object types can be deleted with one call. Objects are deleted in the order they are added to the APIObject array.

> If no objects match the delete criteria, the call does not return an error (similar to a SQL delete call).

## C# Syntax

```
DeleteResult[] delete = Delete(Options, Objects, RequestID, OverallStatus)</p>
```

## Parameters

| Name | Data Type | Description |
| --- | --- | --- |
| Objects | APIObject[] | A collection of one or more objects to delete. The objects are deleted in the order they have been acted upon: first in, first out. This array can hold different object types, which allows you to perform complex interactions like deleting an account and two emails, in one call. |
| Options | DeleteOptions | Optionally specifies more processing options. A DeleteOptions instance is required for this parameter. However, no properties need to be defined for the instance. |
| OverallStatus | String | Specifies the overall status of the request. Valid status values include:OK - This status code states that all objects were successfully deleted.Has Error - Valid for Delete method calls with multiple APIObject objects, this status code states that some of the operations failed, while some succeeded.Error - This status code states that all delete operations failed during validation or processing. |
| RequestID | String | Marketing Cloud's unique identifier for every request. This string contains an output variable of the key of the request. By default, this value is a Marketing Cloud generated GUID. |

## Output

Name Data Type Description

DeleteResult

Array

An array of objects holding a list of return values. The objects are returned in the order they are deleted: first in, first out. This array contains one DeleteResult object per input APIObject.

## Related Topics

- more processing options (atlas.en-us.noversion.mc-apis.meta/mc-apis/deleteoptions.htm)
