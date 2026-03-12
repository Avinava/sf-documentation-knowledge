---
title: "Plan Benefits Product Model (GET)"
domain: insurance-developer-guide
topic: plan-benefits-product-model-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.301Z
estimatedTokens: 271
keywords: [Plan, Benefits, Product, Model, along, child, components, their, attributes, insurance, policy, coverage]
---

# Plan Benefits Product Model (GET)

> Get the product model details along with child components and their attributes for a
    given insurance policy coverage.

# Plan Benefits Product Model (GET)

Get the product model details along with child components and their attributes for a given insurance policy coverage.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=insurance_developer_guide)

#### Note

See [Prerequisites](https://help.salesforce.com/s/articleView?id=ind.insurance_brokerage_product_modelling_prerequisites.htm&type=5&language=en_US) to define the product model structure. If this model isn't followed, the API throws an error.

Resource

```

```

Resource example

```

```

Available version

63.0

HTTP methods

GET

Path parameter for GET

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| coverageId | String | ID of insurance policy coverage. | Required | 63.0 |

Response body for GET

[Plan Benefits Product Model](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_plan_benefits_product_model_output.htm "Output representation of the product model details and associated product components.")

## Code Examples

```
/connect/insurance/brokerage/coverages/coverageId/benefits/product
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/brokerage/coverages/coverageId/benefits/product
```

## Related Topics

- Plan Benefits Product Model (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_plan_benefits_product_model_output.htm)
