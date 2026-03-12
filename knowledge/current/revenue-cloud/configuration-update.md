---
title: "Configuration Update"
domain: revenue-cloud
topic: configuration-update
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.049Z
estimatedTokens: 153
keywords: [Configuration, Output, representation, updated]
---

# Configuration Update

> Output representation of the details of the updated configuration.

# Configuration Update

Output representation of the details of the updated configuration.

JSON example

This example shows a sample when the update operation is successful.

```

```

This example shows a sample when the update operation has errors.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response | List of errors that contains a message and an error code. | Small, 63.0 | 63.0 |
| success | Boolean | Indicates whether the update operation is successful (true) or not (false) | Small, 63.0 | 63.0 |

## Code Examples

```
{
  "errors": [],
  "success": true
}
```

```
{
  "errors": [
    {
      "code": "INTERNAL_SERVER_ERROR",
      "message": "INVALID_REFERENCEOBJECTID"
    }
  ],
  "success": false
}
```

## Related Topics

- Error Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_configuration_list_error_response.htm)
