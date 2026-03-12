---
title: "Product Requirement Specification Item Output"
domain: mfg-api-devguide
topic: product-requirement-specification-item-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.998Z
estimatedTokens: 504
keywords: [Product, Requirement, Specification, Item, Output, representation, items, version]
---

# Product Requirement Specification Item Output

> Output representation of the list of items for this specification version.

# Product Requirement Specification Item Output

Output representation of the list of items for this specification version.

JSON example

```

```

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| acceptanceCriteria | String | The measurable conditions for requirement fulfillment. | Small, 66.0 | 66.0 |
| additionalInfo | String | Additional notes or instructions for this item. | Small, 66.0 | 66.0 |
| category | String | The type of requirement, such as Functional or Performance. | Small, 66.0 | 66.0 |
| createdById | String | The ID of the user who created the item. | Small, 66.0 | 66.0 |
| createdDate | String | The creation date and time of the item. | Small, 66.0 | 66.0 |
| customAttributes | String | A JSON string containing custom fields and their values. | Small, 66.0 | 66.0 |
| id | String | The ID of the specification item. | Small, 66.0 | 66.0 |
| lastModifiedById | String | The ID of the user who last modified the item. | Small, 66.0 | 66.0 |
| lastModifiedDate | String | The last modified date and time of the item. | Small, 66.0 | 66.0 |
| name | String | The name of the specification item. | Small, 66.0 | 66.0 |
| ownerId | String | The ID of the user who owns the item. | Small, 66.0 | 66.0 |
| productRqmtSpecVersionId | String | The ID of the parent specification version. | Small, 66.0 | 66.0 |
| riskLevel | String | The criticality of this requirement. | Small, 66.0 | 66.0 |
| statement | String | A detailed, testable statement of the requirement. | Small, 66.0 | 66.0 |
| targetValue | String | The specific, desired value for this requirement. | Small, 66.0 | 66.0 |
| tolerance | String | The acceptable range of deviation from the target value. | Small, 66.0 | 66.0 |
| unitOfMeasureId | String | The ID of the unit of measure for the target value and tolerance. | Small, 66.0 | 66.0 |
| verificationMethod | String | The method used to validate this requirement. | Small, 66.0 | 66.0 |

## Code Examples

```
{
  "id": "0Do5g000000MpQ5CAK",
  "name": "Tablet Weight Specification",
  "ownerId": "0055g000005OsYnAAK",
  "productRqmtSpecVersionId": "0Dn5g000000LmN4CAK",
  "category": "Physical",
  "statement": "Each tablet must weigh between 495mg and 505mg",
  "acceptanceCriteria": "100% of tablets must fall within specified weight range during quality control sampling",
  "targetValue": "500",
  "tolerance": "5",
  "unitOfMeasureId": "UoM5g000000AbCdEFG",
  "verificationMethod": "Analytical balance with 0.1mg precision",
  "riskLevel": "High",
  "additionalInfo": "Weight verification required every 30 minutes during production",
  "createdById": "0055g000005OsYnAAK",
  "lastModifiedById": "0055g000005OsYnAAK",
  "createdDate": "2024-01-15T10:30:00.000Z",
  "lastModifiedDate": "2024-01-20T14:45:00.000Z",
  "customAttributes": "{"testFrequency": "Every 30 minutes", "sampleSize": "20 tablets"}"
}
```
