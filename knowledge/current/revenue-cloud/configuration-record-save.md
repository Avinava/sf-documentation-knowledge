---
title: "Configuration Record Save"
domain: revenue-cloud
topic: configuration-record-save
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.631Z
estimatedTokens: 155
keywords: [Configuration, Record, Save, Output, representation, details, saved, configuration.]
---

# Configuration Record Save

> Output representation of the details of a saved configuration.

# Configuration Record Save

Output representation of the details of a saved configuration.

JSON example

This example shows a sample when the save operation is successful.

```

```

This example shows a sample when the save operation has errors.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response | List of errors that contains a message and an error code. | Small, 63.0 | 63.0 |
| id | String | ID of the configuration that's saved.This property isn't shown if the operation has errors. | Small, 63.0 | 63.0 |

## Code Examples

```
{
  "errors": [],
  "id": "1Nyxx0000004CNYCA2"
}
```

```
{
  "errors": [{
  "code": "INTERNAL_SERVER_ERROR",
  "message": "INVALID_REFERENCEOBJECTID"
}]
}
```

## Related Topics

- Error Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_configuration_list_error_response.htm)
