---
title: "Snapshot Index Info"
domain: revenue-cloud
topic: snapshot-index-info
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.521Z
keywords: [Snapshot, Index, Info]
---

# Snapshot Index Info

# Snapshot Index Info

Output representation of the details of a snapshot index.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| buildType | String | Build type of the index. Valid values are:FULL—Specifies a full index build.INCREMENTAL—Specifies an incremental index build. Available in API version 63.0 and later. | Small, 63.0 | 63.0 |
| id | String | ID of the index information record. | Small, 63.0 | 63.0 |
| isIncrementable | Boolean | Indicates whether a partial build is enabled (true) or disabled (false). | Small, 63.0 | 63.0 |
| usageType | String | Usage type of the index. Valid values are:LIVE—Index usage type is live.OUT_OF_USE—Index usage type is out of use. | Small, 63.0 | 63.0 |