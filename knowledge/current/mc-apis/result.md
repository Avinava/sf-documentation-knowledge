---
title: "Result"
domain: mc-apis
topic: result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:23.416Z
estimatedTokens: 263
keywords: [Result, base, objects]
---

# Result

> The Result object is the base class for all result objects.

# Result

The Result object is the base class for all result objects.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| ConversationID | xsd:string | Unique ID of initial async API call. All requests that are processed as a single unit have the same ConversationID. |
| ErrorCode | xsd:int | Identifies the error of an API request via a numeric code. |
| OrdinalID | xsd:int | Defines position of object within an array of information. |
| OverallStatusCode | xsd:string | Represents overall status of conversation via async API. |
| RequestID | xsd:string | Unique ID of initial async API call. |
| RequestType | RequestType | Defines request as synchronous or asynchronous API. |
| ResultDetailXML | xsd:string | Contains details of operation result in XML format. |
| ResultType | xsd:string | Defines result as coming from synchronous or asynchronous API. |
| StatusCode | xsd:string | Status of async API request. Valid values include:OKHas ErrorError |
| StatusMessage | xsd:string | Describes the status of an API call. |
