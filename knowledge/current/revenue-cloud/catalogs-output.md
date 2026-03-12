---
title: "Catalogs Output"
domain: revenue-cloud
topic: catalogs-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.446Z
estimatedTokens: 200
keywords: [Catalogs, Output, representation, retrieved, catalog, result.]
---

# Catalogs Output

> Output representation of the retrieved catalog result.

# Catalogs Output

Output representation of the retrieved catalog result.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| catalogs | Catalog Output[] | List of the catalogs. | Small, 60.0 | 60.0 |
| correlation​Id | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Small, 60.0 | 60.0 |
| count | Integer | Total number of the catalog records retrieved after the query execution, wherein the pageSize property determines the number of records returned in every page. | Small, 60.0 | 60.0 |
| status | Status | Status of the request. | Small, 60.0 | 60.0 |

## Code Examples

```
{
  "catalogs": [
    {
      "catalogType": "Sales",
      "code": "CAT009",
      "id": "0ZS1Q000000XbZAWA0",
      "name": "SmartBytes B2B Catalog",
      "numberOfCategories": 8
    }
  ],
  "correlationId": "0b7b6a30-895c-407a-91b3-e67482d339a3",
  "count": 1,
  "status": {
    "code": "200",
    "errors": [],
    "message": "Successfully fetched the catalog records."
  }
}
```

## Related Topics

- Catalog
                Output (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_catalog_output.htm)
- Status (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_status.htm)
