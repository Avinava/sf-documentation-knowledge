---
title: "Product Requirement Specification Version Output"
domain: mfg-api-devguide
topic: product-requirement-specification-version-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:55.012Z
estimatedTokens: 627
keywords: [Product, Requirement, Specification, Version, Output, representation, versions]
---

# Product Requirement Specification Version Output

> Output representation of the list of versions for this specification.

# Product Requirement Specification Version Output

Output representation of the list of versions for this specification.

JSON example

```

```

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additionalInfo | String | Additional notes or instructions for this version. | Small, 66.0 | 66.0 |
| assumptions | String | Conditions or beliefs assumed to be true for the design. | Small, 66.0 | 66.0 |
| constraints | String | Limitations, such as cost or time, that must be met. | Small, 66.0 | 66.0 |
| contentDocumentId | String | The ID of an attached document. | Small, 66.0 | 66.0 |
| createdById | String | The ID of the user who created the version. | Small, 66.0 | 66.0 |
| createdDate | String | The creation date and time of the version. | Small, 66.0 | 66.0 |
| customAttributes | String | A JSON string containing custom fields and their values. | Small, 66.0 | 66.0 |
| effectiveDate | String | The date this specification version becomes valid. | Small, 66.0 | 66.0 |
| expiryDate | String | The date this specification version becomes obsolete. | Small, 66.0 | 66.0 |
| id | String | The ID of the specification version. | Small, 66.0 | 66.0 |
| intendedUse | String | The business or functional goal of the product. | Small, 66.0 | 66.0 |
| lastModifiedById | String | The ID of the user who last modified the version. | Small, 66.0 | 66.0 |
| lastModifiedDate | String | The last modified date and time of the version. | Small, 66.0 | 66.0 |
| name | String | The name of the specification version. | Small, 66.0 | 66.0 |
| ownerId | String | The ID of the user who owns the version. | Small, 66.0 | 66.0 |
| productRequirementSpecificationItems | Product Requirement Specification Item Output[] | A list of items for this specification version. | Small, 66.0 | 66.0 |
| productRqmtSpecId | String | The ID of the parent specification. | Small, 66.0 | 66.0 |
| purpose | String | The business reason for the requirement. | Small, 66.0 | 66.0 |
| refProductCategoryId | String | The ID of the category for the reference product. | Small, 66.0 | 66.0 |
| refProductId | String | The ID of a reference or baseline product. | Small, 66.0 | 66.0 |
| scope | String | The defined boundaries for the product or project. | Small, 66.0 | 66.0 |
| verificationMethod | String | The method used to confirm the requirement is met. | Small, 66.0 | 66.0 |
| version | Integer | The version number. | Small, 66.0 | 66.0 |

## Code Examples

```
{
  "id": "0Dn5g000000LmN4CAK",
  "name": "Tablet Specification v2.0",
  "ownerId": "0055g000005OsYnAAK",
  "productRqmtSpecId": "0Dm5g000000KyZ3CAK",
  "version": 2,
  "purpose": "Define specifications for manufacturing pharmaceutical tablets meeting FDA standards",
  "intendedUse": "Manufacturing of pain relief tablets for consumer market",
  "scope": "Covers physical, chemical, and biological specifications for tablet production",
  "assumptions": "Standard manufacturing equipment available, controlled environment",
  "constraints": "Must comply with FDA regulations, production cost under $0.50 per unit",
  "verificationMethod": "Laboratory testing and statistical process control",
  "refProductId": "01t5g000005AbCdEFG",
  "refProductCategoryId": "0ZG5g000000PqRsSST",
  "effectiveDate": "2024-02-01T00:00:00.000Z",
  "expiryDate": "2025-02-01T00:00:00.000Z",
  "contentDocumentId": "069xx000000ABCDEAU",
  "additionalInfo": "Refer to attached technical drawings and material specifications",
  "createdById": "0055g000005OsYnAAK",
  "lastModifiedById": "0055g000005OsYnAAK",
  "createdDate": "2024-01-15T10:30:00.000Z",
  "lastModifiedDate": "2024-01-20T14:45:00.000Z",
  "customAttributes": "{"approvedBy": "Quality Assurance Team", "certificationNumber": "FDA-2024-001"}",
  "productRequirementSpecificationItems": []
}
```

## Related Topics

- Product Requirement Specification Item
                      Output (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/connect_responses_product_requirement_specification_item_output.htm)
