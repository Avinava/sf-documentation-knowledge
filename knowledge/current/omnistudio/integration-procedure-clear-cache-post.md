---
title: "Integration Procedure Clear Cache (POST)"
domain: omnistudio
topic: integration-procedure-clear-cache-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:49.330Z
estimatedTokens: 395
keywords: [Integration, Procedure, Clear, Cache, POST, execution, cache, specified, integration, procedures.]
---

# Integration Procedure Clear Cache (POST)

> Clear the execution cache for the specified integration procedures.

# Integration Procedure Clear Cache (POST)

Clear the execution cache for the specified integration procedures.

Resource

```

```

Available version

64.0

HTTP methods

POST

Request body for POST

JSON example

This is a sample example to clear the cache of an integration procedure by using the key that's associated with the integration procedure and cache storage type.

```

```

This is a sample example to clear the cache of an integration procedure by using the cache keys and cache storage type.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cacheKeys | Integration Procedure Cache Keys | List of cache keys to clear the cache for. Cache keys are used to identify the cached data. | Optional | 64.0 |
| cacheStorageType | String | Storage type that's used for caching the data. Valid values are:All—Includes all cache types, such as metadata, session, and org-level caches.Metadata—Cache is used for configuration-related data such as schemas or field mappings.Org—Cache is shared across the entire organization.Session—Cache is stored in the current user session. | Required | 64.0 |
| iPInput | Integration Procedure Details[] | List of integration procedures to clear the cache for. | Optional | 64.0 |

Response body for POST

[Integration Procedure Cache Details](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_integration_procedure_cache_output.htm "Output representation of the cache that are cleared for the specified integration procedures.")

## Code Examples

```apex
/connect/omni-global/integration-procedure/actions/clear-cache
```

```
{
  "cacheStorageType": "Metadata",
  "ipInput": {
    "inputs": [
      {
        "ipkey": "Account_GetAccountDetails"
      }
    ]
  }
}
```

```
{
  "cacheKeys": {
    "cacheKeys": [
      "IP06535636"
    ]
  },
  "cacheStorageType": "Metadata"
}
```

## Related Topics

- Integration Procedure Cache Keys (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_integration_procedure_cache_keys_list.htm)
- Integration
                        Procedure Details (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_integration_procedure_cache_input_data.htm)
- Integration Procedure
              Cache Details (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_integration_procedure_cache_output.htm)
