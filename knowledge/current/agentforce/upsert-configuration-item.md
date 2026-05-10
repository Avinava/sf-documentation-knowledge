---
title: "Upsert Configuration Item"
domain: agentforce
topic: upsert-configuration-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-05-10T00:39:14.808Z
estimatedTokens: 797
keywords: [Upsert, Configuration, Item, Submit, bulk, operation, items, CIs, asynchronous, job, getStatus, query, check, progress, UpsertCI]
---

> Submit a bulk operation to create or update one or more
      configuration items (CIs). This is an asynchronous operation that returns a job ID, which you
      can use with the getStatus query to check the operation progress.

# Upsert Configuration Item

Submit a bulk operation to create or update one or more configuration items (CIs). This is an asynchronous operation that returns a job ID, which you can use with the [getStatus](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getStatus.htm "Retrieve the status of a previously submitted asynchronous job. For example, upsertCI a bulk upsert operation. Use this query to check the progress and completion status of the asynchronous operations.") query to check the operation progress.

## Request

JSON example

This example shows a sample request to upsert configuration items in bulk, including parent and relationship details.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| input | UpsertCIBulkInput | A container object that holds the payload array containing one or more configuration item objects. | Required | 66.0 |

## UpsertCI Properties

Defines the structure for a single configuration item within the mutation payload.

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cnfgItemType | String | The type of configuration item. | Required | 66.0 |
| parentCiId | String | The ID of the parent configuration item for which a component configuration item is created. | Optional | 66.0 |
| relationshipType | String | Developer name of the CI Relationship. | Optional | 66.0 |

## Response

JSON example

This example is a sample response from the upsertCI mutation.

```

```

Properties

| Field | Type | Description | Available Version |
| --- | --- | --- | --- |
| id | Integer | The unique identifier of the asynchronous job. Use this ID with the getStatus query to check the operation progress. | 66.0 |
| status | String | The initial status of the asynchronous job. | 66.0 |
| updatedAt | String | The date and time when the job was created, in YYYY-MM-DDTHH:MM:SSZ format. | 66.0 |
| details | String | A message indicating the job has been queued and is being processed. | 66.0 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=agentforce_it_service_dev_guide)

#### Note

-   After submitting the upsertCI mutation, use the returned job id with the [getStatus](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getStatus.htm#query_getStatus "Retrieve the status of a previously submitted asynchronous job. For example, upsertCI a bulk upsert operation. Use this query to check the progress and completion status of the asynchronous operations.") query to check the operation progress and completion status.
-   When using the upsertCI operation, you can request any available attribute to be included in the response. The attributes you can include:
    -   Standard Attributes: Many attributes are available out-of-the-box.
    -   Custom Attributes: You can create and include custom attributes using the sObject API.
-   Add any attribute using its Developer Name (for example, SD\_AsNa—Asset Name) to specify exactly which information you want to receive for your Configuration Items (CIs).

## Code Examples

```
mutation UpsertCI {
              upsertCI(
              input: {
              payload: [
              {
              cnfgItemType: "F5 Load Balancer"
              parentCiId: "6780001"
              relationshipType: "runs_on"
              SD_AsNa: "LB-PROD-F5-01"
              SD_St: "Active"
              SD_IpAd: "10.0.2.10"
              }
              ]
              }
              ) {
              id
              status
              updatedAt
              details
              }
              }
```

```
{
              "data": {
              "upsertCI": {
              "id": 108,
              "status": "Processing",
              "updatedAt": "2025-11-14T10:15:00.123456Z",
              "details": "Job queued - Upsert CI - Canonical API (1 items)"
              }
              }
              }
```

## Related Topics

- getStatus (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getStatus.htm)
