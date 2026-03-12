---
title: "Search Output"
domain: health-cloud-object-reference
topic: search-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.759Z
estimatedTokens: 146
keywords: [Search, Output, representation]
---

# Search Output

> Output representation of the search response.

# Search Output

Output representation of the search response.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| isSuccess | Boolean | Indicates whether the result if successful (true) or not (false). | Small, 54.0 | 54.0 |
| message | String | The request response message. | Small, 54.0 | 54.0 |
| searchResult | Search Result[] | Represents the search result fields. | Small, 54.0 | 54.0 |
| searchResultHeader | Search Result Header[] | Represents the search result header field list. | Small, 54.0 | 54.0 |

## Related Topics

- Search Result (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_search_result.htm)
- Search Result Header (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_search_result_header.htm)
