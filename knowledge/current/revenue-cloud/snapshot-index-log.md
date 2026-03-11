---
title: "Snapshot Index Log"
domain: revenue-cloud
topic: snapshot-index-log
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.525Z
keywords: [Snapshot, Index, Log]
---

# Snapshot Index Log

# Snapshot Index Log

Output representation of a snapshot index log.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| catalog​SnapshotTime | String | Catalog snapshot time of the index. | Small, 63.0 | 63.0 |
| completion​Time | String | Completion time of the index. | Small, 63.0 | 63.0 |
| createdBy​Id | String | ID of the user that initiated the index build. | Small, 63.0 | 63.0 |
| indexBuild​Status | String | Status of the index build. | Small, 63.0 | 63.0 |
| indexBuild​Type | String | Type of the index build. Valid values are:FULL—Specifies a full index build.INCREMENTAL—Specifies an incremental index build. Available in API version 63.0 and later. | Small, 63.0 | 63.0 |
| index​Id | String | ID of the index. | Small, 63.0 | 63.0 |
| message | String | Message for the index status. | Small, 63.0 | 63.0 |
| numberOf​Changes | Integer | Number of new or changed products included in the index. | Small, 63.0 | 63.0 |