---
title: "Insurance Contract from Quote (POST)"
domain: insurance-developer-guide
topic: insurance-contract-from-quote-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.090Z
estimatedTokens: 315
keywords: [Insurance, Contract, Quote, POST, group, benefits, API, supports, asynchronous, operation, long-running, conversions]
---

# Insurance Contract from Quote (POST)

> Create a group benefits contract from a quote. This API supports asynchronous operation
  for long-running conversions.

# Insurance Contract from Quote (POST)

Create a group benefits contract from a quote. This API supports asynchronous operation for long-running conversions.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | Contract Item[] | List of additional fields to add to contract items. | Optional | 65.0 |
| contractEndDate | String | End date of the contract. | Required | 65.0 |
| contractStartDate | String | Start date of the contract. | Required | 65.0 |
| contractTerm | Integer | Contract terms in months. | Optional | 65.0 |
| enrollmentEndDate | String | End date for plan enrollment. | Optional | 65.0 |
| enrollmentStartDate | String | Start date for plan enrollment. | Optional | 65.0 |
| quoteId | String | ID of the quote to create the contract from. | Required | 65.0 |

Response body for POST

[Contract Creation Response](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_contract_creation_output.htm "Output representation of the group benefits Quote-to-Contract process.")

## Code Examples

```
/connect/insurance/contracts
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/contracts
```

```
{
  "quoteId": "0Q0SG000000DQA00AO",
  "contractStartDate": "2025-03-11",
  "contractEndDate": "2026-03-11",
  "enrollmentStartDate": "2025-01-01",
  "enrollmentEndDate": "2025-02-01",
  "contractTerm": 1,
  "additionalFields": [
    {
      "entity": "Contract",
      "fields": {
        "data": [
          {
            "key": "CustomerSignedTitle",
            "value": "Mr"
          }
        ]
      }
    },
    {
      "entity": "ContractGroupPlan",
      "instanceKey": "d5861be1-9920-42d9-8f43-093b0a709d35",
      "fields": {
        "data": [
          {
            "key": "EligibilityCriteria",
            "value": "testcriteria"
          }
        ]
      }
    }
  ]
}
```

## Related Topics

- Contract
            Item (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_contract_item.htm)
- Contract Creation
       Response (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_contract_creation_output.htm)
