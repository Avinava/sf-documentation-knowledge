---
title: "UpdateResult"
domain: mc-apis
topic: updateresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:20.973Z
estimatedTokens: 366
keywords: [UpdateResult, results, order, acted, upon, array, per, APIObject]
---

> The UpdateResult object contains results of each object in an Update request. The objects are returned in the order acted upon: first in, first out. This array contains one UpdateResult object per input APIObject.

# UpdateResult

The UpdateResult object contains results of each object in an Update request. The objects are returned in the order acted upon: first in, first out. This array contains one UpdateResult object per input APIObject.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| ConversationID | xsd:string | Unique ID of initial async API call. All requests that are processed as a single unit have the same ConversationID. |
| ErrorCode | xsd:int | Identifies the error of an API request via a numeric code. |
| Object | APIObject | Specifies definition of object. |
| OrdinalID | xsd:int | Defines position of object within an array of information. |
| OverallStatusCode | xsd:string | Represents overall status of conversation via async API. |
| ParentPropertyName | xsd:string | Identifies parent node of property; populated in nested Create results. Deprecated. |
| RequestID | xsd:string | Unique ID of initial async API call. |
| RequestType | RequestType | Defines request as synchronous or asynchronous API. |
| ResultDetailXML | xsd:string | Contains details of operation result in XML format. |
| ResultType | xsd:string | Defines result as coming from synchronous or asynchronous API. |
| StatusCode | xsd:string | Status of async API request. |
| StatusMessage | xsd:string | Describes the status of an API call. |
| UpdateResults | UpdateResult[] | Indicates error information associated with an update to a data extension. |
