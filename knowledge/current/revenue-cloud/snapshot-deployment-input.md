---
title: "Snapshot Deployment Input"
domain: revenue-cloud
topic: snapshot-deployment-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.231Z
keywords: [Snapshot, Deployment, Input]
---

# Snapshot Deployment Input

# Snapshot Deployment Input

Input representation of the request to deploy a run-time catalog snapshot.

JSON example

This example shows a sample request to build a new snapshot with immediate activation.

```

```

This example shows a sample request to rebuild a snapshot in the active status.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| buildType | String | Build type of the snapshot index. Valid value is:FULL—Specifies a full index build.INCREMENTAL—Specifies an incremental index build. Available from API version 63.0 and later. | Required | 62.0 |
| snapshot | Run-time Catalog Snapshot Input[] | Snapshot to deploy. | Required | 62.0 |