---
title: "Ethoca Event"
domain: financial-services-cloud-object-reference
topic: ethoca-event
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:34.626Z
estimatedTokens: 93
keywords: [Ethoca, Event, payload]
---

> Ethoca event payload.

# Ethoca Event

Ethoca event payload.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| eventType | String | Type of event. | Required | 60.0 |
| id | String | ID of the event. | Required | 60.0 |
| resourceLink | Ethoca Links | Resource link for the event. | Required | 60.0 |

## Code Examples

```
{
  "id": "3a375ce5-5e1d-40a7-97b5-1514a0876364",
  "eventType": "Batch Processed",
  "resourceLink": {
    "resource": "https://www.ethocaweb.com/ethoca-rest/rest/api/v1/transactions/batch/3a375ce5-5e1d-40a7-97b5-1514a0876364"
  }
}
```

## Related Topics

- Ethoca Links (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_ethoca_links.htm)
