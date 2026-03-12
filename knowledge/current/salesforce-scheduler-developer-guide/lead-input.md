---
title: "Lead Input"
domain: salesforce-scheduler-developer-guide
topic: lead-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.300Z
estimatedTokens: 143
keywords: [Lead, Input]
---

# Lead Input

> Lead input.

# Lead Input

Lead input.

Root XML tag

<lead>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| company | String | Lead’s company. | Optional | 48.0 |
| email | String | Lead’s email address. | Optional | 48.0 |
| extendedFields | Extended Fields Input[] | Custom fields. | Optional | 48.0 |
| firstName | String | Lead’s first name. | Optional | 48.0 |
| lastName | String | Lead’s last name. | Required | 48.0 |
| phone | String | Lead’s phone number. | Optional | 48.0 |

## Code Examples

```
{
  "lead": {
    "firstName": "Rachel",
    "lastName": "Adams",
    "phone": "012-345-6789",
    "email": "rachel.adams@jpmc.com",
    "company": "Salesforce",
    "extendedFields": []
  }
}
```

## Related Topics

- Extended Fields Input (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_extended_fields_input.htm)
