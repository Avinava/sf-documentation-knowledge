---
title: "Service Process"
domain: omnistudio
topic: service-process
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:48.315Z
estimatedTokens: 334
keywords: [Service, Process]
---

# Service Process

> Create a service process.

# Service Process

Create a service process.

Resource

```

```

Available version

57.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributes | Map<String, Generic Object> | Field name-value pairs, object names and field name-value pairs, or both. The attributes property populates the base and extended attributes defined in Service Process Studio and must match their structure. | Required | 57.0 |
| caseInfo | Map<String, Generic Object> | Field name-value pairs for the Case object. | Optional | 57.0 |
| documentInfo | Document Info Attributes[] | List of documents. | Optional | 57.0 |
| svcCatalogItem​DefApiName | String | API Name of the related Service Catalog Item Definition. See SvcCatalogItemDef. | Required | 57.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| serviceProcessRequestData | Object | Top-level parameter for the request body. | Required | 57.0 |

Response body for POST

[Service Process Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_service_process2.htm "Output for creating a service process.")

## Code Examples

```
/connect/service-excellence/service-catalog-request
```

```
{
  "attributes": {
    "data": {
      "IncidentDate": {
        "value": "2023-03-10"
      },
      "ProductType": {
        "value": "ATM / debit card"
      },
      "CaseParticipantInfo": {
        "value": [
          {
            "Participant": "003xx000004WhGKAA0",
            "Status": "Active",
            "age_of_participant": 30
          },
          {
            "Participant": "003xx000004WhGdAAK",
            "Status": "Active",
            "age_of_participant": 20
          }
        ]
      },
      "accountInfo": {
        "value": [
          {
            "accountId": "001B000001UZDhOIAX",
            "accountName": "Rachael Adams"
          },
          {
            "accountId": "001B000001Ua331IAB",
            "accountName": "Robert Williams"
          }
        ]
      },
      "case_status": {
        "value": "Active"
      },
      "case_description": {
        "value": "Sample test"
      },
      "base_field": {
        "value": "Value on base field"
      },
      "cities": {
        "value": [
          "Delhi",
          "Hyderabad"
        ]
      }
    }
  },
  "documentInfo": {
    "data": [
      {
        "id": "069xx0000004C92AAE",
        "name": "Addhar",
        "typeId": "2F0dexx0000000001"
      }
    ]
  },
  "svcCatalogItemDefApiName": "fsc_complaint_management"
}
```

## Related Topics

- Generic Object (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_generic_object.htm)
- Document Info Attributes (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_service_process_doc_info_input.htm)
- Service Process Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_service_process2.htm)
