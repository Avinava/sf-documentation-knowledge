---
title: "Snapshot Index"
domain: revenue-cloud
topic: snapshot-index
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.529Z
keywords: [Snapshot, Index]
---

# Snapshot Index

# Snapshot Index

Output representation of the snapshot index of a run-time catalog.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| completed​Date | String | Completed date of the snapshot index. | Small, 62.0 | 62.0 |
| created​Date | String | Created date of the snapshot index. | Small, 62.0 | 62.0 |
| id | String | ID of the snapshot index. | Small, 62.0 | 62.0 |
| indexBuild​Type | String | Build type of the snapshot index. Valid value is:FULL—Specifies a full index build.INCREMENTAL—Specifies an incremental index build. Available in API version 63.0 and later. | Small, 62.0 | 62.0 |
| indexInfos | Index Info | Index information records associated with the snapshot index. | Small, 63.0 | 63.0 |
| indexLogs | Index Logs[] | Index logs associated with the snapshot index. | Small, 63.0 | 63.0 |
| indexType | String | Index type of the snapshot index. Valid value is:PRODUCT—Snapshot index is of product type. | Small, 62.0 | 62.0 |
| lastBuild​Status | String | Last build status of the snapshot index. Valid values are:IN_PROGRESS—Snapshot index build is in progress.FAILED—Snapshot index build failed.COMPLETED—Snapshot index build completed successfully. | Small, 62.0 | 62.0 |
| numberOf​Records | Integer | Number of indexed records. | Small, 62.0 | 62.0 |
| venueId | String | Venue ID of the snapshot index. | Small, 63.0 | 63.0 |