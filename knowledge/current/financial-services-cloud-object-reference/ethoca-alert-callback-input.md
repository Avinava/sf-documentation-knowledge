---
title: "Ethoca Alert Callback Input"
domain: financial-services-cloud-object-reference
topic: ethoca-alert-callback-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.310Z
estimatedTokens: 81
keywords: [Ethoca, Alert, Callback, Input, payload, transaction, dispute, management]
---

# Ethoca Alert Callback Input

> Ethoca alert input payload for transaction dispute management.

# Ethoca Alert Callback Input

Ethoca alert input payload for transaction dispute management.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| ethocaInput​Payload | Ethoca Event[] | Ethoca event input payload. | Required | 60.0 |

## Code Examples

```
{
  "ethocaInputPayload": {
    "events": [
      {
        "id": "3a375ce5-5e1d-40a7-97b5-1514a0876364",
        "eventType": "Batch Processed",
        "resourceLink": {
          "resource": "https://www.ethocaweb.com/ethoca-rest/rest/api/v1/transactions/batch/3a375ce5-5e1d-40a7-97b5-1514a0876364"
        }
      },
      {
        "id": "3a375ce5-5e1d-40a7-97b5-1514a0876365",
        "eventType": "Batch Processed",
        "resourceLink": {
          "resource": "https://www.ethocaweb.com/ethoca-rest/rest/api/v1/transactions/batch/3a375ce5-5e1d-40a7-97b5-1514a0876365"
        }
      }
    ]
  }
}
```

## Related Topics

- Ethoca Event (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_ethoca_event.htm)
