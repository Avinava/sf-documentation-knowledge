---
title: "Upsert Configuration Item Relationship"
domain: agentforce
topic: upsert-configuration-item-relationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:15.246Z
estimatedTokens: 809
keywords: [Upsert, Configuration, Item, Relationship, Submit, bulk, operation, create, update, relationships, between, configuration, items., asynchronous, job, which, getStatus, query, check, progress.]
---

# Upsert Configuration Item Relationship

> Submit a bulk operation to create or update one or more
      relationships between configuration items. This is an asynchronous operation that returns a
      job ID, which you can use with the getStatus query to check the operation
    progress.

# Upsert Configuration Item Relationship

Submit a bulk operation to create or update one or more relationships between configuration items. This is an asynchronous operation that returns a job ID, which you can use with the [getStatus](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getStatus.htm "Retrieve the status of a previously submitted asynchronous job. For example, upsertCI a bulk upsert operation. Use this query to check the progress and completion status of the asynchronous operations.") query to check the operation progress.

## Request

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| input | UpsertCIRelationshipBulkInput | The top-level input container for the bulk create or update operation. Contains the array of configuration item relationship objects to process. | Required | 66.0 |

## UpsertCIRelationshipBulkInput

The top-level input container for create or update operations.

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| payload | UpsertCIRelationshipInput | An array of configuration item relationship objects to be created or updated in a single bulk operation. Each element defines one relationship between a source and target configuration item. | Required | 66.0 |

## UpsertCIRelationshipInput

Defines the structure for a single configuration item relationship within a bulk upsert request.

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| sourceCIId | String | The unique identifier of the source configuration item in the relationship. | Required | 66.0 |
| targetCIId | String | The unique identifier of the target configuration item in the relationship. | Required | 66.0 |
| relationshipType | String | The developer name of the configuration item relationship type. Use a valid relationship type developer name defined in your Configuration Management Database. | Required | 66.0 |

## Response

JSON example

```

```

Properties

| Field | Type | Description | Available Version |
| --- | --- | --- | --- |
| id | Integer | The unique identifier of the asynchronous job. Use this ID with the getStatus query to check the operation progress and completion status. | 66.0 |
| status | String | The initial status of the asynchronous job. | 66.0 |
| updatedAt | String | The date and time when the job was created or last updated, in YYYY-MM-DDTHH:MM:SSZ format. | 66.0 |
| details | String | User message describing the job. | 66.0 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=agentforce_it_service_dev_guide)

#### Note

After submitting the upsertCIRelationship mutation, use the returned job id with the [getStatus](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getStatus.htm#query_getStatus "Retrieve the status of a previously submitted asynchronous job. For example, upsertCI a bulk upsert operation. Use this query to check the progress and completion status of the asynchronous operations.") query to check the operation progress and completion status.

## Code Examples

```
mutation UpsertCIRelationship {
  upsertCIRelationship(
    input: {
      payload: [
        {
          sourceCIId: 22
          targetCIId: 33
          relationshipType: "SD_NOVa"
        }
      ]
    }
  ) {
    id
    status
    updatedAt
    details
    totalRecordCount
    successRecordCount
    failureRecordCount
  }
}
```

```
{
  "data": {
    "upsertCIRelationship": {
      "id": 109,
      "status": "Processing",
      "updatedAt": "2025-11-14T10:15:00.123456Z",
      "details": "Job queued - Upsert CI Relationship - Canonical API (1 items)"
    }
  }
}
```

## Related Topics

- getStatus (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getStatus.htm)
