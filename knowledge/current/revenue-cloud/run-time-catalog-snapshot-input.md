---
title: "Run-time Catalog Snapshot Input"
domain: revenue-cloud
topic: run-time-catalog-snapshot-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:08.289Z
estimatedTokens: 141
keywords: [Run-time, Catalog, Snapshot, Input, representation, deployment]
---

# Run-time Catalog Snapshot Input

> Input representation of the details of a run-time catalog snapshot for
    deployment.

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

## Code Examples

```
"snapshot": {
    "activationType": "IMMEDIATE",
    "activationDate": "2024-05-06T05:12:59.000Z",
    "id": "1Avxx0000005DFe1AM"
  }
```
