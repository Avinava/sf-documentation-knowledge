---
title: "Update"
domain: mc-apis
topic: update
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:25.586Z
estimatedTokens: 393
keywords: [individual, batch, objects, Multiple, updated, call, Output, Updates, batches, Input]
---

# Update

> Updates individual objects or batches of objects.

# Update

Updates individual objects or batches of objects.

### Parameters

| Name | Data Type | Description |
| --- | --- | --- |
| Objects | APIObject[] | A collection of objects. |
| Options | UpdateOptions | Optionally specifies processing options. |
| OverallStatus | String | Specifies the overall status of the request. |
| RequestID | String | Marketing Cloud's unique identifier for every request. |

### Description

The Update method allows objects to be updated-individually or in batches. Multiple object types can be updated with one call. Objects are created in the order they are added to the APIObject array.

### Input

-   UpdateOptions - An UpdateOptions instance is required for this parameter, but you don't need to define properties for the instance.
-   APIObjects - An array of objects to be acted upon. The objects are acted on in the order they have been added - first in, first out. This array can hold different object types. Therefore, complex interactions like updating an email, a list, and an email can be accomplished in one call.
-   RequestKey - This parameter contains a string value containing an output variable of the key of the request. By default, this value is a Marketing Cloud generated GUID.
-   OverallStatus - This parameter returns a string value containing the overall status of the request. Valid status values include:
    -   OK - Status code stating that all objects were updated successfully.
    -   Has Error - Valid for Update calls with multiple APIObject objects, this status code states that some of the operations failed, while some succeeded.
    -   Error - This status code states that all update operations failed during validation or processing.

Don't use the Update method to create objects. Trying to create objects using the Update method causes the overall status to not be Has Error or Error.

-   UpdateResult - An array of objects holding a list of return values. The objects are returned in the order acted upon: first in, first out. This array contains one UpdateResult object per input APIObject.

## Code Examples

```
UpdateResult[] update = Update(Options, Objects, RequestID, OverallStatus)
```

## Related Topics

- more processing options (atlas.en-us.noversion.mc-apis.meta/mc-apis/updateoptions.htm)
