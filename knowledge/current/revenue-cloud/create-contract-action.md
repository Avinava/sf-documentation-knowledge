---
title: "Create Contract Action"
domain: revenue-cloud
topic: create-contract-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:03.679Z
estimatedTokens: 444
keywords: [Create, Contract, Action, contract, specific, quote, record., Special, Access, Rules, Supported, REST, HTTP, Inputs, Outputs, Example]
---

# Create Contract Action

> Create a contract from a specific quote record.

# Create Contract Action

Create a contract from a specific quote record.

This action is available in API version 60.0 and later.

## Special Access Rules

The Create Contract action is available in Developer, Enterprise, and Unlimited Editions of Revenue Cloud.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/createContract

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| contractPriceOption | TypestringDescriptionOptional.Determines how the contract price is set for quote line items based on the selected value.Valid values are:CONTRACT_HEADER_ONLY—Creates a contract with only the header information, without using net prices or discounts.NET_UNIT_PRICE_ONLY—Creates a contract specifically for quote line items with a net unit price, saving all net unit prices of the quote as contract prices.DISCOUNT_ONLY—Creates contract prices specifically for quote line items with discounts, saving all discounts of the quote as contract prices.The default value is CONTRACT_HEADER_ONLY. |
| sourceId | TypestringDescriptionRequired.ID of the quote or order that you want to create a contract from. |

## Outputs

| Output | Details |
| --- | --- |
| contractId | TypestringDescriptionID of the contract created for the specified order or quote. |

## Example

POST

This sample request is for the Create Contract action.

```

```

This sample response is for the Create Contract action.

```

```

#### See Also

-   [*Salesforce Help*: Use a Custom Flow to Create Contracts](https://help.salesforce.com/s/articleView?id=ind.qocal_create_contracts_using_a_flow.htm&type=5&language=en_US "Salesforce Help: Use a Custom Flow to Create Contracts - HTML (New Window)")

## Code Examples

```
{
  "inputs": [
    {
      "sourceId": "0Q0RO0000003LyU",
      "contractPriceOption": "NET_UNIT_PRICE_ONLY"
    }
  ]
}
```

```
[
  {
    "actionName": "createContract",
    "errors": null,
    "isSuccess": true,
    "outputValues": {
      "contractId": "800XXX123456789"
    }
  }
]
```
