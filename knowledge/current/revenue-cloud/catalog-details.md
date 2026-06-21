---
title: "Catalog Details"
domain: revenue-cloud
topic: catalog-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-21T00:39:52.839Z
estimatedTokens: 313
keywords: [Catalog, definition]
---

> Output representation of the details of a catalog definition.

# Catalog Details

Output representation of the details of a catalog definition.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| catalogCode | String | Unique ID associated with the catalog. | Small, 67.0 | 67.0 |
| catalogType | String | Category of an entry in the catalog, which is customizable. For example, catalog types, such as sellable products, services, parts, technical services, or technical resources. | Small, 67.0 | 67.0 |
| customFields | Map<String, Object> | Details of the custom fields associated with a catalog. | Small, 67.0 | 67.0 |
| description | String | Description of the catalog. | Small, 67.0 | 67.0 |
| effectiveEndDate | String | Date and time from when the catalog isn’t available to the end users. | Small, 67.0 | 67.0 |
| effectiveStartDate | String | Date and time from when the catalog is available to the end users. | Small, 67.0 | 67.0 |
| id | String | ID of the catalog. | Small, 67.0 | 67.0 |
| name | String | Name of the catalog. | Small, 67.0 | 67.0 |
| numberOfCategories | Integer | Number of categories in the catalog. | Small, 67.0 | 67.0 |
| status | String | Status of the catalog. | Small, 67.0 | 67.0 |

## Code Examples

```
{
  "catalogs": [
    {
      "customFields": {},
      "id": "0ZSSG000001875O4AQ",
      "name": "Hardware Catalog",
      "numberOfCategories": 4
    }
  ]
}
```
