---
title: "Catalogs Output"
domain: revenue-cloud
topic: catalogs-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.378Z
keywords: [Catalogs, Output]
---

# Catalogs Output

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