---
title: "Snapshot Deployment"
domain: revenue-cloud
topic: snapshot-deployment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.508Z
estimatedTokens: 176
keywords: [Snapshot, Deployment, Output, representation, snapshot, deployment.]
---

# Snapshot Deployment

> Output representation of the snapshot deployment.

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

## Code Examples

```
{
  "errors": [],
  "snapshot": {
    "activationStatus": "NONE",
    "activationType": "IMMEDIATE",
    "id": "1Avxx0000004CFU",
    "snapshotIndexes": [
      {
        "createdDate": "2024-07-24T21:10:48.000Z",
        "id": "1D6xx0000004CFU",
        "indexBuildType": "FULL",
        "indexType": "PRODUCT",
        "lastBuildStatus": "IN_PROGRESS"
      }
    ]
  },
  "statusCode": "200"
}
```

```
{
  "errors": [],
  "snapshot": {
    "activationStatus": "NONE",
    "activationType": "IMMEDIATE",
    "id": "1Avxx0000004CH6",
    "snapshotIndexes": [
      {
        "createdDate": "2024-07-24T21:13:05.000Z",
        "id": "1D6xx0000004CH6",
        "indexBuildType": "FULL",
        "indexType": "PRODUCT",
        "lastBuildStatus": "IN_PROGRESS"
      }
    ]
  },
  "statusCode": "200"
}
```

## Related Topics

- Error Output (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_epc_error_output.htm)
- Snapshot (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_snapshot_output.htm)
