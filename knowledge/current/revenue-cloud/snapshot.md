---
title: "Snapshot"
domain: revenue-cloud
topic: snapshot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.532Z
keywords: [Snapshot]
---

# Snapshot

# Snapshot

Output representation of the list of active snapshots.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| activation​Date | String | Activation date of the snapshot. | Small, 62.0 | 62.0 |
| activation​Status | String | Activation status of the snapshot. Valid values are:NONEACTIVE—Snapshot is in active status.EXPIRED—Snapshot is in expired status. | Small, 62.0 | 62.0 |
| activation​Type | String | Activation type of the snapshot. Valid values are:IMMEDIATE—Snapshot is activated immediately after a successful build. | Small, 62.0 | 62.0 |
| id | String | ID of the snapshot. | Small, 61.0 | 61.0 |
| snapshot​Indexes | Snapshot Index[] | List of indexes created in the snapshot. | Small, 62.0 | 62.0 |