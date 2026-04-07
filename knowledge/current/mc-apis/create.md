---
title: "Create"
domain: mc-apis
topic: create
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:15.903Z
estimatedTokens: 454
keywords: [individual, batch, Multiple, created, call, Creates]
---

> Creates an individual object or a batch of objects.

# Create

Creates an individual object or a batch of objects.

### Parameters

| Name | Data Type | Description |
| --- | --- | --- |
| Objects | APIObject[] | A collection of objects. |
| Options | UpdateOptions | Optionally specifies processing options. |
| OverallStatus | String | Specifies the overall status of the request. |
| RequestID | String | Marketing Cloud's unique identifier for every request. |

### Description

The Create method allows objects to be created-individually or in batches. Multiple object types can be created with one call. Objects are created when they are added to the APIObject array.

### Input

-   CreateOptions - A CreateOptions instance is required for this parameter, but you don't need to define properties for the instance.
-   APIObjects - An array of objects to be acted upon. The objects are acted on in the order they have been added - first in, first out. This array can hold different object types. Therefore, complex interactions like creating an email, creating a list, and sending the email can be accomplished in one call.
-   RequestID - This parameter contains a string value containing an output variable of the key of the request. By default, this value is a Marketing Cloud generated GUID (Globally Unique Identifier).
-   OverallStatus - This parameter returns a string value containing the overall status of the request. Valid status values include:
    -   OK - This status code states that all objects were successfully created.
    -   Has Error -Valid for Create method calls with multiple APIObject objects, this status code states that some of the operations failed, while some succeeded.
    -   Error - This status code states that all create operations failed during validation or processing.

Don't use existing objects with the Create method. Adding existing objects to the Create method causes the overall status to Has Error or Error.

### Output

-   CreateResult - An array of objects holding a list of return values. The objects are returned in the order acted upon: first in, first out. This array contains one CreateResult object per input APIObject.

## Code Examples

```
CreateResult[] create = Create(Options, Objects, RequestID, OverallStatus)
```

## Related Topics

- more processing options (atlas.en-us.noversion.mc-apis.meta/mc-apis/createoptions.htm)
