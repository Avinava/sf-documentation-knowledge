---
title: "Data Mapper Clear Cache (POST)"
domain: omnistudio
topic: data-mapper-clear-cache-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.718Z
keywords: [Data, Mapper, Clear, Cache, POST]
---

# Data Mapper Clear Cache (POST)

# Data Mapper Clear Cache (POST)

Clear the execution cache for the specified data mappers.

Resource

```

```

Available version

64.0

HTTP methods

POST

Request body for POST

JSON example

This is a sample example to clear the execution cache by using only the name of the data mapper.

```

```

This is a sample example to clear the execution cache by using the name of the data mapper along with additional inputs.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cacheStorageType | String | Storage type that's used for caching the data. Valid values are:Session—Cache is stored in the current user session.Org—Cache is shared across the entire organization.All—Refers to both session and org-level cache. | Required | 64.0 |
| dataMapperList | Data Mapper Details[] | List of data mappers to clear the cache for. | Required | 64.0 |

Response body for POST

[Data Mapper Cache Details](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_datamapper_clear_cache_output.htm "Output representation of the cache details that are cleared for the specified data mappers.")