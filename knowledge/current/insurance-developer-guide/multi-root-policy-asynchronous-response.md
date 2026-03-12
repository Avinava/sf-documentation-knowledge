---
title: "Multi-Root Policy Asynchronous Response"
domain: insurance-developer-guide
topic: multi-root-policy-asynchronous-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.727Z
estimatedTokens: 132
keywords: [Multi-Root, Policy, Asynchronous, that's, processed, asynchronously]
---

# Multi-Root Policy Asynchronous Response

> Details of the multi-root policy that's processed asynchronously.

# Multi-Root Policy Asynchronous Response

Details of the multi-root policy that's processed asynchronously.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Error Output | List of errors that occurred during the processing of the API request. | Small, 66.0 | 66.0 |
| jobIdentifier | String | ID of the asynchronous job that's generated to process the multi-root policy along with its child policies. | Small, 66.0 | 66.0 |

## Code Examples

```
{
  "error": {
    "detail": "Error detail message.",
    "errors": [
      {
        "code": "ERROR_CODE",
        "message": "Error message."
      }
    ],
    "instance": "Instance info",
    "title": "Error Title"
  },
  "jobIdentifier": "08Pxx0000000001EAA"
}
```

## Related Topics

- Error Output (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_error_output.htm)
