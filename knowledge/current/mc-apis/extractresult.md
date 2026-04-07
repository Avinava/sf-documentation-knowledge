---
title: "ExtractResult"
domain: mc-apis
topic: extractresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:16.977Z
estimatedTokens: 315
keywords: [ExtractResult, result, extract, includes, applicable, status, error, code, multiple, call]
---

> The ExtractResult object contains result of an extract request. Returned information includes applicable status and error code information. You can have multiple ExtractResult objects returned as the result of a single call.

# ExtractResult

The ExtractResult object contains result of an extract request. Returned information includes applicable status and error code information. You can have multiple ExtractResult objects returned as the result of a single call.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| ConversationID | xsd:string | Unique ID of initial async API call. All requests that are processed as a single unit have the same ConversationID. |
| ErrorCode | xsd:int | Identifies the error of an API request via a numeric code. |
| OrdinalID | xsd:int | Defines position of object within an array of information. |
| OverallStatusCode | xsd:string | Represents overall status of conversation via async API. |
| Request | ExtractRequest | Base objects for some types of requests. |
| RequestID | xsd:string | Unique ID of initial async API call. |
| RequestType | RequestType | Defines request as synchronous or asynchronous API. |
| ResultDetailXML | xsd:string | Contains details of operation result in XML format. |
| ResultType | xsd:string | Defines result as coming from synchronous or asynchronous API. |
| StatusCode | xsd:string | Status of async API request. |
| StatusMessage | xsd:string | Describes the status of an API call. |
