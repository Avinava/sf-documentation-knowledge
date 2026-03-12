---
title: "Product Surcharge Post Input"
domain: insurance-developer-guide
topic: product-surcharge-post-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.984Z
estimatedTokens: 397
keywords: [Product, Surcharge, Post, Input, representation]
---

# Product Surcharge Post Input

> Input representation of product surcharge details.

# Product Surcharge Post Input

Input representation of product surcharge details.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveFromDate | String | Effective from date of the product surcharge. | Optional | 63.0 |
| effectiveToDate | String | Effective to date of the product surcharge. | Optional | 63.0 |
| isActive | Boolean | Indicates whether the product surcharge is active (true) or not (false). Currently, only active product surcharges are supported | Optional | 63.0 |
| isProrationAllowed | Boolean | Indicates whether the product surcharge is allowed for proration (true) or not (false). | Optional | 63.0 |
| isRefundAllowed | Boolean | Indicates whether the product surcharge is allowed for refund (true) or not (false). | Optional | 63.0 |
| name | String | Name of the product surcharge. | Required | 63.0 |
| productPath | String | A path containing the product IDs that roll up to the parent product. | Required | 63.0 |
| productRelatedComponentId | String | ID of the product related component associated with the product surcharge. | Optional | 63.0 |
| rootProductId | String | ID of the root product associated with the product surcharge. | Required | 63.0 |
| ruleApiName | String | Rule API name associated with product surcharge. | Optional | 63.0 |
| ruleCriteria |  | Rule criteria of the dynamic rule for the product surcharge. | Optional | 63.0 |
| surchargeId | String | ID of the surcharge associated with the product surcharge. | Required | 63.0 |

## Code Examples

```
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
                }
```
