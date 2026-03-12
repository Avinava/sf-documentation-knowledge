---
title: "Product Requirement Specification Output"
domain: mfg-api-devguide
topic: product-requirement-specification-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.004Z
estimatedTokens: 467
keywords: [Product, Requirement, Specification, Output, representation, resulting, data]
---

# Product Requirement Specification Output

> Output representation of the resulting Product Requirement Specification
    data.

# Product Requirement Specification Output

Output representation of the resulting Product Requirement Specification data.

JSON example

```

```

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | The ID of the associated customer account. | Small, 66.0 | 66.0 |
| contactId | String | The ID of the contact at the associated account. | Small, 66.0 | 66.0 |
| createdById | String | The ID of the user who created the specification. | Small, 66.0 | 66.0 |
| createdDate | String | The creation date and time of the specification. | Small, 66.0 | 66.0 |
| customAttributes | String | A JSON string containing custom fields and their values. | Small, 66.0 | 66.0 |
| id | String | The ID of the Product Requirement Specification. | Small, 66.0 | 66.0 |
| lastModifiedById | String | The ID of the user who last modified the specification. | Small, 66.0 | 66.0 |
| lastModifiedDate | String | The last modified date and time of the specification. | Small, 66.0 | 66.0 |
| latestVersionId | String | The ID of the latest version of the specification. | Small, 66.0 | 66.0 |
| name | String | The name of the Product Requirement Specification. | Small, 66.0 | 66.0 |
| origin | String | The source that initiated the requirement. | Small, 66.0 | 66.0 |
| ownerId | String | The ID of the user who owns the specification. | Small, 66.0 | 66.0 |
| priority | String | The priority of the requirement. | Small, 66.0 | 66.0 |
| productRequirementSpecificationVersions | Product Requirement Specification Version Output[] | A list of versions for this specification. | Small, 66.0 | 66.0 |
| stage | String | The current stage of the specification in its workflow. | Small, 66.0 | 66.0 |
| status | String | The current status of the specification. | Small, 66.0 | 66.0 |

## Code Examples

```
{
  "id": "0Dm5g000000KyZ3CAK",
  "name": "Pharmaceutical Grade Tablet Specification",
  "ownerId": "0055g000005OsYnAAK",
  "accountId": "0015g000005TjklAAC",
  "contactId": "0035g000005UmnoPQR",
  "status": "Active",
  "origin": "Customer Request",
  "priority": "High",
  "stage": "In Review",
  "latestVersionId": "0Dn5g000000LmN4CAK",
  "createdById": "0055g000005OsYnAAK",
  "lastModifiedById": "0055g000005OsYnAAK",
  "createdDate": "2024-01-15T10:30:00.000Z",
  "lastModifiedDate": "2024-01-20T14:45:00.000Z",
  "customAttributes": "{"regulatoryCompliance": "FDA", "productLine": "Healthcare"}",
  "productRequirementSpecificationVersions": [
    {
      "id": "0Dn5g000000LmN4CAK",
      "name": "Version 1.0",
      "version": 1
    }
  ]
}
```

## Related Topics

- Product Requirement Specification Version
                      Output (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/connect_responses_product_requirement_specification_version_output.htm)
