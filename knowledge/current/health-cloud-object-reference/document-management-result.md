---
title: "Document Management Result"
domain: health-cloud-object-reference
topic: document-management-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.561Z
estimatedTokens: 160
keywords: [Document, Management, Result, Output, representation, split]
---

# Document Management Result

> Output representation of the document split request.

# Document Management Result

Output representation of the document split request.

JSON example

Example of a success response:

```

```

Example of an error response:

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contentDocumentId | String | The ID of the content document that is created after the request is successful. | Small, 55.0 | 55.0 |
| error | Error Response Output | Error representation. | Small, 55.0 | 55.0 |
| isSuccess | Boolean | Indicates whether the document split request is successful (true) or not (false). | Small, 55.0 | 55.0 |

## Code Examples

```
{
  "contentDocumentId": "069xx0000004D1sAAE",
  "isSuccess": true
}
```

```
{
  "error": {
    "code": "INVALID_INPUT",
    "message": "The ReceivedDocument field doesn’t exist in the specified DocumentChecklistItem object."
  },
  "isSuccess": false
}
```

## Related Topics

- Error Response Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_errors_response.htm)
