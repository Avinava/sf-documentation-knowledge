---
title: "ExecuteResponse"
domain: mc-apis
topic: executeresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:16.924Z
estimatedTokens: 190
keywords: [ExecuteResponse, responses, API, execute, Items]
---

> The ExecuteResponse object contains responses returned by the API for execute calls.

# ExecuteResponse

The ExecuteResponse object contains responses returned by the API for execute calls.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| ErrorCode | xsd:int | Identifies the error of an API request via a numeric code. |
| OrdinalID | xsd:int | Defines position of object within an array of information. |
| Results | APIProperty[] | Contains the combination of names and values for the returned results. |
| StatusCode | xsd:string | Status of async API request. |
| StatusMessage | xsd:string | Describes the status of an API call. |

## Related Items

[Retrieve the Email Folder Hierarchy](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_the_email_folder_hierarchy.htm "Retrieving_the_Email_Folder_Hierarchy")

## Related Topics

- Retrieve the Email Folder Hierarchy (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_the_email_folder_hierarchy.htm)
