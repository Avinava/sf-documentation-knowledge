---
title: "Ingest Promotions Input"
domain: retail-api
topic: ingest-promotions-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.919Z
estimatedTokens: 160
keywords: [Ingest, Promotions, Input, representation]
---

# Ingest Promotions Input

> Input representation of the ingest promotions
    request.

# Ingest Promotions Input

Input representation of the ingest promotions request.

Root XML tag

POST promotions/ingest

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| importId | Integer | ImportId of the process. If not passed, a new import transaction will be created. | Optional | 55 |
| workflow | Integer | Promotion Business Object API workflow name to execute. | Required | 55 |
| salesOrg | SalesOrgName | Sales organization. | Optional | 55 |
| promotions | List <Object> | List of Promotion payloads. Max 50 items. | Required | 55 |

## Code Examples

```
{
    "workflow" : "Create",
    "importId" : "12345678-1234-1234-1234-123456789012",
    "salesOrg" : "0001",
    "promotions": [
    {
      "AnchorAccount": "CS_Atlanta",// external Id
      "PromotionTemplate": "Customer Promotion",
      "Comment": "250aup new bom gcp",
      "Slogan": "250aup new bom gcp ",
      "DateFrom": "2024-01-01",
      "DateThru": "2024-12-31",
      "PlacementDateFrom": "2024-03-01",
      "PlacementDateThru": "2024-04-30",
      "DeliveryDateFrom": "2024-08-01",
      "DeliveryDateThru": "2024-09-30",
      "OrderDateFrom": "2024-06-01",
      "OrderDateThru": "2024-07-30",
      "CommitDate": "2024-01-10",
      "ProductFilter": {
        "Criteria": {
          "Category": [
            "Snacks",
            "Beverages"
          ],
          "Brand": [
            "Empower_Cola",
            "HiChoc"
          ]
        }
      },
      "ManualInputs": [
        {
          "KPI": "ProPlanTotalVolume",
          "Value": 900000
        }
      ],
      "Tactics": [
        {
          "Amount": 2500,
          "CompensationModel": "PerCase",
          "DateFrom": "2024-05-01",
          "DateThru": "2024-07-30",
          "InStoreDateFrom": "2024-05-01",
          "InStoreDateThru": "2024-07-15",
          "ShipmentDateFrom": "2024-05-16",
          "ShipmentDateThru": "2024-07-30",
          "TacticTemplate": "PriceReduction"
        }
      ]
    }
  ]
}
```
