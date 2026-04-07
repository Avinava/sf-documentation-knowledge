---
title: "TaskResult"
domain: mc-apis
topic: taskresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:20.645Z
estimatedTokens: 188
keywords: [TaskResult, result, task]
---

> The TaskResult object contains the result information of a task from the Returns object.

# TaskResult

The TaskResult object contains the result information of a task from the Returns object.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| ErrorCode | xsd:int | Identifies the error of an API request via a numeric code. |
| ID | xsd:string | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| InteractionObjectID | xsd:string | Returns associated ID for activities within the asynchronous process of the overall conversation or program. |
| OrdinalID | xsd:int | Defines position of object within an array of information. |
| StatusCode | xsd:string | Status of async API request. |
| StatusMessage | xsd:string | Describes the status of an API call. |
