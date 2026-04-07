---
title: "SystemStatusResult"
domain: mc-apis
topic: systemstatusresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:20.628Z
estimatedTokens: 311
keywords: [SystemStatusResult, result, GetCurrentStatus, call]
---

> The SystemStatusResult object contains the result of the GetCurrentStatus call.

# SystemStatusResult

The SystemStatusResult object contains the result of the GetCurrentStatus call.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| ConversationID | xsd:string | Unique ID of initial async API call. All requests that are processed as a single unit have the same ConversationID. |
| ErrorCode | xsd:int | Identifies the error of an API request via a numeric code. |
| OrdinalID | xsd:int | Defines position of object within an array of information. |
| Outages | SystemOutage[] | Specifies an array of outages. |
| OverallStatusCode | xsd:string | Represents overall status of conversation via async API. |
| RequestID | xsd:string | Unique ID of initial async API call. |
| RequestType | RequestType | Defines request as synchronous or asynchronous API. |
| ResultDetailXML | xsd:string | Contains details of operation result in XML format. |
| ResultType | xsd:string | Defines result as coming from synchronous or asynchronous API. |
| StatusCode | xsd:string | Status of async API request. |
| StatusMessage | xsd:string | Describes the status of an API call. |
| SystemStatus | SystemStatusType | Indicates status of the API system. Valid values include OK, UnplannedOutage, and InMaintenance. |
