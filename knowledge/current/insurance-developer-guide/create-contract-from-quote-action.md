---
title: "Create Contract From Quote Action"
domain: insurance-developer-guide
topic: create-contract-from-quote-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.527Z
estimatedTokens: 205
keywords: [Contract, Quote, Action, group, insurance, REST, HTTP, Inputs, Outputs]
---

# Create Contract From Quote Action

> Create a group insurance contract from a quote.

# Create Contract From Quote Action

Create a group insurance contract from a quote.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/createContractFromQuote

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| insuranceContractCreationInputRepresentation | TypeApex-definedDescriptionRequired.An Apex ConnectApi.InsuranceContractCreationInputRepresentation object that contains the details of the contract to be created. |

## Outputs

| Output | Details |
| --- | --- |
| requestId | TypestringDescriptionID of the asynchronous request that's created when the contract service is initiated. |

## Example

Sample Request

```

```

Sample Response

```

```

## Code Examples

```
{
  "inputs": [
    {
      "insuranceContractCreationInputRepresentation": {
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
    }
  ]
}
```

```
[
  {
    "actionName": "createContractFromQuote",
    "errors": null,
    "isSuccess": true,
    "outputValues": {
      "requestId": "15Uxx0000004XYZABC"
    }
  }
]
```

## Related Topics

- ConnectApi.InsuranceContractCreationInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_contract_creation.htm)
