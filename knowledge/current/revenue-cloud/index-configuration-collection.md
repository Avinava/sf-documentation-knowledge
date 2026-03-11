---
title: "Index Configuration Collection"
domain: revenue-cloud
topic: index-configuration-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.435Z
keywords: [Index, Configuration, Collection]
---

# Index Configuration Collection

# Index Configuration Collection

Output representation of the collection of index configuration details.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| correlationId | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Small, 62.0 | 62.0 |
| errors | Error Output[] | List of errors, if any. | Small, 62.0 | 62.0 |
| index​Configurations | Index Configuration Field[] | Details of the index-configured fields. | Small, 62.0 | 62.0 |
| metadata | Metadata[] | Details of the metadata for objects. | Small, 62.0 | 62.0 |
| statusCode | String | Code that indicates the status of the request. | Small, 62.0 | 62.0 |