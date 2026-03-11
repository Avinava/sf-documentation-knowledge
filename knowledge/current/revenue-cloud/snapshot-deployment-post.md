---
title: "Snapshot Deployment (POST)"
domain: revenue-cloud
topic: snapshot-deployment-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T14:37:50.342Z
keywords: [Snapshot, Deployment, POST]
---

# Snapshot Deployment (POST)

# Snapshot Deployment (POST)

Create indexes for a snapshot. Indexes improve search results and make it easier to find products at run time through search terms.

Resource

```

```

Resource example

```

```

Available version

62.0

HTTP methods

POST

Request body for POST

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

Response body for POST

[Snapshot Deployment](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_snapshot_deployment_output.htm "Output representation of the snapshot deployment.")