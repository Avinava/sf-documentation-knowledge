---
title: "Composite Response Body"
domain: tooling-api
topic: composite-response-body
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:46:39.019Z
keywords: [Composite, Response, Body, Results, Subrequest, Result]
---

# Composite Response Body

# Composite Response Body

Describes the result of a /composite request.

## Composite Results

Properties

| Name | Type | Description |
| --- | --- | --- |
| compositeResponse | Composite Subrequest Result[] | Collection of subrequest results |

JSON Example

```

```

## Composite Subrequest Result

Properties

| Name | Type | Description |
| --- | --- | --- |
| body | The type depends on the response type of the subrequest. | The response body of this subrequest. If the subrequest returns an error, the body includes the error code and message. |
| httpHeaders | Map<String, String> | Response headers and their values for this subrequest. The /composite resource doesn’t support the Content-Length header, so subrequest responses don’t include this header and neither does the top-level response. |
| httpStatusCode | Integer | An HTTP status code for this subrequest. If allOrNone is set to true in the composite request and a subrequest returns an error, all other subrequests return the 400 HTTP status code. |
| referenceID | String | The reference ID specified in the subrequest. Use this property to associate subrequests with their results. |

JSON example

```

```