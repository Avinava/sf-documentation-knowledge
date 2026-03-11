---
title: "Batch Job Cancel Output"
domain: omnistudio
topic: batch-job-cancel-output
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:25:09.079Z
keywords: [Batch, Job, Cancel, Output]
---

# Batch Job Cancel Output

# Batch Job Cancel Output

Output representation of the batch job cancel request.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| message | String | Details about why the batch job cancel request failed. | Small, 52.0 | 52.0 |

This table lists HTTP response code descriptions that are unique to this resource.

| HTTP Response Code | Error Code | Description |
| --- | --- | --- |
| 400 | INVALID_STATUS | We can't cancel the batch job that doesn't have an active run. Specify the ID of a batch job with an active run and try again. |
| 400 | INVALID_STATUS | We can't cancel the batch job that is already canceled or completed. Specify the ID of a valid batch job with the status InProgress or Submitted and try again. |
| 400 | DELETE_FAILED | We can’t cancel the batch job of which the results are already being written back. |
| 400 | DELETE_FAILED | We can’t cancel the batch job because of an error in processing your org’s data. Run the Data Processing Engine definition and try again. |
| 403 | FORBIDDEN | You don’t have the permission to cancel a batch job. Ask your Salesforce admin for help. |
| 404 | RESOURCE_NOT_FOUND | Specify the ID of a valid batch job and try again. |
| 500 | INTERNAL_SERVER_ERROR | Something went wrong when we tried to cancel the batch job. Try again or ask your Salesforce admin for help. |