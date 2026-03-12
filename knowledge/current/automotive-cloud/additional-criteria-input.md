---
title: "Additional Criteria Input"
domain: automotive-cloud
topic: additional-criteria-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.814Z
estimatedTokens: 89
keywords: [Additional, Criteria, Input, representation, event, generated, inbound, events]
---

# Additional Criteria Input

> Input representation of the additional event criteria generated during inbound
    events.

# Additional Criteria Input

Input representation of the additional event criteria generated during inbound events.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldList | Field Match[] | List of field matches during incoming events. | Optional | 60.0 |

## Code Examples

```
{
  "additionalEventCriteria": {
    "fieldList": [
      {
        "field": "priority__c",
        "value": "high"
      }
    ]
  }
}
```

## Related Topics

- Field
                        Match[] (atlas.en-us.automotive_cloud.meta/automotive_cloud/connect_requests_field_list.htm)
