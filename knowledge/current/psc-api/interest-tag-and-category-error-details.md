---
title: "Interest Tag and Category Error Details"
domain: psc-api
topic: interest-tag-and-category-error-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.092Z
estimatedTokens: 137
keywords: [Interest, Tag, Category, Error, Output, representation, operation, fails]
---

# Interest Tag and Category Error Details

> Output representation of the error details when the operation fails.

# Interest Tag and Category Error Details

Output representation of the error details when the operation fails.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| message | String | Error message if the operation fails. | Small, 65.0 | 65.0 |
| type | String | Error type that indicates the reason of the failed operation. Valid values are:InvalidRequestTagCreationCategoryCreationTagAndCategoryAssociationTagAndRecordAssociation | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "errors": [
    {
      "message": "Failed to create tag-category assignment: You reached the limit of 3 category assignments for this Interest Tag.",
      "type": "TagAndCategoryAssociation"
    }
  ],
  "isSuccess": false
}
```
