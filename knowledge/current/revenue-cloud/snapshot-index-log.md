---
title: "Snapshot Index Log"
domain: revenue-cloud
topic: snapshot-index-log
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.526Z
estimatedTokens: 258
keywords: [Snapshot, Index, Log, Output, representation, snapshot, index, log.]
---

# Snapshot Index Log

> Output representation of a snapshot index log.

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

## Code Examples

```
"indexLogs": [
            {
              "catalogSnapshotTime": "2024-11-06T16:14:30.000Z",
              "completionTime": "2024-11-06T16:16:02.000Z",
              "createdById": "005xx000001X7x7AAC",
              "indexBuildStatus": "COMPLETED",
              "indexBuildType": "FULL",
              "indexId": "0axxx00000000T3AAI",
              "numberOfChanges": 7
            },
            {
              "catalogSnapshotTime": "2024-11-06T15:03:32.000Z",
              "completionTime": "2024-11-06T15:05:02.000Z",
              "createdById": "005xx000001X7x7AAC",
              "indexBuildStatus": "COMPLETED_WITH_ERRORS",
              "indexBuildType": "INCREMENTAL",
              "indexId": "0axxx00000000RRAAY",
              "message": "Warning: Product errors found.",
              "numberOfChanges": 3
            },
            {
              "catalogSnapshotTime": "2024-11-06T12:35:34.000Z",
              "completionTime": "2024-11-06T12:35:34.000Z",
              "createdById": "005xx000001X7x7AAC",
              "indexBuildStatus": "COMPLETED",
              "indexBuildType": "INCREMENTAL",
              "indexId": "0axxx00000000RRAAY",
              "message": "There are no changes for the partial update.",
              "numberOfChanges": 0
            },
            {
              "catalogSnapshotTime": "2024-11-06T12:07:32.000Z",
              "completionTime": "2024-11-06T12:09:02.000Z",
              "createdById": "005xx000001X7x7AAC",
              "indexBuildStatus": "COMPLETED_WITH_ERRORS",
              "indexBuildType": "FULL",
              "message": "Warning: Product errors found.",
              "numberOfChanges": 1
            }
          ]
```
