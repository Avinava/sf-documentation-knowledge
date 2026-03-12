---
title: "Product Surcharge Bulk Post Input"
domain: insurance-developer-guide
topic: product-surcharge-bulk-post-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.973Z
estimatedTokens: 87
keywords: [Product, Surcharge, Bulk, Post, Input, representation, records]
---

# Product Surcharge Bulk Post Input

> Input representation of the details of the product surcharge records.

# Product Surcharge Bulk Post Input

Input representation of the details of the product surcharge records.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| records | Product Surcharge Post Input[] | List of the product surcharges. | Required | 63.0 |

## Code Examples

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
