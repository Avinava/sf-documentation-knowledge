---
title: "Batch Response Body"
domain: rest-api
topic: batch-response-body
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:44:25.804Z
keywords: [Batch, Response, Body, Results, Subrequest, Result]
---

# Batch Response Body

# Batch Response Body

Describes the result of a Composite Batch request.

## Batch Results

Properties

| Name | Type | Description |
| --- | --- | --- |
| hasErrors | Boolean | true if at least one of the results in the result set is an HTTP status code in the 400 or 500 range; false otherwise. |
| results | Subrequest Result[] | Collection of subrequest results. |

JSON example

```

```

## Subrequest Result

Properties

| Name | Type | Description |
| --- | --- | --- |
| result | The type depends on the response type of the subrequest.ImportantIf the result is an error, the type is a collection containing the error message and error code. | The response body of this subrequest. |
| statusCode | Integer | An HTTP status code indicating the status of this subrequest. |

JSON example

```

```