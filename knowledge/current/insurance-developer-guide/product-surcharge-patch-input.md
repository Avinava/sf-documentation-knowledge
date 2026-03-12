---
title: "Product Surcharge Patch Input"
domain: insurance-developer-guide
topic: product-surcharge-patch-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:39.978Z
estimatedTokens: 384
keywords: [Product, Surcharge, Patch, Input, representation]
---

# Product Surcharge Patch Input

> Input representation for product surcharge patch request.

# Product Surcharge Patch Input

Input representation for product surcharge patch request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveFromDate | String | Effective from date of the product surcharge. | Optional | 63.0 |
| effectiveToDate | String | Effective to date of the product surcharge. | Optional | 63.0 |
| isActive | Boolean | Indicates whether the product surcharge is active (true) or not (false). Currently, only active product surcharges are supported. | Optional | 63.0 |
| isProrationAllowed | Boolean | Indicates whether the product surcharge is allowed for proration (true) or not (false). | Optional | 63.0 |
| isRefundAllowed | Boolean | Indicates whether the product surcharge is allowed for refund (true) or not (false). | Optional | 63.0 |
| name | String | Name of the product surcharge. | Optional | 63.0 |
| productPath | String | A path containing the product IDs that roll up to the parent product. | Optional | 63.0 |
| productRelatedComponentId | String | Product related component associated with the product surcharge. | Optional | 63.0 |
| ruleApiName | String | Rule API name associated with product surcharge. You can set the ruleApiName with the POST or PATCH method. Once set, this parameter can’t be changed. If you set the ruleApiName in the request body, you must also set the ruleCriteria. | Optional | 63.0 |
| ruleCriteria |  | Rule criteria for the dynamic rule. | Optional | 63.0 |

## Code Examples

```
{
       "name": "AutoVehicleTax",
       "effectiveFromDate": "2024-05-30T10:30:00",
       "effectiveToDate": "2024-11-01T10:30:00",
       "isProrationEligible": true,
       "isRefundEligible": true,
       "isActive": true,
       "productPath": "01tDR000000EMslYAG/11BDR00000000T72AI", // "Auto Gold/Auto Vehicle"
       "ruleDefinition": [ // ruleDefinition will be replaced as a whole. Updating only one condition is not supported
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
       "rootObjectId": "01tDR000000EMslYAG", // Auto Gold.
       "productRelatedComponent" : "",
       "criteriaIndex": 1,
       "sourceContextTagName": "ProductBasedOn",
       "sourceOperator": "Equals",
       "sourceDataType": "String",
       "sourceValues": [
       "11BDR00000000T72AI" // Auto Vehicle.
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
       "rootObjectId": "01tDR000000EMslYAG", // Auto Bundle
       "productRelatedComponent" : "",
       "criteriaIndex": 2,
       "sourceContextTagName": "Product",
       "sourceOperator": "Equals",
       "sourceDataType": "String",
       "sourceValues": [
       "01tDR000000EMsoYAG" // Comprehensive Product.
       ]
       }
       ]
       }
```
