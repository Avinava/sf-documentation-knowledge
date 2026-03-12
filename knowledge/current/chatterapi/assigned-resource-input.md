---
title: "Assigned Resource Input"
domain: chatterapi
topic: assigned-resource-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.975Z
estimatedTokens: 200
keywords: [Assigned, Resource, Input, representation]
---

# Assigned Resource Input

> Input representation of the assigned resource
    details.

# Assigned Resource Input

Input representation of the assigned resource details.

Root XML tag

<assignedResources>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| extended​Fields | Extended Fields Input[] | Custom fields. | Optional | 48.0 |
| isPrimary​Resource | Boolean | Indicates whether the assigned resource is the primary resource. For multi-resource appointments, only one resource can be a primary resource. | Required if multi-resource scheduling is enabled. | 48.0 |
| isRequired​Resource | Boolean | Indicates whether the assigned resource is a required resource. | Required | 48.0 |
| service​ResourceId | String | Resource who is assigned to the service appointment. | Required | 48.0 |

## Code Examples

```
{
  "assignedResources": [
    {
      "serviceResourceId": "0HnRM0000004Gzy0AE",
      "isRequiredResource": true,
      "isPrimaryResource": true,
      "extendedFields": []
    },
    {
      "serviceResourceId": "0HnRM0000004Mln0AE",
      "isRequiredResource": true,
      "isPrimaryResource": false,
      "extendedFields": []
    }
  ]
}
```

## Related Topics

- Extended Fields Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_extended_fields_input.htm)
