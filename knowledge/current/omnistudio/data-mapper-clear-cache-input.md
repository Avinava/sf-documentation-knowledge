---
title: "Data Mapper Clear Cache Input"
domain: omnistudio
topic: data-mapper-clear-cache-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.156Z
keywords: [Data, Mapper, Clear, Cache, Input]
---

# Data Mapper Clear Cache Input

# Data Mapper Clear Cache Input

Input representation of the details to clear the cache of the data mappers.

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