---
title: "Error Response"
domain: insurance-developer-guide
topic: error-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.454Z
estimatedTokens: 129
keywords: [Error, Output, representation]
---

# Error Response

> Output representation of the error details.

# Error Response

Output representation of the error details.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| detail | String | Description of the error. | Small, 62.0 | 62.0 |
| errors | Error Details[] | Error details for the API process. | Small, 62.0 | 62.0 |
| instance | String | Instance where the error occurred. | Small, 62.0 | 62.0 |
| title | String | Short label for the error type. | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "detail": "Looks like you don't have access to this feature. Your Salesforce admin can help with that.",
  "errors": [
    {
      "code": "INTERNAL_ERROR",
      "message": "Something went wrong. Try again later or contact your Salesforce admin for help."
    }
  ],
  "instance": "",
  "title": "Access Denied"
}
```

## Related Topics

- Error Details (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_error_details_output.htm)
