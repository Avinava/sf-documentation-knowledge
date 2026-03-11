---
title: "Snapshot Deployment"
domain: revenue-cloud
topic: snapshot-deployment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.516Z
keywords: [Snapshot, Deployment]
---

# Snapshot Deployment

# Snapshot Deployment

Output representation of the snapshot deployment.

JSON example

This example shows a sample response to the request to build a new snapshot with immediate activation.

```

```

This example shows a sample response of the request to rebuild a snapshot in the active status.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Output[] | List of errors, if any. | Small, 62.0 | 62.0 |
| snapshot | Snapshot[] | Run-time catalog snapshot associated with the created index. | Small, 62.0 | 62.0 |
| statusCode | String | Code indicating the status of the request. | Small, 62.0 | 62.0 |