---
title: "Snapshot Collection (GET)"
domain: revenue-cloud
topic: snapshot-collection-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T14:37:50.344Z
keywords: [Snapshot, Collection, GET]
---

# Snapshot Collection (GET)

# Snapshot Collection (GET)

Retrieve the created snapshots and snapshot indexes.

Resource

```

```

Resource example

```

```

Available version

62.0

HTTP methods

GET

Query Parameter for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| numberOf​IndexLogs | Integer | Number of index logs to include in the response. Specify a number from 0 through 100. The default value is 25. | Optional | 63.0 |

Response body for GET

[Snapshot Collection](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_snapshot_collection_output.htm "Output representation of the retrieved snapshot collection.")