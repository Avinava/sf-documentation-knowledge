---
title: "Data Mapper Cache Details"
domain: omnistudio
topic: data-mapper-cache-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.683Z
estimatedTokens: 152
keywords: [Data, Mapper, Cache, Output, representation, cleared, mappers]
---

# Data Mapper Cache Details

> Output representation of the cache details that are cleared for the specified data
    mappers.

# Data Mapper Cache Details

Output representation of the cache details that are cleared for the specified data mappers.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | String | Error message if the operation fails. | Small, 64.0 | 64.0 |
| responseList | Data Mapper Clear Cache Response[] | List of responses that are generated during the clear cache process. | Small, 64.0 | 64.0 |
| status | Boolean | Indicates whether the cache is cleared successfully (true) or not (false). | Small, 64.0 | 64.0 |

## Code Examples

```
{
  "error": "Specify a Data Mapper name",
  "responseList": [
    {
      "error": "Specify a Data Mapper name",
      "status": false
    }
  ],
  "status": false
}
```

## Related Topics

- Data
                  Mapper Clear Cache Response (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_datamapper_clear_cache_response.htm)
