---
title: "Insurance Product Clause Generation (POST)"
domain: insurance-developer-guide
topic: insurance-product-clause-generation-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.235Z
estimatedTokens: 279
keywords: [Insurance, Product, Clause, Generation, POST, Generate, clauses, quote, context]
---

# Insurance Product Clause Generation (POST)

> Generate product clauses based on quote and context
  information.

# Insurance Product Clause Generation (POST)

Generate product clauses based on quote and context information.

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
| contextId | String | ID of the context based on which the product clause is generated. | Required if quoteId isn't specified | 65.0 |
| instanceKeys | Instance Key Input[] | List of instance keys. | Optional | 65.0 |
| options | Clause Generation Options Input | Options for clause generation. | Optional | 65.0 |
| quoteId | String | ID of the quote. | Required if contextId isn't specified | 65.0 |
| quote​LineItem​Ids | String[] | IDs of the quote line items. | Optional | 65.0 |

Response body for POST

[Product Clause Generation Details](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_clause_generation_output.htm "Output representation of the details for a clause generation request.")

## Code Examples

```
/connect/insurance/product-clauses/clause-generation
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/product-clauses/clause-generation
```

```
{
  "quoteId": "0Q0xx0000000001AAA",
  "contextId": "0000000i18tq18g0025175944829641764efd423f7dc44b98dd1e829086efc59",
  "quoteLineItemIds": [
    "0QLxx0000000003CCC"
  ],
  "instanceKeys": [
    {
      "instanceKey": [ "Auto", "Liability" ]
    }
  ],
  "options": {
    "generateClausesAsync": true,
    "generateManualClauses": false,
    "saveContext": true
  }
}
```

## Related Topics

- Instance Key Input[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_instance_key_input.htm)
- Clause Generation Options Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_clause_generation_options_input.htm)
- Product Clause Generation
       Details (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_clause_generation_output.htm)
