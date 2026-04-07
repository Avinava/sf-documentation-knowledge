---
title: "PerformResult"
domain: mc-apis
topic: performresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:18.132Z
estimatedTokens: 289
keywords: [PerformResult, results, Perform, call]
---

> The PerformResult object contains the results of a Perform call.

# PerformResult

The PerformResult object contains the results of a Perform call.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| ConversationID | xsd:string | Unique ID of initial async API call. All requests that are processed as a single unit have the same ConversationID. |
| ErrorCode | xsd:int | Identifies the error of an API request via a numeric code. |
| Object | APIObject | Specifies definition of object. |
| OrdinalID | xsd:int | Defines position of object within an array of information. |
| OverallStatusCode | xsd:string | Represents overall status of conversation via async API. |
| RequestID | xsd:string | Unique ID of initial async API call. |
| RequestType | RequestType | Defines request as synchronous or asynchronous API. |
| ResultDetailXML | xsd:string | Contains details of operation result in XML format. |
| ResultType | xsd:string | Defines result as coming from synchronous or asynchronous API. |
| StatusCode | xsd:string | Status of async API request. |
| StatusMessage | xsd:string | Describes the status of an API call. |
| Task | TaskResult | Identifier of scheduled task as part of results. |
