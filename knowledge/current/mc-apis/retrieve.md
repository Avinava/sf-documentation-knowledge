---
title: "Retrieve"
domain: mc-apis
topic: retrieve
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:18.644Z
estimatedTokens: 415
keywords: [Retrieve, retrieves, Apply, filters, ensure, relevant, results]
---

> Use the Retrieve method to return a single object type. This method retrieves only the specified object properties for properties that have values. Apply filters to ensure that you get only relevant results.

# Retrieve

Use the Retrieve method to return a single object type. This method retrieves only the specified object properties for properties that have values. Apply filters to ensure that you get only relevant results.

## C# Syntax

```apex
System.String retrieve = Retrieve(RetrieveRequest, RequestID, Results)
```

## Parameters

| Name | Data Type | Description |
| --- | --- | --- |
| RequestID | String | Marketing Cloud's unique identifier for every request. This parameter contains a string value containing an output variable of the key of the request. By default, this value is a Marketing Cloud-generated GUID. |
| Results | APIObject[]& | A collection of one or more objects to retrieve. This array contains one APIObjects object for each object that meets the retrieve criteria. To use the APIObject, cast the object into the object type specified in the string value of the ObjectType property. Then you are able to access the properties of the strongly typed object defined by the Properties property. |
| RetrieveRequest | RetrieveRequest | Specifies a request to retrieve data. A RetrieveRequest instance is required for this parameter. |

## Output

OverallStatus - A string value containing the overall status of the request. Valid status values include:

-   OK - All objects were successfully retrieved.
-   Error - this status means that an error occurred during the retrieve option. The first step to resolve this error is to verify the value of the Properties property.
-   MoreDataAvailable - this status means that more data is available for the RetrieveRequest. A RetrieveRequest returning more than 2500 records has this status.
