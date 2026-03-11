---
title: "Upsert Configuration Item"
domain: agentforce
topic: upsert-configuration-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:08:17.760Z
keywords: [Upsert, Configuration, Item, Request, Response, Note]
---

# Upsert Configuration Item

# Upsert Configuration Item

Submit a bulk operation to create or update one or more configuration items. This is an asynchronous operation that returns a job ID, which you can use with the [getStatus](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getStatus.htm "Retrieve the status of a previously submitted asynchronous job. For example, upsertCI a bulk upsert operation. Use this query to check the progress and completion status of the asynchronous operations.") query to check the operation progress.

## Request

JSON example

This example shows a sample request to upsert configuration items in bulk.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| input | UpsertCIBulkInput | A container object that holds the payload array containing one or more configuration item objects to create or update. | Required | 66.0 |

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