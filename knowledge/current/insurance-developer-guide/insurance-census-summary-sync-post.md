---
title: "Insurance Census Summary Sync (POST)"
domain: insurance-developer-guide
topic: insurance-census-summary-sync-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.177Z
estimatedTokens: 209
keywords: [Insurance, Census, Summary, Sync, POST, Synchronize, recalculate, data, group]
---

# Insurance Census Summary Sync (POST)

> Synchronize and recalculate the summary data for a group census.

# Insurance Census Summary Sync (POST)

Synchronize and recalculate the summary data for a group census.

This API uses the group census ID to synchronize the group census summary and group census group class summary data. This API doesn't require a request payload.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST

Path parameter for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| groupCensusId | String | ID of the group census. | Required | 65.0 |

Response body for POST

[Insurance Census Summary Sync Details](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_census_summary_sync_output.htm "Output representation of an employee census summary synchronization.")

## Code Examples

```
/connect/insurance/census-management/group-censuses/groupCensusId/sync-summary
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/census-management/group-censuses/0rlxx000000001aEAA/sync-summary
```

## Related Topics

- Insurance Census Summary
       Sync Details (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_census_summary_sync_output.htm)
