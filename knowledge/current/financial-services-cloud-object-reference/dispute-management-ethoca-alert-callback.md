---
title: "Dispute Management Ethoca Alert Callback"
domain: financial-services-cloud-object-reference
topic: dispute-management-ethoca-alert-callback
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.420Z
estimatedTokens: 240
keywords: [Dispute, Management, Ethoca, Alert, Callback, Send, transaction]
---

# Dispute Management Ethoca Alert Callback

> Send an Ethoca alert callback for transaction dispute management.

# Dispute Management Ethoca Alert Callback

Send an Ethoca alert callback for transaction dispute management.

Resource

```

```

Available version

60.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| ethocaInput​Payload | Ethoca Event[] | Ethoca event input payload. | Required | 60.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dispute​Management​RequestData | Object | Top-level parameter for dispute management request data. | Required | 60.0 |

Response body for POST

[Ethoca Alert Callback Output](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_ethoca_alert_callback_output.htm "Ethoca alert callback output for dispute management.")

## Code Examples

```
/connect/dispute-management/third-party/ethoca/alert-callback
```

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
- Ethoca Alert Callback Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_ethoca_alert_callback_output.htm)
