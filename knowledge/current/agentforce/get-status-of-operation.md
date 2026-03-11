---
title: "Get Status of Operation"
domain: agentforce
topic: get-status-of-operation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:08:17.786Z
keywords: [Get, Status, Operation, Request, Response]
---

# Get Status of Operation

# Get Status of Operation

Retrieve the status of a previously submitted asynchronous job. For example, upsertCI a bulk upsert operation. Use this query to check the progress and completion status of the asynchronous operations.

## Request

JSON example

This example shows a sample request to get the status of an asynchronous job.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | Integer | The unique identifier of the asynchronous job. This ID is returned by mutations such as upsertCI when an asynchronous operation is initiated. | Required | 66.0 |

## Response

JSON example

This example is a sample response from the getStatus query.

```

```

Properties

| Field | Type | Description | Available Version |
| --- | --- | --- | --- |
| id | Integer | The ID of the job or operation. | 66.0 |
| status | String | The current status of the job. | 66.0 |
| updatedAt | String | The date and time when the job status was last updated, in YYYY-MM-DDTHH:MM:SSZ format. | 66.0 |
| details | String | User message that provides additional context about the job status or completion. | 66.0 |
| totalRecordCount | Integer | The total number of records processed in the job. | 66.0 |
| successRecordCount | Integer | The number of records that were successfully processed. | 66.0 |
| failureRecordCount | Integer | The number of records that failed to process. | 66.0 |