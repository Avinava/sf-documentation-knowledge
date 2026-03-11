---
title: "Related Records List"
domain: revenue-cloud
topic: related-records-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.502Z
keywords: [Related, Records, List]
---

# Related Records List

# Related Records List

Output representation of the list of related records.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| correlation​Id | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Small, 62.0 | 62.0 |
| related​Records | Related Records[] | List of related records. | Small, 62.0 | 62.0 |
| status | Status[] | Status of the API request. | Small, 62.0 | 62.0 |