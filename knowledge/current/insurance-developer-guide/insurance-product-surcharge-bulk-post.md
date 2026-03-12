---
title: "Insurance Product Surcharge Bulk (POST)"
domain: insurance-developer-guide
topic: insurance-product-surcharge-bulk-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.323Z
estimatedTokens: 174
keywords: [Insurance, Product, Surcharge, Bulk, POST, surcharges, associate, root]
---

# Insurance Product Surcharge Bulk (POST)

> Create one or more product surcharges to associate with a root product.

# Insurance Product Surcharge Bulk (POST)

Create one or more product surcharges to associate with a root product.

Resource

```

```

Resource example

```

```

Available version

63.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| records | Product Surcharge Post Input[] | List of the product surcharges. | Required | 63.0 |

Response body for POST

[Product Surcharge List](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_product_surcharge_list_output.htm "Output Representation for List of ProductSurcharge")

## Code Examples

```
/connect/insurance/product-surcharges/bulk
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/product-surcharges/bulk
```

```
{
    "records": [
        {
            "name": "AutoVehicleTax",
            "surchargeId": "01cLO000000EMslOKL",
            "rootProductId": "01tDR000000EMslYAG",
            "productPath": "01tDR000000EMslYAG/11BDR00000000T72AI",
            "effectiveFromDate": "2024-05-30T10:30:00",
            "effectiveToDate": "2024-11-01T10:30:00",
            "isProrationEligible": true,
            "isRefundEligible": true,
            "isActive": true,
            "ruleApiName": "autoVehicleTaxRule",
            "ruleCriteria": [
                {
                    "conditions": [
                        {
                            "contextTagName": "SalesTransactionItemAttribute",
                            "operator": "LessThan",
                            "conditionIndex": 1,
                            "attributeName": "Annual Milage",
                            "attributePicklistValueId": null,
                            "type": "Attribute",
                            "attributeId": "0tjDR00000000VGYAY",
                            "dataType": "Number",
                            "values": [
                                "50000"
                            ]
                        }
                    ],
                    "rootObjectId": "01tDR000000EMslYAG",
                    "productRelatedComponent": "",
                    "criteriaIndex": 1,
                    "sourceContextTagName": "ProductBasedOn",
                    "sourceOperator": "Equals",
                    "sourceDataType": "String",
                    "sourceValues": [
                        "11BDR00000000T72AI"
                    ]
                },
                {
                    "conditions": [
                        {
                            "contextTagName": "SalesTransactionItemAttribute",
                            "operator": "LessThan",
                            "conditionIndex": 1,
                            "attributeName": "Comprehensive Deductible",
                            "type": "Attribute",
                            "attributePicklistValueId": null,
                            "attributeId": "0tjDR00000000UaYAI",
                            "dataType": "Number",
                            "values": [
                                "$5000"
                            ]
                        }
                    ],
                    "rootObjectId": "01tDR000000EMslYAG",
                    "productRelatedComponent": "",
                    "criteriaIndex": 2,
                    "sourceContextTagName": "Product",
                    "sourceOperator": "Equals",
                    "sourceDataType": "String",
                    "sourceValues": [
                        "01tDR000000EMsoYAG"
                    ]
                }
            ]
        }
    ]
}
```

## Related Topics

- Product Surcharge Post Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_product_surcharge_post_input.htm)
- Product Surcharge List (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_product_surcharge_list_output.htm)
