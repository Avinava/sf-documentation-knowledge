---
title: "Run-time Catalog Snapshot Input"
domain: revenue-cloud
topic: run-time-catalog-snapshot-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.217Z
keywords: [Run-time, Catalog, Snapshot, Input]
---

# Run-time Catalog Snapshot Input

# Run-time Catalog Snapshot Input

Input representation of the details of a run-time catalog snapshot for deployment.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| activationDate | String | Activation date of the snapshot. | Optional | 62.0 |
| activationType | String | Activation type of the snapshot. Valid value is:IMMEDIATE—Snapshot is activated immediately after a successful build. | Required | 62.0 |
| id | String | ID of the snapshot. | Required | 62.0 |