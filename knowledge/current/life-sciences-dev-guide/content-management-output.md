---
title: "Content Management Output"
domain: life-sciences-dev-guide
topic: content-management-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.744Z
estimatedTokens: 179
keywords: [Content, Management, Output, job, status, any, associated, messages, APIs]
---

# Content Management Output

> Represents the information about the job status and any associated messages returned
        for Content Management APIs.

# Content Management Output

Represents the information about the job status and any associated messages returned for Content Management APIs.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| isSuccess | Boolean | Indicates whether the request was successfully accepted or processed. | Small, 65.0 | 65.0 |
| message | String | Message that provides details about the request outcome. | Small, 65.0 | 65.0 |
| errors | List<String> | List of errors that occurred during the request validation. | Small, 65.0 | 65.0 |
| jobId | String | Job ID of the asynchronous processing of the request. | Small, 65.0 | 65.0 |

Example

```

```

## Code Examples

```
{
                            "isSuccess": true,
                            "message": "Create Presentation Request Accepted for processing",
                            "errors": [],
                            "jobId": "20V**********"
                            }
```
