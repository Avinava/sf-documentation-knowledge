---
title: "Integration Procedure Cache Details"
domain: omnistudio
topic: integration-procedure-cache-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.003Z
estimatedTokens: 171
keywords: [Integration, Procedure, Cache, Output, representation, cleared, procedures]
---

# Integration Procedure Cache Details

> Output representation of the cache that are cleared for the specified integration
    procedures.

# Integration Procedure Cache Details

Output representation of the cache that are cleared for the specified integration procedures.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | String | Error message if the operation fails. | Small, 64.0 | 64.0 |
| responseList | Integration Procedure Cache Response[] | List of responses that are generated during the cache clearing process where each response corresponds to a specific cache key. | Small, 64.0 | 64.0 |
| status | Boolean | Indicates whether the cache is cleared successfully (true) or not (false) | Small, 64.0 | 64.0 |

## Code Examples

```
{
  "error": "Specify a valid cache key.",
  "response": [
    {
      "status": false
    }
  ],
  "status": "Error"
}
```

## Related Topics

- Integration Procedure Cache Response (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_integration_procedure_cache_response.htm)
